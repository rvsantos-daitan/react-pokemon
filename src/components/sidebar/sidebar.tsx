import { SidebarContainer } from './styles';

export default function Sidebar(props) {
    return (
        <SidebarContainer>
            {props.children}
        </SidebarContainer>
    )
}
