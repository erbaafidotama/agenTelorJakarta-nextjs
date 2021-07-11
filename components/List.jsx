import useStore from "../lib/store";

function List() {
  const pokemons = useStore((state) => state.pokemons);
  const removePokemon = useStore((state) => state.removePokemon);
  console.log(pokemons);
  return (
    <div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <ul>
            {pokemons.map((pokemon) => (
              <li key={pokemon.id}>
                <div className="row">
                  <div className="col-md-6">{pokemon.name} </div>
                  <div className="col-md-6">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={(e) => removePokemon(pokemon.id)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default List;
