function paramqueryAddToCart() {
    return {
        identity: '1aa8498f15681e542029eaa7863bbcf2',
        access_token: 'J4ZArTK08kSsFbiWG9SadU6Y6I0hBwcifbzIF86I8Xxuug',
    };
}

const payloadAddToCart = () =>({
    product_id: "cbz2g1",
    product_sku_id: 739042582,
    quantity: 1
})

module.exports = {
    paramqueryAddToCart,
    payloadAddToCart,
};