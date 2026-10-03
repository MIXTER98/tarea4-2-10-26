import { Component } from '@angular/core';
import { CategoriasInterfaz } from '../../interfaces/interfaces-card';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-componente-body1',
  styleUrl: './componente-body1.css',
  templateUrl: './componente-body1.html',
})
export class ComponenteBody1 {

  categorias: CategoriasInterfaz = {
    Categoria: ["All Articles", "Finance", "Artificial Intelegence", "Goverment", "Engineering"]
  }

  seleccionado: string | null = "All Articles"

  seleccionar(item: string){
    this.seleccionado = item
  }
}
