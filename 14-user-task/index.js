"use strict";

import { Task } from "./task.js";
import { User } from "./user.js";

const task = new Task("задача создана");
const user = new User(task);
