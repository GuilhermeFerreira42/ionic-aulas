import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage {

  public pathImgs   = '../../assets/img/';
  public quantidade = 0;
  
  public produto = {
    descricao   : '', 
    titulo        : '',
    valor       : 0.00, 
    imagens     : [],

    categoria   : 0, 
    codigo      : 0,
    visibled    : false
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {this.produto = params['produto'];});
   }

  public formataValor(valor: any) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public add(){
    this.quantidade += 1;
  }

  public remove(){
    if(this.quantidade > 0){
      this.quantidade -= 1;
    }
  }

}
