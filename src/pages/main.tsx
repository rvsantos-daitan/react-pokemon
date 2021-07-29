import Dashboard from "../containers/dashboard/dashboard"
import { Navbar } from "../components/header/navbar";
import Sidebar from "../components/sidebar/sidebar"
import { FlexContainer } from "../global/generics/flexcontainer/flexcontainer";
import PokemonFilter from "../containers/filters/pokemonfilter";

const Main: React.FC = () => {

    return (
        <>
            <Navbar />
            <FlexContainer>
                <Sidebar >
                    <PokemonFilter/>
                </Sidebar>
                <Dashboard />
            </FlexContainer>
        </>
    )
}

export default Main;