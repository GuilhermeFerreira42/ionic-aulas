import { Component } from '@angular/core';
import { IonReorderGroup, NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pathImgs = '../../assets/img/';

  public botoes = [
    { imagem: ['coisa.jpg'] , titulo : 'coisa 1', valor: 'texto', botao: 'Detalhes' },
    { imagem: ['coisa.jpg'] , titulo : 'coisa 2', valor: 'texto', botao: 'Detalhes' },
    { imagem: ['coisa.jpg'] , titulo : 'coisa 3', valor: 'texto', botao: 'Detalhes' },
    { imagem: ['coisa.jpg'] , titulo : 'coisa 4', valor: 'texto', botao: 'Detalhes' },
    { imagem: ['coisa.jpg'] , titulo : 'coisa 5', valor: 'texto', botao: 'Detalhes' },
  ]
  navCtrl: any;
  
  constructor() {}

  public Ifood : any = [];

  public goifood(ifood: any){
    this.navCtrl.vnavigateForWard('pagina',{queryParams: {ifood: ifood}});


  }

  
}
