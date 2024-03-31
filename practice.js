class Todo {
    constructor() {
      this.todos = [];
    }
  
    add(todo) {
      this.todos.push(todo);
    }
  
    remove(indexOfTodo) {
      this.todos.splice(indexOfTodo, 1);
    }
  
    update(index, updatedTodo) {
      console.log("Before update:", this.todos);
      this.todos[index] = updatedTodo;
      console.log("After update:", this.todos);
    }
  
    getAll() {
      return this.todos;
    }
  
    get(indexOfTodo) {
      console.log("Todo at index", indexOfTodo, ":", this.todos[indexOfTodo]);
      return this.todos[indexOfTodo];
    }
  
    clear() {
      this.todos = [];
    }
  }
  
// Your custom tests
const todoList = new Todo();

// Test adding todos
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');

// Test updating a todo
todoList.update(1, 'Updated Task 2');

// Test getting a todo
console.log(todoList.get(1)); // Should output 'Updated Task 2'

// Test removing a todo
todoList.remove(2); // Remove 'Task 3'
console.log(todoList);

// Test clearing all todos
todoList.clear();

// Check if todos are cleared
console.log(todoList.getAll()); // Should output []
  