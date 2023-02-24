
const { createReadStream } = require('fs');



function countWords(src) {
    return new Promise((resolve, reject) => {
        const stream = createReadStream(src);
        let wordsAmount = 0;
        let lastWord = '';
    
        stream.on('data', (chunk) => {
            const words = (lastWord + chunk.toString()).split(/\s+/);
            lastWord = words.pop();
            wordsAmount += words.length;
        })

        stream.on('end', () => {
            if (lastWord)
                wordsAmount += lastWord.split(/\s+/).length
            resolve(wordsAmount);            
        })
    })
}

module.exports = {
    countWords
}

if (require.main === module) {
    const file = process.argv[2];
    if (file === undefined)
        throw new Error('You have to enter a valid file');
    countWords(file).then(words => {
        console.log(words)
    });
}

