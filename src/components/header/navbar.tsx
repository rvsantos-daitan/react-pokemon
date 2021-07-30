import { HeaderContainer, Logo } from "./styles"

const Navbar: React.FC = () => {
    return (
        <HeaderContainer>
            <Logo src="./POKEMON-REACT.png" alt="Pokemon React logo" />
        </HeaderContainer>
    )
}

export default Navbar;