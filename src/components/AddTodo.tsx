import { useState } from "react"
import { UseAppDispatch } from "../store"
import { addTodo } from "../store/todoSlice"

function AddTodo() {

const [todoValue,setTodoValue] = useState("")
const dispatch = UseAppDispatch()

const handelInput = (e:React.ChangeEvent<HTMLInputElement> ) => {
    setTodoValue(e.target.value)
} 





const handelSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
e.preventDefault()
if (todoValue !== "") {
    dispatch(addTodo(todoValue))
    setTodoValue("")
}


}

  return (
    <div>
        <form className="flex gap-8">
            <input  type="text" name="todo" value={todoValue} onChange={handelInput} className="w-full flex-1  px-2 text-2xl border-[3px] border-blue-600  outline-none rounded-lg"/>
            <button type="submit" onClick={handelSubmit} className="px-6  py-4 bg-blue-600 text-white rounded-lg">Add</button>
        </form>
        
    </div>
  )
}

export default AddTodo