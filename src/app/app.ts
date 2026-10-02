import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModuloHeader } from './modulo-header/modulo-header';
import { ModuloBody } from './modulo-body/modulo-body';
import { ModuloFooter } from './modulo-footer/modulo-footer';

@Component({
  imports: [RouterOutlet, ModuloHeader, ModuloBody, ModuloFooter],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
