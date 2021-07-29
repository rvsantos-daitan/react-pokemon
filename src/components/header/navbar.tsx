import { HeaderContainer, Logo } from "./styles"

export const Navbar: React.FC = () => {
    return (
        <HeaderContainer>
            <Logo src="./POKEMON-REACT.png" alt="Pokemon React logo" />
        </HeaderContainer>
    )
}