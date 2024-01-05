import AddTodo from "./components/AddTodo"
import FilterTodo from "./components/FilterTodo"
import TodoList from "./components/TodoList"

function App() {

  return (
 <div  className="flex flex-col h-screen bg-blue-500">
    <div className="pt-10 pb-20  ">
    <h1 className="text-5xl px-2 text-white font-semibold">TODO APP TASK</h1>
    </div>

    <main className="py-16 flex items-center justify-center">
      <div className="flex flex-col  gap-6 p-8 w-[600px] bg-white rounded-lg">
      <AddTodo />
      <FilterTodo />
      <TodoList />

      </div>
    </main>
  
 </div>
  )
}

export default App
