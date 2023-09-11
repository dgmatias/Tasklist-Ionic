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
    
    const arrayJson = localStorage.getItem('db.json');

    if(arrayJson) {
      console.log(arrayJson);
      this.tasks = JSON.parse(arrayJson);
    }

  }
  
  // Função responsável por retornar um Id com base em um array.

  getId(): number {
    return this.getIdService.get(this.tasks);
  }

  //Função responsável por adicionar um objeto ao array(tasks).

  async addTask() {
    const inputValue: string | undefined = await this.alertService.alert('Adicionar Tarefa', 'Digite o nome da tarefa', 'Adicionar');
  
    if (inputValue !== undefined) {
      this.addService.add(inputValue, this.getId(), this.tasks);
      localStorage.setItem('dbJson', JSON.stringify(this.tasks));
    }
  }

  // Função responsável por retirar um objeto do array(tasks) com base no seu id.

  deleteTask(task: TaskModel) {
    this.deleteService.delete(task, this.tasks);
    let key: string | null = localStorage.key(0);
    if(key) {
      localStorage.setItem(key, JSON.stringify(this.tasks));    
    }
  }
  
  // Função responsável por editar um atributo do objeto task.

  async editTask(task: TaskModel) {
    const inputValue: string | undefined = await this.alertService.alert('Adicionar Tarefa', 'Digite o nome da tarefa', 'Adicionar');

    if(inputValue !== undefined) {
      this.editService.edit(task, inputValue);
      let key: string | null = localStorage.key(0);
      if(key) {
      localStorage.setItem(key, JSON.stringify(this.tasks));    
      }
    }

  }

  // Função responsável por trocar o status do objeto task

  changeStatus(task: TaskModel) {
    this.changeService.change(task);
  }

}
