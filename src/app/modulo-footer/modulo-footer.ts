import { Component } from '@angular/core';
import { ComponenteCard } from './componente.card/componente.card';

@Component({
  imports: [ComponenteCard],
  selector: 'app-modulo-footer',
  styleUrl: './modulo-footer.css',
  templateUrl: './modulo-footer.html',
})
export class ModuloFooter {}
