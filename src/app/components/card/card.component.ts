import { Component, OnInit } from '@angular/core';
import { pokemonData } from 'src/app/models/pokemonData';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

// vamos moldar os dados pela classe
export class CardComponent implements OnInit {




  // Criando Pokemon para receber o tipo pokemonData
  //  vamos tipar nossa variavel agora montando ela no construtor
  pokemon:pokemonData ;


constructor (
    // vamos chamar nosso service
    private service: PokemonServiceService

) { // aqui nos contruimos nosso objeto
  this.pokemon  = {

    id:0,
    name: '',
    sprites: {

      front_default:''
    },
    types: [],

  }
}


  ngOnInit(): void {
     // vamos usar nossa variavel service que traz a classe do nosso serviço
     // quando colocamos o nome , automaticamente o console.log que esta na nossa função em service
     // vai mostrar o dado que trazemos aqui pela nossa varivel
     // vamos trazer agora o metodo subscribe

     this.service.getPokemon ("pikachu").subscribe ({
      // vamos trabalhar agora o valor da resposta pelo next que dara uma resposta quando der certo
      // error: quando der errado a mesma coisa

      next: (resposta) => {
        // tivemos que acrescentar {}, pois havera mais de uma linha
       // console.log (resposta)
        // vamos adicionar o que queremos que a resposta nos entregue

       // console.log (resposta.id)
       //console.log (resposta.name)
        //novos dados tem que ser declarados em pokemonData para serem validos
       // console.log (resposta.sprites.front_default)
        //console.log (resposta.types);


        // agora que ja testamos o recebimento dos dados não usaremos mais console mas vamos
        // criar um objeto com as respostas

        this.pokemon = {
          id: resposta.id,
          name:resposta.name,
          sprites:resposta.sprites,
          types:resposta.types,


        }

      },
      error: (erro) => console.log (erro)


     })
  }

}
