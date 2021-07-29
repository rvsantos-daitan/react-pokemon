import { Sprite } from "../../global/generics/atoms/sprite/sprite";
import TypesBadge from "../../global/generics/badge/typesbadge";
import { IPokemonFragment } from "../../interfaces/pokemon.model";
import { Header, HighlightedGrid, Wrapper } from "./styles";

interface IHighlightedPokemonProps {
    highlightedPokemon: IPokemonFragment,
}

const HighlightedPokemon: React.FC<IHighlightedPokemonProps> = ({highlightedPokemon}) => {

    if(!Object.values(highlightedPokemon).length) {
        return (
            <div></div>
        )
    }


    return(
        <Wrapper>
           <HighlightedGrid>
            <Header>{highlightedPokemon.name}</Header>
            <TypesBadge gridArea={"types"} types={highlightedPokemon.types.map(({ type }) => type.name)}/>
            <Sprite gridArea={"main-content"} 
                src={highlightedPokemon.sprites.front_default} 
                alt={highlightedPokemon.name} 
                width={"20rem"}
            />
            </HighlightedGrid>
        </Wrapper>
    )
}

export default HighlightedPokemon;