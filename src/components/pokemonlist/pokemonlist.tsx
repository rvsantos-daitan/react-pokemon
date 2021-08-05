import { IPokemonFragment } from "../../interfaces/pokemon.model";
import Card from "../cards/card";
import WideSidebar from "../../global/generics/widesidebar/widesidebar";
import { useContext, useEffect, useRef } from "react";
import { FocusContext } from "../../contexts/focuscontext";

interface IPokemonListProps {
  pokemonList: IPokemonFragment[];
  displayButton: boolean;
  display: string;
  onFavorite: (pokemon: IPokemonFragment) => void;
  onHighlight: (highlightedPokemon: IPokemonFragment) => void;
  onKeyboardInput: (event, pokemon: IPokemonFragment) => void;
}

const PokemonList: React.FC<IPokemonListProps> = ({ pokemonList, displayButton, display, onFavorite, onHighlight, onKeyboardInput }: IPokemonListProps) => {
  const { cardFocusReference } = useContext(FocusContext);

  useEffect(() => {
    if (cardFocusReference.current) {
      cardFocusReference.current.focus();
    }
  });

  const pokemons = (
    <WideSidebar>
      {pokemonList.map((pokemon: IPokemonFragment, position: number) => (
        <Card
          key={pokemon.name}
          ref={position === 0 ? cardFocusReference : null}
          pokemon={pokemon}
          displayButton={displayButton}
          display={display}
          onFavorite={onFavorite}
          onHighlight={onHighlight}
          onKeyboardInput={onKeyboardInput}
        />
      ))}
    </WideSidebar>
  )

  const emptyList = (
    <WideSidebar />
  )

  return pokemonList.length > 0 ? pokemons : emptyList;

};

export default PokemonList;