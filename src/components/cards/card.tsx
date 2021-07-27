import { FlexContainer, FlexColumnContainer } from '../../global/generics/flexcontainer/flexcontainer';
import { IPokemonFragment } from '../../interfaces/pokemon.model';

import { Button, CardContainer, CardHeader, Sprite, BadgeContainer, Badge } from './styles';

interface ICardProps {
    pokemon: IPokemonFragment;
    displayButton: boolean,
    display: string,
    cardWidth?: string,
    action?: (parameter: any) => void;
}



const Card: React.FC<ICardProps> = ({ pokemon, displayButton, display, cardWidth, action }: ICardProps ) => {

    const buttonDisplay = (
        <Button 
            onClick={() => action(pokemon)} 
            state={{backgroundColor: pokemon.isFavorite? 'PokemonYellow' : 'White'}}
            >Favorite
        </Button>
    )

    const flexDisplay = (
        <FlexContainer>
            <Sprite src={pokemon.sprites.front_default} alt={pokemon.name} />
            <FlexColumnContainer width={80}>
                <CardHeader>{pokemon.name}</CardHeader>
                <BadgeContainer>
                    {pokemon.types.map(({ type }) => <Badge typename={type.name}>{type.name}</Badge>)}
                </BadgeContainer>
                {displayButton? buttonDisplay : null}
            </FlexColumnContainer>
        </FlexContainer>
    )

    const columnDisplay = (
        <>
            <Sprite src={pokemon.sprites.front_default} alt={pokemon.name} />
            <CardHeader>{pokemon.name}</CardHeader>
            <BadgeContainer>
                {pokemon.types.map(({ type }) => <Badge typename={type.name}>{type.name}</Badge>)}
            </BadgeContainer>
            {displayButton? buttonDisplay : null}
        </>
    )    


    return (Object.values(pokemon).length > 0 ?
        <CardContainer {...{width: cardWidth}}>
           {display === 'flex' ? flexDisplay : columnDisplay}
        </CardContainer> : null
    )
}

export default Card;