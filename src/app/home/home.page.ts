import { Component } from '@angular/core';
import { TaskModel } from '../models/task-model';

// import { AlertController } from '@ionic/angular';
import { ChangeService } from '../services/change-service';
import { AddService } from '../services/add-service';
import { GetIdService } from '../services/getId-service';
import { Injectable } from '@angular/core';
import { DeleteService } from '../services/delete-service';
import { EditService } from '../services/edit-service';
import { AlertService } from '../services/alert-service';

@Injectable({
  providedIn: 'root' // Especifica o escopo de injeção do serviço
})

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  tasks: TaskModel[] = [] //Array responsável pelo "banco de dados"

  constructor
  (
    private getIdService: GetIdService,
    private addService: AddService,
    private deleteService: DeleteService,
    private editService: EditService,
    private changeService: ChangeService, 
    private alertService: AlertService,
  ) {
    
    const arrayJson = localStorage.getItem('dbJson');

    if(arrayJson) {
      this.tasks = JSON.parse(arrayJson);
      console.log(this.tasks);
    }
    
  }
  
  // Função responsável por retornar um Id com base em um array.

  getId(): number {
    return this.getIdService.get(this.tasks); //é chamado o método get.
  }

  //Função responsável criar uma tarefa.

  async addTask() {

    const inputValue: string | undefined = await this.alertService.alert('Adicionar Tarefa', 'Digite o nome da tarefa', 'Adicionar'); //É criada a const inputValue, ela recebe o return do método alert, que pode ser o valor digitado pelo input do alert caso o valor seja confirmado, ou pode ser um valor undefined caso não seja confirmado
  
    if (inputValue !== undefined) { //verifica se o return do alert foi diferente de undefined
      this.addService.add(inputValue, this.getId(), this.tasks); //é chamado o método add

      localStorage.setItem('dbJson', JSON.stringify(this.tasks)); //setItem adiciona o array em forma de objeto json no Local Storage
    }
  }

  // Função responsável por retirar um objeto do array(tasks) com base no seu id.

  deleteTask(task: TaskModel) {
    this.deleteService.delete(task, this.tasks); //é chamado a função delete
    localStorage.setItem('dbJson' , JSON.stringify(this.tasks)); //Atualiza o Local Storage adicionando o novo array.
  }
  
  // Função responsável por editar um atributo do objeto task.

  async editTask(task: TaskModel) {
    const inputValue: string | undefined = await this.alertService.alert('Adicionar Tarefa', 'Digite o nome da tarefa', 'Adicionar');//É criada a const inputValue, ela recebe o return do método alert, que pode ser o valor digitado pelo input do alert caso o valor seja confirmado, ou pode ser um valor undefined caso não seja confirmado

    if(inputValue !== undefined) {
      this.editService.edit(task, inputValue); //É chamado o método edit

      localStorage.setItem('dbJson', JSON.stringify(this.tasks)); //Atualiza o Local Storage adicionando o novo array.    
    }

  }

  // Função responsável por trocar o status do objeto task

  changeStatus(task: TaskModel) {
    this.changeService.change(task); //é chamado o método change
  }

}
