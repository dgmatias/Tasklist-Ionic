import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' // Especifica o escopo de injeção do serviço
  })

export class EditService {

    edit() {
        console.log("Tarefa editada");
    }

}