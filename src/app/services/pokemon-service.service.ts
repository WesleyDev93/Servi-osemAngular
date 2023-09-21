import { Injectable } from '@angular/core';


// injectable é como uma Injeção de dados , podemos utilizar ele dentro do nosso constructor
// podemos injetar ele diretamento em um modulo , colocar a classe em PROVIDERS:[]
@Injectable({
  // aqui ele diz onde ele esta sendo injetado que seria no root inicialmente
  // quer dizer que todos os nosso componentes veem ele e tem acesso
  providedIn: 'root'
})

// classe normal que estamos habituados a ver
export class PokemonServiceService {

  constructor() { }


  // Criar os metodos pela função

  getPokemon (pokemonName: string) {
     console.log (pokemonName)

  }
}
