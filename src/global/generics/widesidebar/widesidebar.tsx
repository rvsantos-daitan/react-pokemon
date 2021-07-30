import { WideSidebarContainer } from './styles';

const WideSidebar: React.FC = ({children}) => {
    return (
        <WideSidebarContainer>
            {children}
        </WideSidebarContainer>
    )
}

export default WideSidebar
