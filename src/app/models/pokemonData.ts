// exportando por tipagem

export type pokemonData = {


  name:string;
  id:number;
  // adicionando novo dado da API

  sprites: {

    front_default: string;
  }
/// vamos transformar o array em objeto
  types: {

    slot: number;
    type: {
      name: string;
      url: string;
    }

  }[],
}
