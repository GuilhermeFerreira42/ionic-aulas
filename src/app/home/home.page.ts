import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public formataValor(valor: any) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public segment="0"

  public pathImgs = '../../assets/img/';

  public botoes = [
    {  codigo: 1, categoria: "Tenis", imagens: ['deerupt.jpg'] , titulo : 'Deerupt', valor: '400', botao: 'VER MAIS', descricao   : 'O tênis apresenta uma malha elástica que cobre todo o tênis, proporcionando um ajuste firme e confortável, e a sola de borracha oferece tração e durabilidade. O Deerupt também possui uma palmilha OrthoLite para maior conforto e uma entressola em EVA para amortecimento.', },

    {  codigo: 2, categoria: "Tenis", imagens: ['nmd.jpg'] , titulo : 'NMD', valor: '450', botao: 'VER MAIS', descricao   : 'O Adidas NMD é um modelo de tênis bastante popular no mercado livre. Ele foi lançado em 2015 e rapidamente se tornou um ícone da moda sneakerhead. O tênis apresenta um design moderno e elegante, com uma parte superior em malha que se adapta ao formato do pé para proporcionar um ajuste confortável. A sola Boost da Adidas proporciona amortecimento e conforto excepcionais, além de fornecer um retorno de energia duradouro.', },

    {  codigo: 3, categoria: "Tenis", imagens: ['ozweego.jpg'] , titulo : 'Ozweego', valor: '350', botao: 'VER MAIS', descricao   : 'O tênis apresenta um design moderno e futurista, com uma parte superior em malha, camurça e couro sintético. A entressola em EVA proporciona amortecimento e conforto excepcionais, e a sola de borracha oferece tração e durabilidade. O Adidas Ozweego também tem uma palmilha OrthoLite para maior conforto e controle de odor. O modelo está disponível em diversas cores vibrantes e sofisticadas, incluindo algumas edições limitadas e colaborações exclusivas. O Adidas Ozweego é uma excelente opção para quem busca um tênis estiloso e confortável para uso casual ou esportivo. Ele tem um visual moderno e ousado, que se destaca na multidão. No mercado livre, você pode encontrar diferentes tamanhos e cores do Adidas Ozweego, permitindo que você escolha o modelo que melhor atenda às suas necessidades e preferências.', },

    {  codigo: 4, categoria: "Tenis", imagens: ['adidas 4D.jpg'] , titulo : 'adidas 4D', valor: '368', botao: 'VER MAIS', descricao   : 'O Adidas 4D é um modelo de tênis inovador que combina tecnologia de impressão 3D com a expertise da marca em calçados esportivos. A tecnologia 4D envolve a criação de uma entressola única e personalizada, que é projetada usando impressão 3D e composta de material de polímero líquido. Isso resulta em uma entressola que oferece amortecimento responsivo e suporte a cada passada. A parte superior do Adidas 4D é feita em material têxtil respirável, que proporciona conforto e suporte aos pés. A sola de borracha proporciona tração e durabilidade, tornando o tênis ideal para uso esportivo e casual. O Adidas 4D está disponível em diversas cores e modelos, incluindo edições limitadas e colaborações exclusivas, o que o torna uma opção ideal para aqueles que buscam um tênis único e diferenciado. ', },

   ]
 

  public nikes = [
    {  codigo: 5, categoria: "Tenis", imagens: ['air force.jpeg'] , titulo : 'Air Force', valor: '500', botao: 'VER MAIS', descricao   : 'O Nike Air Force é um clássico da marca Nike e um dos modelos de tênis mais icônicos do mundo da moda e do esporte. O tênis apresenta uma parte superior em couro premium, com perfurações para maior respirabilidade. A entressola em espuma e a sola de borracha proporcionam excelente amortecimento e tração, tornando o Air Force ideal para uso esportivo e casual..', },
    
    {  codigo: 6, categoria: "Tenis", imagens: ['airmax 97.jpeg'] , titulo : 'Air Max 97', valor: '300', botao: 'VER MAIS', descricao   : 'O Nike Air Max 97 é um clássico da marca Nike e um dos modelos mais populares da linha Air Max. O tênis apresenta uma parte superior em camurça e couro sintético, com linhas onduladas que se estendem por toda a extensão do tênis. A entressola é composta por uma unidade de amortecimento Air Max, que proporciona conforto e suporte a cada passada, enquanto a sola de borracha oferece tração e durabilidade.', },

    {  codigo: 7, categoria: "Tenis", imagens: ['blaze.jpeg'] , titulo : 'Blazer', valor: '250', botao: 'VER MAIS', descricao   : 'O Nike Blazer é um tênis icônico da marca Nike, que combina estilo e conforto em um design clássico e atemporal. O tênis apresenta uma parte superior em couro premium, com o icônico Swoosh da Nike nas laterais. A entressola em espuma e a sola de borracha oferecem excelente amortecimento e tração, tornando o Blazer ideal para uso esportivo e casual.', },

    { codigo: 8, categoria: "Tenis", imagens: ['dunk.jpeg'] , titulo : 'Dunk', valor: '250', botao: 'VER MAIS', descricao   : 'O Nike Dunk é um tênis clássico da marca Nike, que se tornou um ícone da cultura sneakerhead e da moda urbana. O tênis apresenta uma parte superior em couro ou camurça, com o icônico Swoosh da Nike nas laterais. A entressola em espuma e a sola de borracha oferecem excelente amortecimento e tração, tornando o Dunk ideal para uso esportivo e casual.' , },
]

public camisetas = [
  {  codigo: 9, categoria: 'Camisetas', imagens: ['t-shirt nike (1).jpg'] , titulo : 't-shirt nike', valor: '100', botao: 'VER MAIS', descricao   : 'As camisetas de algodão Nike são uma escolha clássica e confortável para aqueles que buscam estilo e qualidade. As camisetas apresentam uma construção em 100% algodão, proporcionando uma sensação macia e confortável ao toque. O design é simples e elegante, com o icônico Swoosh da Nike em destaque no peito.', },

  {  codigo: 10, categoria: 'Camisetas', imagens: ['t-shirt nike (2).jpg'] , titulo : 't-shirt nike', valor: '120', botao: 'VER MAIS', descricao   : 'As camisetas de algodão Nike são uma escolha clássica e confortável para aqueles que buscam estilo e qualidade. As camisetas apresentam uma construção em 100% algodão, proporcionando uma sensação macia e confortável ao toque. O design é simples e elegante, com o icônico Swoosh da Nike em destaque no peito.', },

  {  codigo: 11, categoria: 'Camisetas', imagens: ['t-shirt nike (3).jpg'] , titulo : 't-shirt nike', valor: '60', botao: 'VER MAIS', descricao   : 'As camisetas de algodão Nike são uma escolha clássica e confortável para aqueles que buscam estilo e qualidade. As camisetas apresentam uma construção em 100% algodão, proporcionando uma sensação macia e confortável ao toque. O design é simples e elegante, com o icônico Swoosh da Nike em destaque no peito.', },

  {  codigo: 12, categoria: 'Camisetas', imagens: ['t-shirt nike (4).jpg'] , titulo : 't-shirt nike', valor: '80', botao: 'VER MAIS', descricao   : 'As camisetas de algodão Nike são uma escolha clássica e confortável para aqueles que buscam estilo e qualidade. As camisetas apresentam uma construção em 100% algodão, proporcionando uma sensação macia e confortável ao toque. O design é simples e elegante, com o icônico Swoosh da Nike em destaque no peito.', },

  {  codigo: 13, categoria: 'Camisetas', imagens: ['t-shirt adidas (1).jpg'] , titulo : 't-shirt adidas', valor: '100', botao: 'VER MAIS', descricao   : 'As camisetas de algodão Adidas são uma escolha clássica e confortável para aqueles que buscam estilo e qualidade. As camisetas apresentam uma construção em 100% algodão, proporcionando uma sensação macia e confortável ao toque. O design é simples e elegante, com o icônico logotipo da Adidas em destaque no peito.', },

  {  codigo: 14, categoria: 'Camisetas', imagens: ['t-shirt adidas (2).jpg'] , titulo : 't-shirt adidas', valor: '90', botao: 'VER MAIS', descricao   : 'As camisetas de algodão Adidas são uma escolha clássica e confortável para aqueles que buscam estilo e qualidade. As camisetas apresentam uma construção em 100% algodão, proporcionando uma sensação macia e confortável ao toque. O design é simples e elegante, com o icônico logotipo da Adidas em destaque no peito.', },

  {  codigo: 15, categoria: 'Camisetas', imagens: ['t-shirt adidas (3).jpg'] , titulo : 't-shirt adidas', valor: '110', botao: 'VER MAIS', descricao   : 'As camisetas de algodão Adidas são uma escolha clássica e confortável para aqueles que buscam estilo e qualidade. As camisetas apresentam uma construção em 100% algodão, proporcionando uma sensação macia e confortável ao toque. O design é simples e elegante, com o icônico logotipo da Adidas em destaque no peito.', },

  {  codigo: 16, categoria: 'Camisetas', imagens: ['t-shirt adidas (4).jpg'] , titulo : 't-shirt adidas', valor: '60', botao: 'VER MAIS', descricao   : 'As camisetas de algodão Adidas são uma escolha clássica e confortável para aqueles que buscam estilo e qualidade. As camisetas apresentam uma construção em 100% algodão, proporcionando uma sensação macia e confortável ao toque. O design é simples e elegante, com o icônico logotipo da Adidas em destaque no peito.', },
]
 
  constructor(private navCtrl: NavController) {}

  public goProduto(produto: any) {
    this.navCtrl.navigateForward('pagina', {
      queryParams: { produto: produto }
    });
  }
}
