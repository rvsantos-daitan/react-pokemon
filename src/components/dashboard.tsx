import Card from "./card";
import { connect } from "react-redux";

import styles from "../styles/dashboard.module.css";

function Dashboard({ pokemon }: any) {
  return (
    <div className={styles.dashboard}>
      {pokemon.results.map((pokemon, position) => (
        <Card key={position} pokemon={pokemon}></Card>
      ))}
    </div>
  );
}

export default connect((state) => ({ pokemon: state }))(Dashboard);
