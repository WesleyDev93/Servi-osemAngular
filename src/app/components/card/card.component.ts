import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

// vamos moldar os dados pela classe
export class CardComponent implements OnInit {


  // variaveis de dados
  name: string = "Bulbasar";
  tipos: string[] = ['Fire', 'Rock'];


constructor (
    // vamos chamar nosso service
    private service: PokemonServiceService

) {}


  ngOnInit(): void {
     // vamos usar nossa variavel service que traz a classe do nosso serviço
     // quando colocamos o nome , automaticamente o console.log que esta na nossa função em service
     // vai mostrar o dado que trazemos aqui pela nossa varivel
     this.service.getPokemon ("A")
  }

}
