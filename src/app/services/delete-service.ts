import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' // Especifica o escopo de injeção do serviço
  })
export class DeleteService {

    delete() {
        console.log("Tarefa deletada")
    };

}