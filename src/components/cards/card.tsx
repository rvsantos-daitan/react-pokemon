import { Sprite } from '../../global/generics/atoms/sprite/sprite';
import { NumberBadge } from '../../global/generics/atoms/styles';
import TypesBadge from '../../global/generics/badge/typesbadge';
import { FlexContainer } from '../../global/generics/flexcontainer/flexcontainer';
import { IPokemonFragment } from '../../interfaces/pokemon.model';

import { Button, CardContainer, CardHeader } from './styles';

interface ICardProps {
    pokemon: IPokemonFragment;
    displayButton: boolean,
    display: string,
    cardWidth?: string,
    onFavorite?: (pokemon: IPokemonFragment) => void;
    onHighlight?: (selectedPokemon: IPokemonFragment) => void;
}



const Card: React.FC<ICardProps> = ({ pokemon, displayButton, display, cardWidth, onFavorite, onHighlight }: ICardProps ) => {
    const types = pokemon.types.map(({ type }) => type.name)
    const buttonDisplay = (
        <Button 
            gridArea={"button"}
            onClick={() => onFavorite && onFavorite(pokemon)} 
            state={{backgroundColor: pokemon.isFavorite? 'PokemonYellow' : 'White'}}
            >Favorite
        </Button>
    )

    const flexDisplay = (
        <FlexContainer>
            <Sprite src={pokemon.sprites.front_default} alt={pokemon.name} width={"10rem"} gridArea={"sprite"}/>
                <CardHeader gridArea={"header"}>
                    {pokemon.name}
                    <NumberBadge>#{pokemon.id}</NumberBadge>
                </CardHeader>
                <TypesBadge types={types}  gridArea={"types"}/>
                {displayButton? buttonDisplay : null}
        </FlexContainer>
    )

    const columnDisplay = (
        <>
            <Sprite src={pokemon.sprites.front_default} alt={pokemon.name} width={"10rem"}/>
            <CardHeader>
                {pokemon.name}
                <NumberBadge>#{pokemon.id}</NumberBadge>
            </CardHeader>
            <TypesBadge types={types}/>
            {displayButton? buttonDisplay : null}
        </>
    )    


    return (Object.values(pokemon).length > 0 ?
        <CardContainer width={cardWidth} onClick={() => onHighlight(pokemon)}>
           {display === 'flex' ? flexDisplay : columnDisplay}
        </CardContainer> : null
    )
}

export default Card;