function AddTodo() {
  return (
    <div>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input placeholder="enter todo" type="text"></input>
          </div>
          <div className="col-4">
            <input type="date"></input>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button">
              add
            </button>
          </div>
        </div>
      </div> 
      <br />
    </div>
  );
}

export default AddTodo;
