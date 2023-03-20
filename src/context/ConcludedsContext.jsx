import { createContext, useState } from "react";

export const ConcludedsContext = createContext();

export default function ConcludedsProvider({children}){
    const [percentConcludeds, setPercentConcludeds] = useState();

    return(
        <ConcludedsContext.Provider>
            {children}
        </ConcludedsContext.Provider>
    );
}