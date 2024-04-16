
export function Todos({todos}) {
    return <div>
        {todos.map(function(todo) {
            return <div>
                <h3>{todo.title}</h3>
                <h4>{todo.description}</h4>
                <button>{todo.completed == true ? "Completed" : "Mark as done"}</button>
            </div>
        })}
    </div>
}