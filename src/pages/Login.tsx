import { Link } from "react-router-dom";
import {useState} from "react";

const Login = () => {
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }
  
  // submit the  form 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if(!formData.email || !formData.password){
      setError("Please fill in all fields");
      return;
    }
   
    try{
    const response = await fetch("http://localhost:5000/api/auth/signin", {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    });
    
    const data = await response.json()
    console.log(data.message)
   if(response.ok){
     window.location.href = "/"
   } else{
     console.error("error")
     setError(data?.message || "Something went wrong")
   }
  } catch(error: any){
    console.error("Failed to signup", error)
  }
  }
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl mb-2 font-semibold text-center text-white">
					Login
					<span className="text-blue-500"> Tech Connect</span>
				</h1>
				<p className="text-center">Hello, Welcome Back!👋</p>
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text">Email</span>
						</label>
						<input type="email" 
						placeholder="Enter Your Emaill"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full input input-bordered h-12" />
					</div>

					<div>
						<label className="label">
							<span className="text-base label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							name="password"
					  	value={formData.password}
				   		onChange={handleChange}
							className="w-full input input-bordered h-12"
						/>
					</div>

					<div className="flex justify-between mt-4">
						<div className="">
						<input type="checkbox" name="" id="" />
						<span>  Remember Me</span>
						</div>

						<p className="text-red-500">Forgot Password?</p>
					</div>

					<div>
						<button type="submit" className="btn btn-block btn-md mt-6">Login</button>
					</div>

					<div className="flex justify-center my-6 items-center whitespace-nowrap">
					<hr className="w-[50%] border border-blue-500 mr-50" /> 
				    	<p className="mx-4">Or With</p>
					 <hr  className="w-[50%] border border-blue-500"/>
					</div>

					<div onClick={() => window.location.href = "http://localhost:5000/api/auth/google"}>
						<button className="cursor-pointer flex justify-start gap-10 btn btn-block btn-md mb-6 border border-slate-700 ">
							 <img className="w-6 rounded-full" src="/g_logo.png" alt="" />
							  Continue with Google</button>
					</div>

					<Link
						to="/signup"
						className="flex cursor-pointer justify-center text-sm  hover:underline text-white hover:text-blue-600 mt-2 text-center"
					>
						{"Dont have an account?"}
					</Link>
				</form>
			</div>
		</div>
	);
};
export default Login;