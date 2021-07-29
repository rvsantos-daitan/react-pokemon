import { IPokemonFragment } from "../../interfaces/pokemon.model";
import Card from "../cards/card";
import WideSidebar from "../widesidebar/widesidebar";

interface IPokemonListProps {
    pokemonList: IPokemonFragment[],
    displayButton: boolean,
    display: string,
    onFavorite: (pokemon : IPokemonFragment) => void,
    onHighlight: (highlightedPokemon: IPokemonFragment) => void
}

const PokemonList: React.FC<IPokemonListProps> = ({pokemonList, displayButton, display, onFavorite, onHighlight}) => {

    
  const pokemons = (
    <WideSidebar>
      {pokemonList.map((pokemon: IPokemonFragment) => (
        <Card 
        key={pokemon.name} 
        pokemon={pokemon} 
        onFavorite={onFavorite} 
        onHighlight={onHighlight} 
        displayButton={displayButton}
        display={display} />
      ))}
    </WideSidebar>
  )

  const emptyList = (
    <WideSidebar/>
  )

  return pokemonList.length > 0 ? pokemons : emptyList;
  
}

export default PokemonList;