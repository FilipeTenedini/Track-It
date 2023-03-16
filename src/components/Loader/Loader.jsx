import { c } from "../../constants/colors";
import { ThreeDots } from  'react-loader-spinner'

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