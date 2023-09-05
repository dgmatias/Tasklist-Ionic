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

  async alert(header: string, placeholder: string, buttonText: string, handler: any) {

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
                                    handler(form.task)
                                  } 
                },
               ]
    })

    ALERT.present();

  }

  concluir(text: string) {

    console.log(text)

  }



  async showAdd() {

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
                  text: "Cancelar",
                },
                {
                 text: "Adicionar",
                 handler: (form)=>{
                                    if(form.task) {
                                      let obj = {id: this.tasks.length , name: form.task, status: false};
                                      this.tasks.push(obj);
                                      console.log("Valor válido");
                                    } else {
                                      console.log("Valor inválido");
                                    }
                                  } 
                },
               ]
    })

    ALERT.present();

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
