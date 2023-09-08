import { Injectable } from "@angular/core";
import { TaskModel } from "../models/task-model";

@Injectable({
    providedIn: 'root' // Especifica o escopo de injeção do serviço
  })
export class DeleteService {

    delete(task: TaskModel, array: TaskModel[]) {
        const index = array.findIndex(array => array.id === task.id);
        
        // Remove o objeto com base no índice encontrado
        array.splice(index, 1);
        console.log(`Tarefa '${task.id}' removida com sucesso.`);
    };

}