import Dashboard from "../containers/dashboard/dashboard"
import Navbar from "../components/header/navbar";
import Sidebar from "../global/generics/sidebar/sidebar"
import PokemonFilter from "../containers/filters/pokemonfilter";
import { FlexWrapper } from "./style";

const Main: React.FC = () => {

    return (
        <>
            <Navbar />
            <FlexWrapper>
                <Sidebar >
                    <PokemonFilter/>
                </Sidebar>
                <Dashboard />
            </FlexWrapper>
        </>
    )
}

export default Main;