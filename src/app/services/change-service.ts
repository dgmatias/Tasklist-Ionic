import { TaskModel } from "../models/task-model";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root' // Especifica o escopo de injeção do serviço
  })
export class ChangeService {

    //Método responsável por trocar(inverter) o status de uma tarefa

    change(task: TaskModel) {
        console.log(`O status da tarefa passou de ${task.status} para ${!task.status}`);
        task.status = !task.status; //task.status é do tipo boolean, o valor a ser atribuido por ela, vai ser o próprio task.status com o valor invertido.
    }

}