import { createContext, useState, useContext, useEffect } from 'react';
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(null);
    const [feedbackData, setFeedbackData] = useState(null);
    const [dashboardStatus, setDashboardStatus]= useState(0)

    useEffect(() => {
        const userParsed = JSON.parse(localStorage.getItem("user"));
        const adminParsed = JSON.parse(localStorage.getItem("admin"));
        if(userParsed){
            setUser(userParsed)
        }else{
            setUser(null)
        }
        
        if(adminParsed){
            setAdmin(adminParsed)
        }else{
            setAdmin(null)
        }
        return()=>{
            setUser(null)
            setAdmin(null)
        }
    },[]);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                dashboardStatus,
                setDashboardStatus,
                feedbackData,
                setFeedbackData,
                admin,
                setAdmin,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
export function useUserContext() {
    return useContext(UserContext);
}