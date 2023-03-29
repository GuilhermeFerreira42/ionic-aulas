import { Component } from '@angular/core';

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
  
  constructor() {}

}
