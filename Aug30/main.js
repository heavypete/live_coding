//? solution with Timeout (no Promise used)

const messageElem = document.querySelector('.message');


// setTimeout(() => {
//     messageElem.style.display = 'block';
// }, 3000)


//*solve with promise
//* 1st define promise
const waitForElement = new Promise(resolve => {
    setTimeout(() => {
        resolve(messageElem);
    }, 3000)
});

//* consume promise with classic promise syntax (ES2015)
// waitForElement.then((elem) => {
//     elem.style.display = 'block';
//     elem.style.color = 'darkblue';
// })

//* consume promise with async/await syntax (ES2017).

const displayTheMessage = async () => {
    const elem = await waitForElement;
    elem.style.display = 'block';
};

displayTheMessage();

//*transform into IIFE

(async () => {
    const elem = await waitForElement;
    elem.style.display = 'block'
})();