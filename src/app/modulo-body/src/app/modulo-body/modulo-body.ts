import { Component } from '@angular/core';
import { ComponenteBody1 } from './componente-body1/componente-body1';

@Component({
  imports: [ComponenteBody1],
  selector: 'app-modulo-body',
  styleUrl: './modulo-body.css',
  templateUrl: './modulo-body.html',
})
export class ModuloBody {}
