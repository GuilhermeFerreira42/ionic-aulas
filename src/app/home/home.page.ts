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
    {  codigo: 1, categoria: 3, imagens: ['deerupt.jpg'] , titulo : 'Deerupt', valor: '400', botao: 'VER MAIS', descricao   : 'O tênis apresenta uma malha elástica que cobre todo o tênis, proporcionando um ajuste firme e confortável, e a sola de borracha oferece tração e durabilidade. O Deerupt também possui uma palmilha OrthoLite para maior conforto e uma entressola em EVA para amortecimento.', },

    {  codigo: 1, categoria: 3, imagens: ['nmd.jpg'] , titulo : 'NMD', valor: '400', botao: 'VER MAIS', descricao   : 'O Adidas NMD é um modelo de tênis bastante popular no mercado livre. Ele foi lançado em 2015 e rapidamente se tornou um ícone da moda sneakerhead. O tênis apresenta um design moderno e elegante, com uma parte superior em malha que se adapta ao formato do pé para proporcionar um ajuste confortável. A sola Boost da Adidas proporciona amortecimento e conforto excepcionais, além de fornecer um retorno de energia duradouro.', },

    {  codigo: 1, categoria: 3, imagens: ['ozweego.jpg'] , titulo : 'Ozweego', valor: '400', botao: 'VER MAIS', descricao   : 'O tênis apresenta um design moderno e futurista, com uma parte superior em malha, camurça e couro sintético. A entressola em EVA proporciona amortecimento e conforto excepcionais, e a sola de borracha oferece tração e durabilidade. O Adidas Ozweego também tem uma palmilha OrthoLite para maior conforto e controle de odor. O modelo está disponível em diversas cores vibrantes e sofisticadas, incluindo algumas edições limitadas e colaborações exclusivas. O Adidas Ozweego é uma excelente opção para quem busca um tênis estiloso e confortável para uso casual ou esportivo. Ele tem um visual moderno e ousado, que se destaca na multidão. No mercado livre, você pode encontrar diferentes tamanhos e cores do Adidas Ozweego, permitindo que você escolha o modelo que melhor atenda às suas necessidades e preferências.', },

    {  codigo: 1, categoria: 3, imagens: ['adidas 4D.jpg'] , titulo : 'adidas 4D', valor: '400', botao: 'VER MAIS', descricao   : 'O Adidas 4D é um modelo de tênis inovador que combina tecnologia de impressão 3D com a expertise da marca em calçados esportivos. A tecnologia 4D envolve a criação de uma entressola única e personalizada, que é projetada usando impressão 3D e composta de material de polímero líquido. Isso resulta em uma entressola que oferece amortecimento responsivo e suporte a cada passada. A parte superior do Adidas 4D é feita em material têxtil respirável, que proporciona conforto e suporte aos pés. A sola de borracha proporciona tração e durabilidade, tornando o tênis ideal para uso esportivo e casual. O Adidas 4D está disponível em diversas cores e modelos, incluindo edições limitadas e colaborações exclusivas, o que o torna uma opção ideal para aqueles que buscam um tênis único e diferenciado. ', },

   ]
 

  public nikes = [
    {  codigo: 1, categoria: 3, imagens: ['coisa.jpg'] , titulo : 'coisa 1', valor: '400', botao: 'VER MAIS', descricao   : 'Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.', },
]

public camisetas = [
  {  codigo: 1, categoria: 3, imagens: ['coisa.jpg'] , titulo : 'coisa 1', valor: '400', botao: 'VER MAIS', descricao   : 'Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.', },
]
 
  constructor(private navCtrl: NavController) {}

  public goProduto(produto: any) {
    this.navCtrl.navigateForward('pagina', {
      queryParams: { produto: produto }
    });
  }
}
