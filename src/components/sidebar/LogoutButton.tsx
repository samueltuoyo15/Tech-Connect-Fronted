import { LogOut } from "lucide-react";

const LogoutButton = () => {
	const handleLogout = async () => {
		const response = await fetch("http://localhost:5000/api/auth/logout", {
		  method: "POST",
		  credentials: "include",
		})
		const data = await response.json()
		alert(data?.message)
		window.location.href = "/"
	};

	return (
		<div className='mt-auto'>
			<LogOut onClick={handleLogout} className="w-6 h-6 text-white cursor-pointer" />
		</div>
	);
};
export default LogoutButton;