

// console.time('timer1');
// // console.time('timer2');


// // setTimeout(() => {
// //     let i = 1000009000;
// //     while(i--) {}
// //     console.timeEnd('timer1');
// // },100)

// //  setTimeout(() => {

// // },100)


//     // new Promise((resolve, reject) => {
//     //     let i = 1000009000;
//     //     while(i--) {}
//     //     console.timeEnd('timer1');
//     //     resolve();
//     // }).then(console.log())
// // const p2 = new Promise((resolve, reject) => {
// //         let i = 1000009000;
// //         while(i--) {}
// //         console.timeEnd('timer2');
// //         resolve();
// // });

// // Promise.all([p1, p2]).then(console.log)
// const as = async () => {
//     new Promise((done) => {
//             setTimeout(() => {
//             console.log("10 timeout")
//             done();
//         }, 10)}
//     );
//     console.log("Async")

// }

// setImmediate(() => {
//     console.log('inmediate')
// })
// console.log('not blocked')
// process.nextTick(() => {
//     console.log('next tick');
// })
// setTimeout(() => {
//     console.log('timeout')
// }, 0)
// console.log('not blocked')
// as();
// console.log('not blocked')
// // (() => {

// // })()




class Warrior {
    whoAmI() {
        console.log('im a warrior');
    }
}

class Mage {
    whoAmI() {
        console.log('im a Mage');
    }
}


class Player  {

}


const classMixer = (child, parents) => {
    console.log(child, parents)
    parents.forEach(parent => {
        const properties = Object.getOwnPropertyNames(parent.prototype);
        for (property of properties) {
            Object.defineProperty(child.prototype, property, Object.getOwnPropertyDescriptor(parent.prototype, property));
        }
    });
}

classMixer(Player, [Warrior, Mage]);
const player = new Player();
player.whoAmI();