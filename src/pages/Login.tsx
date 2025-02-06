import { Link } from "react-router-dom";
import google_logo from "../../public/g_logo.png"

const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl mb-2 font-semibold text-center text-white'>
					Login
					<span className='text-blue-500'> Tech Connect</span>
				</h1>
				<p className="text-center">Hello, Welcome Back!👋</p>

				<form>
					{/* <div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-12' />
					</div> */}

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Email</span>
						</label>
						<input type='text' placeholder='Enter Your Emaill' className='w-full input input-bordered h-12' />
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

					<div className="flex justify-between mt-4">
						<div className="">
						<input type="checkbox" name="" id="" />
						<span>  Remember Me</span>
						</div>

						<p className="text-red-500">Forgot Password?</p>
					</div>

					<div>
						<button className='btn btn-block btn-md mt-6'>Login</button>
					</div>

					<div className="flex justify-center my-6 items-center whitespace-nowrap">
					<hr className="w-[50%] border border-blue-500 mr-50" /> 
				    	<p className="mx-4">Or With</p>
					 <hr  className="w-[50%] border border-blue-500"/>
					</div>

					<div>
						<button className=' flex justify-start gap-10 btn btn-block btn-md mb-6 border border-slate-700 '>
							 <img className="w-6 rounded-full" src={google_logo} alt="" />
							  Signup with Google</button>
					</div>

					<Link
						to='/signup'
						className='flex justify-center text-sm  hover:underline text-white hover:text-blue-600 mt-2 text-center'
					>
						{"Don't"} have an account?
					</Link>
				</form>
			</div>
		</div>
	);
};
export default Login;