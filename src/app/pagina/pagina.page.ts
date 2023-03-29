import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {

  public pathImgs = '../../assets/img/';

  
  public ifood =  {
    titulo: '',
    descrição: '',
    imagens: []
}


  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(
      params => {this.ifood = params['ifood'];}
    );
   }

  ngOnInit() {
  }


}
