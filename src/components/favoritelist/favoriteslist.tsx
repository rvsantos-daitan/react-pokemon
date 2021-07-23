
import { ListItem } from "./styles";
import { StandardList } from "../../global/generics/list/list";

interface IFavoriteListProps {
    favoritePokemon: string[]
}

const FavoriteList: React.FC<IFavoriteListProps> = ({ favoritePokemon }) => {
    return (
        <StandardList>
            {favoritePokemon.map((pokemon: string, index: number) => (
                <ListItem key={index}>{pokemon}</ListItem>
            ))}
        </StandardList>
    )
}


export default FavoriteList