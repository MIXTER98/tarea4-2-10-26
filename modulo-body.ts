import { Component } from '@angular/core';
import { ComponenteBody1 } from './componente-body1/componente-body1';
import { ComponenteBody3 } from './componente-body3/componente-body3';

@Component({
  imports: [ComponenteBody1, ComponenteBody3],
  selector: 'app-modulo-body',
  styleUrl: './modulo-body.css',
  templateUrl: './modulo-body.html',
})
export class ModuloBody {}
