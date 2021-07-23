import { WideSidebarContainer } from './styles';

export default function WideSidebar(props) {
    return (
        <WideSidebarContainer>
            {props.children}
        </WideSidebarContainer>
    )
}
