import {Injectable} from '@angular/core';


@Injectable()

export class ArticuloService{
  articulos = [
      {ref:1, nomp:'Destornillador', precio:6000, descripcion:'SURTEK'},
      {ref:2, nomp:'Talagro', precio:580000, descripcion:'thakita'},
      {ref:3, nomp:'Pala', precio:29000, descripcion:'TRUPER'}
    ];
    


    public getArticulos(){
     return this.articulos;
    }

    public getArticulo(ref){
      return this.articulos.filter(function(e, i){return e.ref == ref} ) [0] || { ref:null, nomp:null, precio:null, descrip:null }; 
    }

    public createArticulo(articulo){
     this.articulos.push(articulo);
    }

    public editArticulo(articulo){
      for(let i=0; i < this.articulos.length; i++){
        if(this.articulos[i].ref==articulo.ref){
          this.articulos[i]=articulo;
        }
      }
    }

    public delArticulo(articulo){
      for(let i=0; i < this.articulos.length; i++){
        if(this.articulos[i].ref==articulo.ref){
          this.articulos.splice(i, 1);
        }
      }
    }
}
