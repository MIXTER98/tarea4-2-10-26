import { Component } from '@angular/core';
import { InterfazCards } from '../../interfaces/interfaces-card';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-componente-card',
  styleUrl: './componente.card.css',
  template: `<div class="flex w-250 h-60 space-x-1">
    <div class=" w-full h-full p-2 space-y-3" *ngFor="let group of cards | keyvalue">
        <p class="font-bold text-xl">{{group.key}}</p>
        <p class="text-gray-500 text-sm" *ngFor="let a of group.value">{{a}}</p>
    </div>
</div>`,
})
export class ComponenteCard {
  cards: InterfazCards = {
    Account: ["Saving", "Join Accounts", "Crypto", "Freelance", "Commodities"],
    Help: ["Customer help", "Community", "Blog"],
    Finance: ["Cards", "Linked Accounts", "Payment"],
    Company: ["About Us", "Contact", "Sustainability", "Career"]
  }
}















