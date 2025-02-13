import {useContext} from "react"
import {AuthContext} from "../context/AuthContext"
import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  const {authUser, isLoading} = useContext(AuthContext)
  if(isLoading) return <div>Loading....</div>
	return (
		<div className='flex h-[80vh] w-full md:max-w-screen-md md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar user={authUser}/>
			<MessageContainer user={authUser}/>
		</div>
	);
};
export default Home;