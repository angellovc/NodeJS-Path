class recovery {

    /*
        When the user requests the recovery password
        services, a token will be created to assure
        the transaction.

        The token is stored in his DB user table
        and the email is sent
    */
    async sendRecovery(email) {
        // Check the user exists
        const user = await service.findByEmail(email);
        if (!user) {
          throw boom.unauthorized();
        }
        const payload = { sub: user.id };
        const token = jwt.sign(payload, config.jwtSecret, {expiresIn: '15min'});
        const link = `http://myfrontend.com/recovery?token=${token}`;
        await service.update(user.id, {recoveryToken: token});
        const mail = {
            from: config.smtpEmail,
            to: `${user.email}`,
            subject: "Email para recuperar contraseña",
            html: `<b>Ingresa a este link => ${link}</b>`,
        }
        const rta = await this.sendMail(mail);
        return rta;
    }
    
    /*
        The user should access to a form in which he'll
        introduce the new password. Then, the new password
        will be sent to the backend again along with the
        token. The token duration will be tested, if all is ok
        The token will be checked against the one stored
        in the DB, if both matches, the operation will
        continue by deleting the token in the DB and 
        updating the password  
    */
    async changePassword(token, newPassword) {
        try {
            const payload = jwt.verify(token, config.jwtSecret);
            const user = await service.findOne(payload.sub);
            if (user.recoveryToken !== token) {
                throw boom.unauthorized();
            }
            const hash = await bcrypt.hash(newPassword, 10);
            await service.update(user.id, {recoveryToken: null, password: hash});
            return { message: 'password changed' };
        }catch (error) {
            throw boom.unauthorized();
        }
    }
    
      async sendMail(infoMail) {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          secure: true,
          port: 465,
          auth: {
            user: config.smtpEmail,
            pass: config.smtpPassword
          }
        });
        await transporter.sendMail(infoMail);
        return { message: 'mail sent' };
      }
}