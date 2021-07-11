import { useState } from "react";
import useStore from "../lib/store";

function Form() {
  const [name, setName] = useState("");
  const addPokemons = useStore((state) => state.addPokemons);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const addPokemon = () => {
    addPokemons({ name: name });
    clear();
  };

  const clear = () => setName("");

  return (
    <div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            onChange={onChange}
            value={name}
          ></input>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-outline-primary"
            onClick={(e) => addPokemon()}
          >
            Add
          </button>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default Form;
