import { c } from "../../constants/colors";
import { ThreeCircles } from  'react-loader-spinner'

export default function CheckLoader() {

    return (
        <ThreeCircles
            height="50"
            width="50"
            color={c.concludedColor}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
        />
    );
}


