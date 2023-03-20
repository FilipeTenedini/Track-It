import { createContext, useState } from "react";

export const ConcludedsContext = createContext();

export default function ConcludedsProvider({children}){
    const [percentConcludeds, setPercentConcludeds] = useState(0);

    return(
        <ConcludedsContext.Provider value={{percentConcludeds, setPercentConcludeds}}>
            {children}
        </ConcludedsContext.Provider>
    );
}