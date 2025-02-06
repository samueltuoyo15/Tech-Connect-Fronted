import { Link } from "react-router-dom";
// import GenderCheckbox from "../components/GenderCheckbox";
// import GenderCheckbox from "../components/GenderCheckbox";
import gogle_logo from '../../public/g_logo.png'

const SignUp = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> Tech Connect</span>
				</h1>
				<p className="text-sm mt-2 text-center mb-2"> Connect with your friends today 👋!</p>

				<form>
					{/* <div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
					</div> */}

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-12' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Email</span>
						</label>
						<input
							type='password'
							placeholder='Enter Your Email'
							className='w-full input input-bordered h-12'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-12'
						/>
					</div>

					{/* <GenderCheckbox />  */}			

					<div>
						<button className='btn btn-block btn-md mt-6 border border-slate-700'>Sign Up</button>
					</div>

					<div className="flex justify-center my-6 items-center whitespace-nowrap">
					<hr className="w-[50%] border border-blue-500 mr-50" /> 
				    	<p className="mx-4">Or With</p>
					 <hr  className="w-[50%] border border-blue-500"/>
					</div>

					<div>
						<button className=' flex justify-start gap-10 btn btn-block btn-md  border border-slate-700 '>
							 <img className="w-6 rounded-full" src={gogle_logo} alt="" />
							  Signup with Google</button>
					</div>

				
			
					<Link
						to={"/login"}
						className='flex justify-center mt-6 text-sm hover:underline hover:text-blue-600   text-white'
					>
						Already have an account? 
					</Link>
					
				</form>
			</div>
		</div>
	);
};
export default SignUp;