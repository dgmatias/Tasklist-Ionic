import { HomePage } from "../home/home.page";
import { Injectable } from '@angular/core';
import { TaskModel } from "../models/task-model";


@Injectable({
  providedIn: 'root' // Especifica o escopo de injeção do serviço
})
export class GetIdService {

  //Método responvável por retornar um Id com base no tamanho de um array.

  get(array: TaskModel[]): number { 
    let id: number = (array.length) + 1; //a variável id recebe o valor do tamanho do array + 1 
    return id; //a função retorna a variável id
  }
  
}