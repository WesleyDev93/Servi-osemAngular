import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

// vamos moldar os dados pela classe
export class CardComponent {


  // variaveis de dados
  name: string = "Bulbasar";
  tipos: string[] = ['Fire', 'Rock'];


constructor () {}

}
