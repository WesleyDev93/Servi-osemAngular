import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Importar nosso enviroment

import { environment } from 'src/environments/environment';

// importar nosso pokemon data

import {pokemonData} from 'src/app/models/pokemonData';


// injectable é como uma Injeção de dados , podemos utilizar ele dentro do nosso constructor
// podemos injetar ele diretamento em um modulo , colocar a classe em PROVIDERS:[]
@Injectable({
  // aqui ele diz onde ele esta sendo injetado que seria no root inicialmente
  // quer dizer que todos os nosso componentes veem ele e tem acesso
  providedIn: 'root'
})

// classe normal que estamos habituados a ver
export class PokemonServiceService {

   // vamos criar nossa variavel que vai guardar os dados

   private baseURL:string = "";

   // variavel que guardar os dados da nossa função getPokemon
    // vamos tipar nossa variavel que era any com pokemonData e usar o ou com any
    private pokeData: pokemonData | any;

  constructor(
    // vamos fazer a injeção das dependencias, ele irá importar automaticamente acima
    // A partir disto podemos trabalhar com ele dentro da nossa função getPokemon
    private http: HttpClient
  ) {

    // vamos trazer a variavel que carrega a URL da API para cá que esta em environments
    this.baseURL = environment.pokeApi

  }


  // Criar os metodos pela função

  // vamos adicionar o observable para a nossa função , lembre se de importar ele acima
   // Observable vai observar a nossa pokeData que foi importada aqui
  getPokemon (pokemonName: string):Observable<pokemonData>{
    // console.log (pokemonName)

    // Trabalahando com a requisição
    // lembrando que baseUrl traz a nossa url da API
    //Pokemon Name vem depois por que ao final da URl temos o nome do pokemon
    // conforme a API indica

    // vamos tipar nosso get tambem com pokemonData atraves de <>
   this.pokeData =  this.http.get <pokemonData>(`${this.baseURL}${pokemonName}`)
   return this.pokeData;

  }
}
