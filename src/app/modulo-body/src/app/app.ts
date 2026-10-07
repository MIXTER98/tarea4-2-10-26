import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModuloHeader } from './modulo-header/modulo-header';
import { ModuloBody } from './modulo-body/modulo-body';
import { ModuloFooter } from './modulo-footer/modulo-footer';
import { ComponenteBody1 } from './modulo-body/componente-body1/componente-body1';

@Component({
  imports: [RouterOutlet, ModuloHeader, ModuloBody, ModuloFooter, ComponenteBody1],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
