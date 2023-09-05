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

  async alert(header: string, placeholder: string, buttonText: string, handler: (task: string) => void) {

    const ALERT = await this.alertControler.create({
      header: header,
      inputs: [
                {
                  name: "task",
                  type: "text",
                  checked: true,
                  placeholder: placeholder,
                }
              ],
      buttons: [
                {
                  text: "Cancelar",
                },
                {
                 text: buttonText,
                 handler: (form)=>{
                                    if(form.task) {
                                      console.log("dentro do alert " + form.task);
                                      handler(form.task);
                                      // this.tasks.push(handler(form.task, false));
                                      console.log("Depois da função");
                                    } else {
                                      console.log("valor inválido")
                                    }
                                  } 
                },
               ]
    })

    ALERT.present();

  }

  addTask(task: string) {
    
    let obj: TaskModel = {id: this.getId(this.tasks),name: task, status: false};

    this.tasks.push(obj);

  }

  getId(data: TaskModel[]): number {
    let id: number = (data.length) + 1; 
    return id
  }

  editTask() {
    this.editService.edit();
  }

  deleteTask(id: number) {

    const index = this.tasks.findIndex(task => task.id === id);
  
      // Remove o objeto com base no índice encontrado
      this.tasks.splice(index, 1);
      console.log(`Tarefa '${id}' removida com sucesso.`);
  }
  

  concludeTask() {
    this.concludeService.conclude();
  }

}
