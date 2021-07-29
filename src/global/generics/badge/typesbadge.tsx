import { BadgeContainer, Badge } from "./style"

interface ITypesBadgeProps {
    types: string[],
    gridArea?: string
}

const TypesBadge: React.FC<ITypesBadgeProps> = ({types, gridArea}) => {
    return (
        <BadgeContainer gridArea={gridArea}>
            {types.map(type => <Badge key={type} typename={type}>{type}</Badge>)}
        </BadgeContainer>
    )
}

export default TypesBadge