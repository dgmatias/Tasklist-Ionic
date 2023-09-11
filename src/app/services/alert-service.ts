import { AlertController } from "@ionic/angular";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  //O método alert ira criar e exibir um alert com um input com base nos seus parâmetros, além disso, esse método retorna a uma Promise. que será do tipo string caso o valor digitado no input não seja vazio, ou será do tipo undefined caso o alert seja cancelado ou o valor do input seja vazio.

  async alert(headerText: string, placeholderText: string, buttonText: string): Promise<string | undefined> {

    return new Promise<string | undefined>(async (resolve) => {
      
      const ALERT = await this.alertController.create({
        header: headerText, //atribundo o valor do parâmetro headerText a propriedade header.
        inputs: [
          {
            name: "task",
            type: "text",
            checked: true,
            placeholder: placeholderText, //atribundo o valor do parâmetro placeholderText a propriedade placeholder.
          },
        ],
        buttons: [
          {
            text: "Cancelar",
            handler: () => {
              console.log("Ação cancelada");
              resolve(undefined); //O valor da Promise será undefined caso essa arrow function seja chamada. 
            },
          },
          {
            text: buttonText, //atribundo o valor do parâmetro buttonText a propriedade text.
            handler: (form) => {
              if (form.task) {
                resolve(form.task); //Se existir form.task(valor do input), o valor de form.task será atribuido a Promise.
              } else {
                console.log("Valor inválido"); 
                resolve(undefined); //O valor da Promise será undefined caso essa arrow function seja chamada.
              }
            },
          },
        ],
      });

      await ALERT.present();
    });
  }
}
