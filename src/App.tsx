import { Route, Routes, Navigate} from "react-router-dom"
import {useContext} from "react"
import {AuthContext} from "./context/AuthContext"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"

const App = () => {
  const {authUser, isLoading} = useContext(AuthContext)
  if(isLoading) return <div>Loading.....</div>
  
  return (
    <div className="p-4 h-screen flex items-center justify-center">
       <Routes>
         <Route path="/" element={authUser ? <Home/> : <Navigate to="/login"/>}/>
         <Route path="/signup" element={authUser ? <Navigate to="/"/> : <SignUp/>}/>
         <Route path="/login" element={authUser ? <Navigate to="/"/> : <Login /> }/>
       </Routes>
    </div>
  )
}

export default App


