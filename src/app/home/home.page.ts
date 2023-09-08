import { Component } from '@angular/core';
import { AddService } from '../services/add-service';
import { EditService } from '../services/edit-service';
import { DeleteService } from '../services/delete-service';
import { ConcludeService } from '../services/conclude-service';
import { AlertController } from '@ionic/angular';
import { TaskModel } from '../models/task-model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor
  (
    private addService: AddService, 
    private editService: EditService, 
    private deleteService: DeleteService, 
    private concludeService: ConcludeService, 
    private alertControler: AlertController 
    
  ) {}

  tasks: TaskModel[] = [] //Array responsável pelo "banco de dados"

  // Função responsável por criar e exibir um Alert. com o parâmetros headerText, placeholderText e buttonText será possível atribuir valores as propriedades do objeto  do Alert e com o parâmetro callback será possível atribuir uma função a propriedade handler ao objeto do Alert.

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
    let id: number = (this.tasks.length) + 1;
    return id;
  }

  //Função responsável por adicionar um objeto ao array(tasks).

  addTask(nameTask: string, idTask: number = this.getId()) {
    let obj: TaskModel = {id: idTask , name: nameTask, status: false};
    this.tasks.push(obj);
  }

  // Função responsável por retirar um objeto do array(tasks) com base no seu id.

  deleteTask(id: number) {
    const index = this.tasks.findIndex(task => task.id === id);
  
    // Remove o objeto com base no índice encontrado
    this.tasks.splice(index, 1);
    console.log(`Tarefa '${id}' removida com sucesso.`);
  }
  
  // Função responsável por editar um atributo do array task.

  editTask(newName: string, task: TaskModel) {
    task.name = newName;
  }

  concludeTask() {
    console.log("Tarefa concluida");
  }

}
