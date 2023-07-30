import { Result, Button } from 'antd';
import { useNavigate } from "react-router-dom";

function NotFound() {
    let navigate = useNavigate();

    const routeChange = () => {
        navigate('/');
    }

    return (
        <div className='notFound'>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={routeChange}>Go Login Page</Button>}
            />           
        </div>
    )
}

export default NotFound;