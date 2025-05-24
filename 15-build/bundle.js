(function () {
    'use strict';

    class Task {
        #msg;
        constructor(msg) {
            this.#msg = msg;
        }

        run() {
            console.log(this.#msg);
        }
    }

    class User {
        constructor(task) {
            this.#do(task);
        }

        #do(task) {
            task.run();
        }
    }

    const task = new Task("create");
    new User(task);

})();
