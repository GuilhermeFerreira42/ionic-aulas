import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public segment="0"

  public pathImgs = '../../assets/img/';

  public botoes = [
    {  codigo: 1, categoria: 3, imagens: ['coisa.jpg'] , titulo : 'coisa 1', valor: '400', botao: 'Ver Mais', descricao   : 'Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.', },
   ]
 

  public nikes = [
    {  codigo: 1, categoria: 3, imagens: ['coisa.jpg'] , titulo : 'coisa 1', valor: '400', botao: 'Ver Mais', descricao   : 'Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.', },
]

public camisetas = [
  {  codigo: 1, categoria: 3, imagens: ['coisa.jpg'] , titulo : 'coisa 1', valor: '400', botao: 'Ver Mais', descricao   : 'Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.', },
]
 
  constructor(private navCtrl: NavController) {}

  public goProduto(produto: any) {
    this.navCtrl.navigateForward('pagina', {
      queryParams: { produto: produto }
    });
  }
}
