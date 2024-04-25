function TodoItem({todoName, todoDate}) {

  return (
    <div>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">
            <h7>{todoName}</h7>
          </div>
          <div className="col-4">
            <h7>{todoDate}</h7>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button">
              delete
            </button>
          </div>
        </div>
      </div> 
    </div>
  );
}
export default TodoItem;
