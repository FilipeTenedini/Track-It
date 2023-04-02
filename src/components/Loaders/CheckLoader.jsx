import { ThreeCircles } from  'react-loader-spinner'
import { useTheme } from 'styled-components';

export default function CheckLoader() {
    const theme = useTheme();
    return (
        <ThreeCircles
            height="50"
            width="50"
            color={`${theme.secondTextColor}`}
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


