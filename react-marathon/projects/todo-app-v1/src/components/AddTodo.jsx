function AddTodo() {
  return (
    <div>
      <div class="container text-center">
        <div class="row kg-row">
          <div class="col-6">
            <input placeholder="enter todo" type="text"></input>
          </div>
          <div class="col-4">
            <input type="date"></input>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success kg-button">
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
