import { useEffect, useState } from "react";
import axios from "axios";
import PokemonThumbnail from "./PokemonThumnail.js.jsx";

const  PokeCard  = (props) => {
    const [pokemon, setPokemon] = useState("")

    useEffect(() => {
        if (pokemon !== props.pokemon) {
            pegaPokemon(props.pokemon);
        }
    }, [pokemon, props.pokemon]);
    
    const pegaPokemon = (pokeName) => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => {

                setPokemon(response.data);

            })
            .catch((err) => {
                console.log(err);
            });
    };
    console.log(pokemon
    )
    return (
        <>
            {pokemon && (
                <PokemonThumbnail
                    id={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.types[0].type.name}
                    image={pokemon.sprites.other.dream_world.front_default}
                />
            )}
        </>
    );
};
export default PokeCard;