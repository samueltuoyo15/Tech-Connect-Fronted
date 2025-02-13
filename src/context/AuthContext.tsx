import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

type AuthUserType = {
    id: string;
    username: string;
    fullName: string;
    email: string;
    profilePic: string;
    gender: string;
    bio: string;
    address: string;
    birthday: string;
    locale: string;
    joined: Date;
}

export const AuthContext = createContext<{
    authUser: AuthUserType| null;
    setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
    isLoading: boolean
}>({
    authUser: null,
    setAuthUser: () => {},
    isLoading: false
})

export const AuthContextProvider = ({children}: {children:ReactNode}) => {
    const [authUser, setAuthUser] = useState<AuthUserType | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const getCookie = (name: string) => {
      const cookies = document.cookie.split("; ");
      for(const cookie of cookies){
        const [key, value] = cookie.split("=");
        if(key.trim() === name) return decodeURIComponent(value);
      }
      return null;
    }
    
    useEffect(() => {
        const fetchAuthUser = async () => {
           setIsLoading(true);
            const userData = getCookie("userData");
            if(userData){
              try{
                const user: AuthUserType = JSON.parse(userData);
                setAuthUser(user);
              } catch(error){
                console.error("Error fetching Auth User", error);
                setAuthUser(null);
              }
            }
            setIsLoading(false);
        }
        fetchAuthUser();
    }, [])
     return (
        <AuthContext.Provider value={{isLoading, authUser, setAuthUser}}>
            {children}
        </AuthContext.Provider>
     );
}