interface Todo {
  text: string;
  complete: boolean;
}

type toggleTodo = (selectedTodo: Todo) => void;

type handleInput = (addedText : string) => void