import { useDispatch, useSelector } from "react-redux";

import toggleFavoritePokemon from '../../store/actions/favoritepokemon.action';
import { IPokemonFragment } from "../../interfaces/pokemon.model";

import { Container } from "./styles";
import { StoreState } from "../../store";
import { setHighlightedPokemon } from "../../store/actions/highlightedpokemon.action";
import HighlightedPokemon from "../../components/highlightedpokemon/highlightedpokemon";
import PokemonList from "../../components/pokemonlist/pokemonlist";
import { selectPokemon } from "../../store/selectors/filterselector";
import { setInitialPokemonData } from "../../store/actions/fetchinitialdata.action";
import { useEffect } from "react";


const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const highlightedPokemon = useSelector<StoreState, IPokemonFragment>(state => state.highlightedState.highlightedPokemon);
  
  useEffect(() => {
      dispatch(setInitialPokemonData())
  }, [])

  const pokemonList = useSelector(selectPokemon);
  

  const handleClick = (pokemon: IPokemonFragment) => {
    dispatch(toggleFavoritePokemon(pokemon))
  };

  const handleHighlighted = (highlightedPokemon: IPokemonFragment) => {
    dispatch(setHighlightedPokemon(highlightedPokemon));
  }

  const cardProperties = {
    pokemonList,
    onFavorite: handleClick,
    onHighlight: handleHighlighted,
    displayButton: true,
    display: 'flex'
  }

  return (
    <Container>
      <HighlightedPokemon highlightedPokemon={highlightedPokemon}/>
      <PokemonList {...cardProperties}/>
    </Container>
  );
}

export default Dashboard;
