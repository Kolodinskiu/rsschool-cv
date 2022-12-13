


function render() {

    const productsStore= localStorageUtil.getProducts();


    headerPage.render(productsStore.length);
    productsPage.render();
}
spinnerPage.render();

let CATALOG = [];

// https://api.jsonbin.io/v3/b/6373473d0e6a79321e4a24ed
// https://api.jsonserve.com/t9zNBA
// server/catalog.json

fetch('server/catalog1.json')
    .then(res => res.json())
    .then( body => {
        CATALOG = body;
        spinnerPage.handleClear();
        render();
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    })