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
        if (localStorage.length >= 2) {
            let username = localStorage.getItem("username")
            let password = localStorage.getItem("password")

            axios({
                method: 'post',
                url: 'https://dummyjson.com/auth/login',
                data: {
                    username: username,
                    password: password,
                }
            }).then((response) => {
                if (response.status != 200) {
                    localStorage.removeItem("passsword")
                    localStorage.removeItem("username")
                    openNotificationWithIcon()
                }
            }).catch(() => {
                openNotificationWithIcon()
            });
        } else {
            openNotificationWithIcon()
        }
    }

    return (
        <>
            {contextHolder}
        </>
    )
}

export default Dashboard;