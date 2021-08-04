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
import React, { useContext, useEffect } from "react";
import { FocusContext } from "../../contexts/focuscontext";


const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const highlightedPokemon = useSelector<StoreState, IPokemonFragment>(state => state.highlightedState.highlightedPokemon);
  const pokemonList = useSelector(selectPokemon);
  const { filterFocusReference } = useContext(FocusContext);


  useEffect(() => {
    dispatch(setInitialPokemonData())
  }, [])


  const handleClick = (pokemon: IPokemonFragment) => {
    dispatch(toggleFavoritePokemon(pokemon))
  };

  const handleHighlighted = (highlightedPokemon: IPokemonFragment) => {
    dispatch(setHighlightedPokemon(highlightedPokemon));
  }

  const handleCardKeyboardControl = (event, pokemon: IPokemonFragment) => {
    const { key, target, code } = event;
    if (key === "ArrowDown" && target.children) {
      const nodes: HTMLElement[] = Array.from(target.children)
      nodes.find(child => child.nodeName === "BUTTON")?.focus();
    }

    if (key === "Escape") {
      target.parentElement.focus();
    }

    if (key === "Tab" && target.nodeName === "BUTTON") {
      event.preventDefault();
    }

    if ((key === "Enter" || event.code === "Space") && target) {
      event.preventDefault();
      handleHighlighted(pokemon);
    }

    if (code === "KeyF") {
      event.preventDefault();
      handleClick(pokemon);
    }

    if (code === "KeyV") {
      const { current } = filterFocusReference
      const [, listNode]: HTMLElement[] = Array.from(current.children);
      const listItems: Element[] = Array.from(listNode.children);
      listItems[19].focus();
    }
  }

  const cardProperties = {
    pokemonList,
    displayButton: true,
    display: 'flex',
    onFavorite: handleClick,
    onHighlight: handleHighlighted,
    onKeyboardInput: handleCardKeyboardControl,
  }

  return (
    <Container gridArea={"dashboard"}>
      <HighlightedPokemon highlightedPokemon={highlightedPokemon} />
      <PokemonList {...cardProperties} />
    </Container>
  );
}

export default Dashboard;