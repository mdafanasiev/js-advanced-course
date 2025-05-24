export class Task {
    #msg;
    constructor(msg) {
        this.#msg = msg;
    }

    run() {
        console.log(this.#msg);
    }
}
