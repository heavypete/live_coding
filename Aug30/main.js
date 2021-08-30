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

waitForElement.then((elem) => {
    elem.style.display = 'block';
})