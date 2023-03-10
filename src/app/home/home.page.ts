import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { info } from 'console';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage{
  radioSelecionada: string='';
  valor: string="";
  calcular: number=0

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  calc(){
    if(this.radioSelecionada=='PIX'){
      this.calcular = parseFloat(this.valor) - parseFloat(this.valor) * 0.10;
    }else if(this.radioSelecionada == 'cred'){
      this.calcular = parseFloat(this.valor)+parseFloat(this.valor) * 0.10;
    }else{
      this.calcular = parseFloat(this.valor)
    }
  }
  verificarRadio (){
    this.calc()
    this.exibirAlerta();
    }
    async exibirAlerta(){
      const alert = await this.alertController.create({
        message: "Valor final:" + this.calcular
      });
      alert.present();
    }
  }