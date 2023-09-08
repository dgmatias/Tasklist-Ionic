import { TaskModel } from "../models/task-model";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root' // Especifica o escopo de injeção do serviço
  })
export class ChangeService {

    change(task: TaskModel) {
        console.log(`O status da tarefa passou de ${task.status} para ${!task.status}`);
        task.status = !task.status;
    }

}