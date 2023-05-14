import { useState, useEffect } from "react"
import axios from "axios";
import "./style.css"

const Profile = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            const accessToken = localStorage.getItem('access-token');
            console.log('access', accessToken)

            const headers = {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                    // "accept": "application/json",
                    "content-type": "application/x-www-form-urlencoded",
                }
            }

            try {
                const user = await axios.post('https://moviesapi.ir/api/user', headers)
                console.log('res', user)
                setUser(user.data);
            } catch (error) {
                console.log('error', error)
            }
        };

        fetchUserData()
    },[])

    return (
        <div className="profile__page">
            <h2 className="pt-3 ps-3 fw-semibold">Welcome Back {user.name}</h2>
        </div>
    )
}

export default Profile