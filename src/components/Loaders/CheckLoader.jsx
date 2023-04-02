import { ThreeCircles } from  'react-loader-spinner'

export default function CheckLoader() {

    return (
        <ThreeCircles
            height="50"
            width="50"
            color={`${({theme}) => theme.secondTextColor}`}
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


