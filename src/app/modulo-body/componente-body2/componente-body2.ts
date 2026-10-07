import { Component } from '@angular/core';
import { ComponenteBody1 } from '../componente-body1/componente-body1';
import { CardsBody } from '../../interfaces/interfaces-card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatButtonModule, CommonModule],
  selector: 'app-componente-body2',
  styleUrl: './componente-body2.css',
  templateUrl: './componente-body2.html',
})
export class ComponenteBody2 {
  cantidadCards: CardsBody[] = [];
  cantidadPage: number[] = [];
  constructor (private cardsBody: ComponenteBody1){
  this.cantidadCards = this.cardsBody.mostrar()

  for (let a: number=1; a < this.cantidadCards.length+1; a++ ){
    if(a<4 || a/(this.cantidadCards.length)===1){
    this.cantidadPage.push(a);
    }
  }
  }

  seleccionado: number | null = null;
  seleccionar(b:number){
    this.seleccionado = b
  }
  


}
