import { ThreeDots } from  'react-loader-spinner'
import { useTheme } from 'styled-components';

export default function Loader() {

    const theme = useTheme();

    return (
        <ThreeDots
            height="50"
            width="50"
            radius="9"
            color={`${theme.btnTextColor}`}
            ariaLabel="three-dots-loading"  
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    );
}