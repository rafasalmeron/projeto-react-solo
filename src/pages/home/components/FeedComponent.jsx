import PokeCard from "./PokeCard.jsx";
import {Feed} from "../styled.jsx";

const FeedComponent = ({ pokemons }) => {
    return (
        <Feed>
            {pokemons.map((pokemon, index) => (
                <PokeCard
                    pokemon={pokemon}
                    key={index}
                />
            ))}
        </Feed>
    )
}
export default FeedComponent