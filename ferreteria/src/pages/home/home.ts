import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ArticuloService} from '../../services/articulo.services';
import {DetailtPage} from '../detailt/detailt';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  articulos:any=[];

  constructor(public navCtrl: NavController, public articuloService: ArticuloService ) {
    this.articulos = articuloService.getArticulos();
    
  }

  public goToDetail(ref){
    this.navCtrl.push(DetailtPage,{ref:ref});
  }

  public createArticulo(){
    this.navCtrl.push(DetailtPage, {ref:0});
  }

}
