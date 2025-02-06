import { createContext, Dispatch, ReactNode, SetStateAction, use, useEffect, useState } from "react";

type AuthUserType = {
    id: string,
    fullName: string
    email: string
    profilePic: string
    gender: string
}

const AuthContext = createContext<{
    authUser: AuthUserType| null;
    setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
    isLoading: boolean
}>({
    authUser: null,
    setAuthUser: () => {},
    isLoading: false
})

export const AuthContextProvider = ({children}: {children:ReactNode}) => {
    const [authUser, setAuthUser] = useState<AuthContextType | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchAuthUser = async () => {
            
        }
    }, [])
     return (
        <AuthContext.Provider >
            {children}
        </AuthContext.Provider>
     )
}