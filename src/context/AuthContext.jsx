import { createContext, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider( { children } ){
    const [userData, setUserData] = useEffect({});
    
    return (
        <AuthContext.Provider
            value={userData}
            setUserData={() => setUserData(obj)}
        >
            {children}
        </AuthContext.Provider>
    );
} 