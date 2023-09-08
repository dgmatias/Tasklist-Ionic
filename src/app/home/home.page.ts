import { Component } from '@angular/core';
import { TaskModel } from '../models/task-model';

import { AlertController } from '@ionic/angular';
import { ChangeService } from '../services/change-service';
import { AddService } from '../services/add-service';
import { GetIdService } from '../services/getId-service';
import { Injectable } from '@angular/core';
import { DeleteService } from '../services/delete-service';

@Injectable({
  providedIn: 'root' // Especifica o escopo de injeção do serviço
})

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor
  (
    private getIdService: GetIdService,
    private addService: AddService,
    private deleteService: DeleteService,
    private changeService: ChangeService,
    private alertControler: AlertController 
    
  ) {}

  tasks: TaskModel[] = [] //Array responsável pelo "banco de dados"

  // Função responsável por criar e exibir um Alert. com o parâmetros headerText, placeholderText e buttonText será possível atribuir valores as propriedades do objeto  do Alert, com o parâmetro callback será possível atribuir uma função a propriedade handler ao objeto do Alert.

  async showAlert(headerText: string, placeholderText: string, buttonText: string, callback: any, task?: TaskModel) {

    const ALERT = await this.alertControler.create({
      header: headerText,
      inputs: [
                {
                  name: "task",
                  type: "text",
                  checked: true,
                  placeholder: placeholderText,
                }
              ],
      buttons: [
                {
                  text: "Cancelar",
                  handler: ()=>{console.log("Ação cancelada")}
                },
                {
                 text: buttonText,
                 handler: (form)=>{
                                    if(form.task) {
                                      console.log("Valor válido");
                                      callback(form.task, task);
                                    } else {
                                      console.log("valor inválido")
                                    }
                                  } 
                },
               ]
    })

    ALERT.present();

  }

  // Função responsável por retornar um id.

  getId(): number {
    return this.getIdService.get(this.tasks);
  }

  //Função responsável por adicionar um objeto ao array(tasks).

  addTask(nameTask: string, idTask: number = this.getIdService.get(this.tasks)) {
    this.addService.add(nameTask, idTask, this.tasks);
  }

  // Função responsável por retirar um objeto do array(tasks) com base no seu id.

  deleteTask(task: TaskModel) {
    this.deleteService.delete(task, this.tasks);
  }
  
  // Função responsável por editar um atributo do objeto task.

  editTask(newName: string, task: TaskModel) {
    task.name = newName;
  }

  // Função responsável por trocar o status do objeto task

  changeStatus(task: TaskModel) {
    this.changeService.change(task);
  }

}
