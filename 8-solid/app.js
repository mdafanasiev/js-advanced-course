"use strict";

class Billing {
    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() {
        return this.amount;
    }
}

class HourBilling extends Billing {
    #hoursCount;

    constructor(amount, hoursCount) {
        super(amount);
        this.#hoursCount = hoursCount;
    }

    calculateTotal() {
        return this.amount * this.#hoursCount;
    }
}

class ItemBilling extends Billing {
    #itemsCount;

    constructor(amount, itemsCount) {
        super(amount);
        this.#itemsCount = itemsCount;
    }

    calculateTotal() {
        return this.amount * this.#itemsCount;
    }
}

const billings = [];

billings.push(new Billing(5));

billings.push(new HourBilling(10, 15));

billings.push(new ItemBilling(1, 3));

billings.forEach((billing) => console.log(billing.calculateTotal()));
