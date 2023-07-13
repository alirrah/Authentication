import { Empty, Button } from 'antd';
import { useNavigate } from "react-router-dom";

function NotFound() {
    let navigate = useNavigate();

    const routeChange = () => {
        navigate('/');
    }

    return (
        <div className='notFound'>
            <Empty description="404" />

            <Button onClick={routeChange}>Go Login Page</Button>
        </div>
    )
}

export default NotFound;