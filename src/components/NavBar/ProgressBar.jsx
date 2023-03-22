import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ProgbarSpace } from "./style";
import  { c } from "../../constants/colors";
import { ConcludedsContext } from '../../context/ConcludedsContext';
import { useContext } from 'react';

export default function ProgressBar(){
    const { percentConcludeds } = useContext(ConcludedsContext);
    

    return (
        <ProgbarSpace>
            <Link to={"/hoje"}>
                <CircularProgressbar 
                    value={percentConcludeds}
                    text="Hoje"
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: `${c.lightImp}`,
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    })}
                />
            </Link>
        </ProgbarSpace>

    );
}