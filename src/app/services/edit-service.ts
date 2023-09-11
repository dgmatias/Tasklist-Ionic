import { Injectable } from "@angular/core";
import { TaskModel } from "../models/task-model";

@Injectable({
    providedIn: 'root' // Especifica o escopo de injeção do serviço
  })

  
export class EditService {

    //Método responsável por editar o nome de uma tarefa.

    edit(task: TaskModel, newName: string) {
        task.name = newName; //o valor do parâmetro newName é atribuido a task.name
    }

}