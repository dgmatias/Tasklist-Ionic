import { HomePage } from "../home/home.page";
import { Injectable } from '@angular/core';
import { TaskModel } from "../models/task-model";


@Injectable({
  providedIn: 'root' // Especifica o escopo de injeção do serviço
})
export class GetIdService {

  get(data: TaskModel[]): number {
    let id: number = (data.length) + 1;
    return id;
  }
  
}