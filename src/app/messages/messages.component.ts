import { Component } from '@angular/core';
import { HeroesComponent } from "../heroes/heroes.component";
import { MessageService } from '../message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  imports: [HeroesComponent,CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
