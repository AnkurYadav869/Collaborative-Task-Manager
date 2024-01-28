import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Signup from "./Components/Singup";
function App() {
    const getUser = async () => {
        try {
            const response = await fetch("/api/users");

            const data = await response.json();
            console.log("Response Data:", data);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };
    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className='w-4/5 mx-auto'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
