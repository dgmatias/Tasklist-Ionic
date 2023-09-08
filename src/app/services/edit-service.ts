import { Injectable } from "@angular/core";
import { TaskModel } from "../models/task-model";

@Injectable({
    providedIn: 'root' // Especifica o escopo de injeção do serviço
  })

export class EditService {

    edit(task: TaskModel, newName: string) {
        task.name = newName;
    }

}