import { Empty, Button } from 'antd';

function NotFound() {
    return (
        <div className='notFound'>
            <Empty
                description="404"
            />
            
            <Button>Go Login Page</Button>
        </div>
    )
}

export default NotFound;