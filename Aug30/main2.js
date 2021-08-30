const messageElem = document.querySelector(".message");

const waitForElement = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2) + 1;
    if (rand === 1) {
        setTimeout(() => {
            resolve(messageElem);
        }, 3000);
    } else {
        reject([messageElem, "(there was a problem)"]);
    }
});

waitForElement.then((elem) => {
    elem.style.display = 'block';

}).catch((data) => {
    const elem = data[0];
    const message = date[1];
    elem.style.display = 'block';
})

    (async () => {
        try {
            const elem = await waitForElement;
            elem.style.display = "block";
        } catch (e) {
            console.log(e.message);
        }
    })();
