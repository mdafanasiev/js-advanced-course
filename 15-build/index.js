"use strict";

import { Task } from "./task.js";
import { User } from "./user.js";

const task = new Task("create");
const user = new User(task);
