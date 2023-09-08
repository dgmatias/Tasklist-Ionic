import { AlertController } from "@ionic/angular";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  async alert(headerText: string, placeholderText: string, buttonText: string): Promise<string | undefined> {
    return new Promise<string | undefined>(async (resolve) => {
      const ALERT = await this.alertController.create({
        header: headerText,
        inputs: [
          {
            name: "task",
            type: "text",
            checked: true,
            placeholder: placeholderText,
          },
        ],
        buttons: [
          {
            text: "Cancelar",
            handler: () => {
              console.log("Ação cancelada");
              resolve(undefined);
            },
          },
          {
            text: buttonText,
            handler: (form) => {
              if (form.task) {
                resolve(form.task);
              } else {
                console.log("Valor inválido");
                resolve(undefined);
              }
            },
          },
        ],
      });

      await ALERT.present();
    });
  }
}
