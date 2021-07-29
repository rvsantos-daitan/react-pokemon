import { SidebarContainer } from './styles';

const Sidebar: React.FC = ({children}) => {
    return (
        <SidebarContainer>
            {children}
        </SidebarContainer>
    )
}

export default Sidebar
