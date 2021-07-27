import Card from "../../components/cards/card";
import { useDispatch } from "react-redux";

import toggleFavoritePokemon from '../../store/actions/favoritepokemon.action';
import { IPokemonFragment } from "../../interfaces/pokemon.model";

import { Container } from "./styles";
import WideSidebar from "../../components/widesidebar/widesidebar";

interface IDashBoard {
  pokemonList: IPokemonFragment[]
}

const Dashboard: React.FC<IDashBoard> = ({ pokemonList }) => {
  const dispatch = useDispatch();

  const handleClick = (pokemon: IPokemonFragment) => {
    dispatch(toggleFavoritePokemon(pokemon))
  };

  const cardProperties = {
    displayButton: true,
    display: 'flex'
  }

  return (
    <Container>
      <WideSidebar>
        {pokemonList.map((pokemon: IPokemonFragment) => (
          <Card key={pokemon.name} pokemon={pokemon} action={handleClick} {...cardProperties}/>
        ))}
      </WideSidebar>
    </Container>
  );
}

export default Dashboard;
