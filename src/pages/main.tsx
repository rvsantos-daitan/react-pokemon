import Dashboard from "../containers/dashboard/dashboard"
import Navbar from "../components/header/navbar";
import PokemonFilter from "../containers/filters/pokemonfilter";
import { FlexWrapper } from "./style";

const Main: React.FC = () => {

    return (
        <>
            <Navbar />
            <FlexWrapper>
                <Dashboard />
                <PokemonFilter/>
            </FlexWrapper>
        </>
    )
}

export default Main;