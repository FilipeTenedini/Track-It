import { c } from "../../constants/colors";
import { ThreeDots, MutatingDots } from  'react-loader-spinner'

export default function Loader() {

    return (
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color={`${c.lightColor}`}
            ariaLabel="three-dots-loading"  
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    );
}


// <MutatingDots 
//   height="100"
//   width="100"
//   color=`${c.lightColor}`
//   secondaryColor=`${c.lightColor}`
//   radius='12.5'
//   ariaLabel="mutating-dots-loading"
//   wrapperStyle={{}}
//   wrapperClass=""
//   visible={true}
//  />