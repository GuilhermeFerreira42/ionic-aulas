import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mumuca',
  templateUrl: './mumuca.page.html',
  styleUrls: ['./mumuca.page.scss'],
})
export class MumucaPage implements OnInit {
  public pathImgs = '../../assets/img/';
  segment = "0"; // Adicione a propriedade "segment" aqui
  constructor() {}

  ngOnInit() {}
}