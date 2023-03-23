import { c } from "../../constants/colors";
import { ThreeDots } from  'react-loader-spinner'

export default function Loader() {

    return (
        <ThreeDots
            height="50"
            width="50"
            radius="9"
            color={`${c.lightColor}`}
            ariaLabel="three-dots-loading"  
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    );
}