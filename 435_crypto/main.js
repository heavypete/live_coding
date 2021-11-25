const euroPriceElem = document.querySelector('.euroPrice');
const dollarPriceElem = document.querySelector('.dollarPrice');

const getPrice = async (currency) => {
    const data = await fetch('https://api.cryptonator.com/api/ticker/btc-' + currency);
    const jsonData = await data.json();
    const price = jsonData.ticker.price;
    return price;
    // return new Promise(resolve => {
    // 	setTimeout(() => {
    // 		resolve(price);
    // 	}, 1000);
    // });
};

(async () => {
    euroPriceElem.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(await getPrice('eur'));
    dollarPriceElem.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(await getPrice('usd'));
})();