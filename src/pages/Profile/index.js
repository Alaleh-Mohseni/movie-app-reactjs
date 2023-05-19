import { useState, useEffect } from "react";
import { httpClient } from "../../services/Http";
import { PROFILE } from "../../config/api-endpoints";
import { get } from "../../services/CreateStorage"

import ProfileImg from "../../assets/profile.png";


const Profile = () => {

    const [user, setUser] = useState({});
    const accessToken = get('access_token');

    useEffect(() => {
        const fetchUser = async () => {
            const headers = {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                    "accept": "application/json",
                }
            }

            try {
                const response = await httpClient.get(PROFILE, headers)
                setUser(response.data);
            } catch (error) {
                console.log('error', error)
            }
        };

        fetchUser()
    }, [accessToken])

    console.log('user', user)

    return (
        <div style={{ minHeight: '100vh' }}>
            <main className="container">
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h4 className="border-bottom pb-2 mb-0 text-capitalize">Welcome Back {user.name}</h4>
                    <div className="d-flex text-body-secondary pt-3">
                        <img className="me-3" src={ProfileImg} alt="profile" width="48" height="48" />
                        <div className="lh-1">
                            <h1 className="h6 mb-0 text-dark pb-2">Username: @{user.name}</h1>
                            <small>Email: {user.email}</small>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile