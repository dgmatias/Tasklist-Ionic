import { Component } from '@angular/core';
import { AddService } from '../services/add-service';
import { EditService } from '../services/edit-service';
import { DeleteService } from '../services/delete-service';
import { ConcludeService } from '../services/conclude-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private addService: AddService, private editService: EditService, private deleteService: DeleteService, private concludeService: ConcludeService) {}

  addTask() {
    this.addService.add();
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
