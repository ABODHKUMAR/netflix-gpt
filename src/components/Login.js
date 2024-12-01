import { useState } from "react";
import Header from "./Header";
const Login = () =>{
    const [isSignForm,setSignInForm] = useState();
    const toggleSignInFrom = () => {
        setSignInForm(!isSignForm);
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg" 
                alt="logo" 
                />
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded">
                <h1 className="font-bold text-3xl py-4">
                    {isSignForm ? "Sign In" : "Sign Up"}
                </h1>
                {
                    !isSignForm && (
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            className="p-2 m-2 w-full bg-gray-700"
                        />
                    )
                }
                <input 
                    type="text" 
                    placeholder="Email Address" 
                    className="p-2 m-2 w-full bg-gray-700"
                />
                <input 
                    type="text" 
                    placeholder="Password" 
                    className="p-2 m-2 w-full bg-gray-700"
                />
                <button className="p-4 m-2 rounded-mg  w-full rounded-lg bg-red-700">{isSignForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4" onClick={toggleSignInFrom}>{!isSignForm ? "Already registered? Sign In Now" :"New to Netflix?Sign Up Now"}</p>
            </form>
           
        </div>

    
       );
}

export default Login;