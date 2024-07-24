import { createContext, useState } from "react"

export const userContext = createContext()




const UserConatextProvider = ({ children }) => {
    const [user, setUser] = useState([{ id: 1, text: "hello" }])
    return (

        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>

    )

}


export default UserConatextProvider
