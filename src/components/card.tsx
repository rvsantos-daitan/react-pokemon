import styles from '../styles/card.module.css';

interface ICardProps {
    pokemon: IPokemon
}

interface IPokemon {
    name: string;
    url: string;
}

export default function Card({pokemon}: ICardProps){
    return (
    <div className={styles.card}>
        <img src="" alt="Pokemon" />
        <h1>{pokemon.name}</h1>
        <a href="#">Favorite</a>
    </div>
    )
}