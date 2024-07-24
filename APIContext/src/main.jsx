import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserConatextProvider from './ApiContext/ApiCotext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserConatextProvider>
    <App />

    </UserConatextProvider>

)
