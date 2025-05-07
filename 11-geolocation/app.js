function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (pos) => resolve(pos),
            (posErr) => reject(posErr)
        );
    });
}

getCurrentPosition()
    .then((pos) => {
        console.log(`Широта вашей позиции: ${pos.coords.latitude}`);
        console.log(`Долгота вашей позиции: ${pos.coords.longitude}`);
    })
    .catch((posErr) => console.log(`Произошла ошибка ${posErr.message}`));
