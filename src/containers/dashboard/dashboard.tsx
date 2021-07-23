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

  const handleClick = (pokemonName: string) => {
    dispatch(toggleFavoritePokemon(pokemonName))
  };

  return (
    <Container>
      <WideSidebar>
        {pokemonList.map((pokemon: IPokemonFragment) => (
          <Card key={pokemon.id} pokemon={pokemon} action={handleClick} />
        ))}
      </WideSidebar>
    </Container>

  );
}

export default Dashboard;
