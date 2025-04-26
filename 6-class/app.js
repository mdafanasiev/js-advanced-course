class Car {
    #brand;
    #model;
    #_mileage;
    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = mileage;
    }

    get #mileage() {
        return this.#_mileage;
    }

    set #mileage(mileage) {
        this.#_mileage = mileage;
    }

    info() {
        console.log(
            `Марка: ${this.#brand}\nМодель: ${this.#model}\nПробег: ${
                this.#mileage
            } `
        );
    }
}

const audi = new Car("Audi", "A6", 150000);
audi.info();
