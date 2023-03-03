import './App.css';

function App() {

  function setPick(){
    console.log("Pick set")
  }

  return (
    <div className="App">
      <h1>Pick and Roll.</h1>
      <label className="col-sm-2 col-form-label">first name:</label>
      <input className="form-control w-25" type="text"></input>
      <label className="col-sm-2 col-form-label">last name:</label>
      <input className="form-control w-25" type="text"></input>
      <button className="btn btn-primary mt-4" onClick={setPick}>Set Pick</button>
    </div>
  );
}

export default App;
