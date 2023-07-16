import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from 'antd';
import axios from 'axios';

function Dashboard() {
    let navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = () => {
        api.error({
            message: "Error",
            description: "Access denied",
            onClose: () => {
                navigate('/');
            }
        });
    };

    const auth = () => {
        if (localStorage.length < 2) {
            localStorage.removeItem("name");
            localStorage.removeItem("token");
            openNotificationWithIcon();
        }
    }

    useEffect(() => {
        auth();
    }, []);

    return (
        <>
            {contextHolder}
            {localStorage.getItem("name")}
        </>
    )
}

export default Dashboard;