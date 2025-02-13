import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";
import {useState} from "react";

const SignUp = () => {
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    gender: "Prefer not to say",
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }
  
  // submit the  form 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if(!formData.fullname || !formData.username || !formData.email || !formData.password || !formData.gender){
      setError("Please fill in all fields");
      return;
    }
    
    try{
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    });
    
    const data = await response.json()
    console.log("data")
   if(response.ok){
     window.location.href = "/login"
   } else{
     console.error("error")
     setError(data?.message || "Something went wrong")
   }
  } catch(error: any){
    console.error("Failed to signup", error)
  }
  }
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> Tech Connect</span>
				</h1>
				<p className="text-sm mt-2 text-center mb-2"> Connect with your friends today 👋!</p>
       {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
				<form onSubmit={handleSubmit}>
					 <div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input type='text'
						placeholder='John Doe'
						name="fullname"
						value={formData.fullname}
						onChange={handleChange}
						className='w-full input input-bordered h-10' />
					</div> 

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' 
						name="username"
						value={formData.username}
						onChange={handleChange}
						placeholder='johndoe' 
						className='w-full input input-bordered h-12' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Email</span>
						</label>
						<input type='email'
				   		name="email"
							placeholder='Enter Your Email'
							value={formData.email}
				  		onChange={handleChange}
							className='w-full input input-bordered h-12'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							name="password"
							placeholder='Enter Password'
							value={formData.password}
					  	onChange={handleChange}
							className='w-full input input-bordered h-12'
						/>
					</div>

					{/* <GenderCheckbox />  */}			
          <GenderCheckbox gender={formData.gender} 
           setGender={(value) => setFormData((prev) => ({...prev, gender: value}))}/>
					<div>
						<button type="submit" className='btn btn-block btn-md mt-6 border border-slate-700'>Sign Up</button>
					</div>

					<div className="flex justify-center my-6 items-center whitespace-nowrap">
					<hr className="w-[50%] border border-blue-500 mr-50" /> 
				    	<p className="mx-4">Or With</p>
					 <hr  className="w-[50%] border border-blue-500"/>
					</div>

					<div onClick={() => window.location.href = "http://localhost:5000/api/auth/google"}>
						<button className="flex justify-start gap-10 btn btn-block btn-md cursor-pointer border border-slate-700">
							 <img className="w-6 rounded-full" src="/g_logo.png" alt="" />
							  Continue with Google</button>
					</div>

					<Link
						to={"/login"}
						className='flex justify-center mt-6 text-sm hover:underline hover:text-blue-600 cursor-pointer text-white'
					>
						Already have an account? 
					</Link>
					
				</form>
			</div>
		</div>
	);
};
export default SignUp;