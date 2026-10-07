import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  selector: 'app-modulo-header',
  styleUrl: './modulo-header.css',
  templateUrl: './modulo-header.html',
})
export class ModuloHeader {}
