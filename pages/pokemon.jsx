import List from "../components/List";
import Form from "../components/Form";

function pokemon() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>Pokemon</h3>
        </div>
        <div className="col-md-12">
          <List />
        </div>
        <div className="col-md-12">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default pokemon;
