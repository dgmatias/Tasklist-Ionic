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

  constructor(private addService: AddService, private editService: EditService, private deleteService: DeleteService, private concludeService: ConcludeService, private alertControler: AlertController) {}

  tasks: TaskModel[] = []


  async showAlert() {

    const ALERT = await this.alertControler.create({
      header: "Adicionar tarefa",
      inputs: [
                {
                  name: "task",
                  type: "text",
                  checked: true,
                  placeholder: "Digite o nome da tarefa",
                }
              ],
      buttons: [
                {
                 text: "Adicionar",
                 handler: (form)=>{
                                    if(form.task) {
                                      this.tasks.push(this.addService.add(form.task));
                                      console.log("Valor válido");
                                    } else {
                                      console.log("Valor inválido");
                                    }
                                  } 
                }
               ]
    })

    ALERT.present();

  }

  editTask() {
    this.editService.edit();
  }

  deleteTask() {
    this.deleteService.delete();
  }

  concludeTask() {
    this.concludeService.conclude();
  }

}
