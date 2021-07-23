import { FlexContainer, FlexColumnContainer } from '../../global/generics/flexcontainer/flexcontainer';
import { IPokemonFragment } from '../../interfaces/pokemon.model';

import { Button, CardContainer, CardHeader, Sprite, BadgeContainer, Badge } from './styles';

interface ICardProps {
    pokemon: IPokemonFragment;
    action: (parameter: any) => void;
}

const Card: React.FC<ICardProps> = ({ pokemon, action }) => {

    return (Object.values(pokemon).length > 0 ?
        <CardContainer>
            <FlexContainer>
                <Sprite src={pokemon.sprites.front_default} alt="Pokemon" />
                <FlexColumnContainer width={80}>
                    <CardHeader>{pokemon.name}</CardHeader>
                    <BadgeContainer>
                        {pokemon.types.map(({ type }) => <Badge typename={type.name}>{type.name}</Badge>)}
                    </BadgeContainer>
                    <Button onClick={() => action(pokemon.name)}>Favorite</Button>
                </FlexColumnContainer>
            </FlexContainer>
        </CardContainer> : null
    )
}

export default Card;