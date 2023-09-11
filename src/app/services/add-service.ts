import { HomePage } from "../home/home.page";
import { TaskModel } from "../models/task-model";
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root' // Especifica o escopo de injeção do serviço
  })

export class AddService {

    //Método que tem o objetivo de adicionar um objeto a um array.

    add(nameTask: string, idTask: number, array: TaskModel[]) {

        let obj: TaskModel = {id: idTask, name: nameTask, status: false}; //cria um objeto do tipo TaskModel e atribue os valores das propriedas por meio dos parâmetros.

        array.push(obj); //adiciona esse objeto ao array declarado no parâmetro.
    }


}