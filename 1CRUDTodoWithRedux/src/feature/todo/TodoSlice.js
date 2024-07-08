const { createSlice, nanoid } = require("@reduxjs/toolkit");


const initialState = {
    todos:[{id:1 , text:"hello world"}]
}

export const todoSlice = createSlice({
    name:"Todo",
    initialState,
    reducers:{
        addTodo:(state , action)=>{
            const todo = {
                id:nanoid(),
                text:actions.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state , action)=>{
            state.todos = state.todos.filter(ele=> ele.id != action.payload)
        },

        editTodo:(state,action)=>{
            state.todos.map(ele=>ele.id == action.payload.id ? {...ele , text:action.payload.text} :ele)
        },

        
    }
})

export const  {addTodo , removeTodo , editTodo} = todoSlice.reducer

export default todoSlice.reducer