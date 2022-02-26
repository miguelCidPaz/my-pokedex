import axios from "axios"
import { useState, useEffect } from "react"

const Detail = (props) => {
    const [pokemon, setPokemon] = useState(undefined)
    const [infoPoke, setInfoPoke] = useState(undefined)
    const [types, setTypes] = useState(undefined)
    const [description, setDescription] = useState(undefined)

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${props.id}/`;
        const url2 = `https://pokeapi.co/api/v2/pokemon-species/${props.id}/`
        axios.get(url).then((response) => {
            setPokemon(response.data)
        })
        axios.get(url2).then((response) => {
            setInfoPoke(response.data)
        })
    }, [props])

    useEffect(() => {
        if (pokemon !== undefined && pokemon.types !== undefined) {
            setTypes(selectTypes(pokemon.types))
        }

        if (infoPoke !== undefined && infoPoke.flavor_text_entries !== undefined) {
            setDescription(selectDescription(infoPoke.flavor_text_entries)[0].flavor_text)
        }

    }, [pokemon, infoPoke])

    const selectTypes = (prop) => {
        return prop.map(e => e.type.name).join(' - ')
    }

    const selectDescription = (prop) => {
        return prop.filter(e => e.language.name === "es" && e.version.name === "x")
    }

    /*     console.log(infoPoke) */
    return (
        <section className="detail--main">
            {pokemon !== undefined && infoPoke !== undefined ?
                <>
                    <div className="detail--photo">
                        <img className="detail--img" src={pokemon.sprites.front_default} alt="Pokemon" />
                    </div><div className="detail--content-description">
                        <div className="detail--slot">
                            <p className="detail--label">Nombre:</p>
                            <p className="detail--data">{infoPoke.name}</p>
                        </div>
                        <div className="detail--slot">
                            <p className="detail--label">Tipo:</p>
                            <p className="detail--data">{types}</p>
                        </div>

                        <div className="detail--description">
                            <p>{description}</p>
                        </div>

                    </div>
                </>
                : null}

        </section>
    )
}

export default Detail