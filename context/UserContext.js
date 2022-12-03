import { createContext, useState, useContext, useEffect } from 'react';
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    
    const [signUpRequired, setSignUpRequired] = useState(false);

    useEffect(() => {
        const userParsed = JSON.parse(localStorage.getItem("user"));
        if(userParsed){
            setUser(userParsed)
            console.log("current User", user?.user.last_name)
        }else{
            setUser(null)
        }
        return()=>{
            setUser(null)
        }
    },[]);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,

            }}
        >
            {children}
        </UserContext.Provider>
    )
}
export function useUserContext() {
    return useContext(UserContext);
}