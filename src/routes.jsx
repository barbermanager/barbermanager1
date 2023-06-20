import {Routes, Route} from 'react-router-dom'
import Forget from './pages/forget-password'
import Login from "./components/login-page/index.jsx";

const GetRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='forget-password' element={<Forget/>}/>
        </Routes>
    )
}

export default GetRoutes