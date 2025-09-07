import React,{createContext,useContext,useState,useEffect} from "react";

const AuthContext = createContext();

export function AuthProvider({children}){
    console.log("user value ", children)
    const [user, setUser] = useState(() => {
        try {
            const savedAuth = localStorage.getItem("auth");
            return savedAuth ? JSON.parse(savedAuth) : null;
        } catch (error) {
            console.error("Error parsing auth from localStorage:", error);
            return null;
        }
    });

    useEffect(() => {
        try {
            if (user) {
                localStorage.setItem("auth", JSON.stringify(user));
            } else {
                localStorage.removeItem("auth");
            }
        } catch (error) {
            console.error("Error saving auth to localStorage:", error);
        }
    }, [user]);

    const login = (userObj)=>setUser(userObj)
    const logout = ()=> setUser(null)

    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
