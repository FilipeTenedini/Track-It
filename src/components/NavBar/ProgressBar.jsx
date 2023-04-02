import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ProgbarSpace } from "./style";
import { ConcludedsContext } from '../../context/ConcludedsContext';
import { useContext } from 'react';
import { useTheme } from 'styled-components';

export default function ProgressBar(){
    const { percentConcludeds } = useContext(ConcludedsContext);
    
    const theme = useTheme();

    return (
        <ProgbarSpace>
            <Link to={"/hoje"}>
                <CircularProgressbar 
                    value={percentConcludeds}
                    text="Hoje"
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: `${theme.secondTextColor}`,
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    })}
                />
            </Link>
        </ProgbarSpace>

    );
}