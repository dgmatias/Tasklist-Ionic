import { Injectable } from "@angular/core";
import { TaskModel } from "../models/task-model";

@Injectable({
    providedIn: 'root' // Especifica o escopo de injeção do serviço
  })
export class DeleteService {

    //Método responsável por retirar um item de um array com base em um índice.

    delete(task: TaskModel, array: TaskModel[]) {
        const index = array.findIndex(array => array.id === task.id); //é declarado uma const chamada index, que recebe o retorno da função findIndex,
        
        array.splice(index, 1); // Remove o objeto com base no índice encontrado
        console.log(`Tarefa '${task.id}' removida com sucesso.`);
    };

}