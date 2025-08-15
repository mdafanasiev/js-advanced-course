export class User {
    constructor(task) {
        this.#do(task);
    }

    #do(task) {
        task.run();
    }
}
