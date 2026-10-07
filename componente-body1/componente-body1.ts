import { Component, Injectable } from '@angular/core';
import { CardsBody, CategoriasInterfaz } from '../../interfaces/interfaces-card';
import { CommonModule } from '@angular/common';
import { ComponenteBody2 } from '../componente-body2/componente-body2';


@Component({
  imports: [CommonModule, ComponenteBody2],
  selector: 'app-componente-body1',
  styleUrl: './componente-body1.css',
  templateUrl: './componente-body1.html',
})@Injectable({providedIn: 'root'})

export class ComponenteBody1 {

  categorias: CategoriasInterfaz = {
    Categoria: ["All Articles", "Finance", "Artificial Intelegence", "Goverment", "Engineering"]
  }

  seleccionado: string | null = "All Articles"
  seleccionar(item: string) {
    this.seleccionado = item
  }


  cardsbody: CardsBody[] = [
    {
      imagen: "img-cards/img-1.png",
      subtitle: "FINANCE",
      content: "Inflation and your investements: What you need to know",
      autor: "Ngolo Kante",
      fecha: "March 1, 2025"
    },
    {
      imagen: "img-cards/img-2.png",
      subtitle: "ARTIDICIAL INTELEGENCE",
      content: "Software best practices for more flexible, scalable software",
      autor: "Sergio Aguero",
      fecha: "February 28, 2025"
    },
    {
      imagen: "img-cards/img-3.png",
      subtitle: "GOVERNMENT",
      content: "USA lets its currency weaken a key barrier to manage the fall",
      autor: "Maggie Bannon",
      fecha: "February 2, 2025"
    },
    {
      imagen: "img-cards/img-4.png",
      subtitle: "FINANCE",
      content: "Common tax return mistakes and how to avoid them",
      autor: "Justin Schulz",
      fecha: "February 16, 2025"
    },
    {
      imagen: "img-cards/img-5.png",
      subtitle: "ARTIDICIAL INTELEGENCE",
      content: "How a Web3 internet could upend digital economy",
      autor: "Luiza Laus",
      fecha: "January 16, 2025"
    },

    {
      imagen: "img-cards/img-6.png",
      subtitle: "GOVERNMENT",
      content: "Russia Supply & Overwhelming Demand Driving Investor Reset",
      autor: "Yamac Isik",
      fecha: "January 10, 2025"
    }
  ]

  mostrar(): CardsBody[]{
    return this.cardsbody
  }
}
