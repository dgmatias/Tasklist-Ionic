import { TaskModel } from "../models/task-model";

export class ChangeService {

    change(task: TaskModel) {
        console.log(`O status da tarefa passou de ${task.status} para ${!task.status}`);
        task.status = !task.status;
    }

}