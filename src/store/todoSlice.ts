// Import necessary modules
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'; 

interface TodoListTypes {
  id: string;
  text: string;
  isCompleted: boolean;
}

type filterType = 'all' | 'pending' | 'completed'

interface initialStateTypes {
  todo: TodoListTypes[] | null;
  filter: filterType
}


const storedTodoData = localStorage.getItem('todos');
const initialTodoData: TodoListTypes[] | null = storedTodoData ? JSON.parse(storedTodoData) : [];

const initialState: initialStateTypes = {
  todo: initialTodoData,
  filter: 'all' 
  
};

// Create todoSlice
export const todoSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        if (state.todo) {
          const Todo: TodoListTypes = {
            id: uuidv4(),
            text: action.payload,
            isCompleted: false
          };
          state.todo.push(Todo);
          
          localStorage.setItem('todos', JSON.stringify(state.todo));
        }
      }
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todoItem = state.todo?.find((item) => item.id === action.payload);
      if (todoItem) {
        todoItem.isCompleted = !todoItem.isCompleted;
        
        localStorage.setItem('todos', JSON.stringify(state.todo));
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todo = state.todo && state.todo.filter((item) => item.id !== action.payload);
      
      localStorage.setItem('todos', JSON.stringify(state.todo));
    },
    editTodoText: (state, action: PayloadAction<{ id: string; updatedText: string }>) => {
      const todoToEdit = state.todo && state.todo?.find((todo) => todo.id === action.payload.id);
      if (todoToEdit) {
        todoToEdit.text = action.payload.updatedText;
        
        localStorage.setItem('todos', JSON.stringify(state.todo));
      }
    },
    setFilter: (state,action: PayloadAction<filterType>) => {
      state.filter = action.payload
    }
  },
});


export const { addTodo, toggleTodo, deleteTodo, editTodoText, setFilter } = todoSlice.actions;
export default todoSlice;
