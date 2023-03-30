import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {

  public pathImgs = '../../assets/img/';

  
  public botoes =  {
    titulo: '',
    botão: '',
    imagens: []
}


  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(
      params => {this.botoes = params['botoes'];}
    );
   }

  ngOnInit() {
  }


}
