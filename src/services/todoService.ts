import TodoRepository from "../repository/todoRepository";

class TodoService {
  todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async getAllTodos() {
    return await this.todoRepository.getAll();
  }

  async createTodo(title: String, tags: String[]) {
    tags = Array.from(new Set(tags.filter((tag) => tag.length > 0)));

    return await this.todoRepository.create(title, tags);
  }
}

export default TodoService;
