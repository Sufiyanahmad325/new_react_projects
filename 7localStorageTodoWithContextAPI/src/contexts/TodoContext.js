import {createContext , useContext} from "react"


export const TodoContext = createContext({
    addTodo : (todo) => {},
    updatedTodo:(id , todo) => {},
    deleteTodo : (id) => {},
    toggleComplete: (id) => {},
})


export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
