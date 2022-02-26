import { useState, useEffect } from "react"
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import Detail from '../Detail/Detail'
import PokeSlot from "../PokeSlot/PokeSlot";

const PrincipalList = () => {
    const [pokemones, setPokemones] = useState([]);
    const [detail, setDetail] = useState(undefined)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokedex/1/').then((response) => {
            setPokemones(response.data.pokemon_entries.splice(0, 151))
        })
    }, [])

    useEffect(() => { }, detail)

    const changePoke = (id) => {
        setDetail(id)
    }

    return (
        <section className="principal--main">
            <div className="principal--main-left">
                <div className="principal--viewlist">
                    {pokemones.map((element, index) => {
                        return <PokeSlot key={index} id={index + 1} pokemon={element} changePoke={changePoke} />
                    })}
                </div>
            </div>
            <div className="principal--main-right">
                {detail !== undefined ?
                    <Detail id={detail} />
                    : null}
            </div>
        </section>
    )
}

export default PrincipalList