function race(...promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            promise.then((val) => resolve(val)).catch((e) => reject(e));
        });
    });
}

console.log(
    race(
        fetch("https://dummyjson.com/products"),
        fetch("https://pokeapi.co/api/v2/pokemon/ditto"),
        fetch("https://dummyjson.com/carts")
    )
);
