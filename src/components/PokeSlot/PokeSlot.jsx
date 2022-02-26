const PokeSlot = (props) => {
    return (
        <button className="pokeslot--main"
            onClick={(e) => props.changePoke(props.id)}>
            <p className="pokeslot--number">
                {props.pokemon.entry_number})
            </p>
            <p className="pokeslot--name">
                {props.pokemon.pokemon_species.name}
            </p>
        </button>
    )
}

export default PokeSlot