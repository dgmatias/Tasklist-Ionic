import { HomePage } from "../home/home.page";
import { TaskModel } from "../models/task-model";
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root' // Especifica o escopo de injeção do serviço
  })

export class AddService {

    add(nameTask: string, idTask: number, array: TaskModel[]) {
        let obj: TaskModel = {id: idTask, name: nameTask, status: false};
        array.push(obj);
    }


}