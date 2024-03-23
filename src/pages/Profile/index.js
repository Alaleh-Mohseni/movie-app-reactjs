import { useState, useEffect, useRef } from "react";
import { httpClient } from "../../services/Http";
import { PROFILE } from "../../config/api-endpoints";
import { get } from "../../services/CreateStorage"
import { FaCamera } from "react-icons/fa6";

import ProfileImg from "../../assets/profile.png";

import './style.css';

const Profile = () => {

    const [user, setUser] = useState({});
    const [userProfile, setUserProfile] = useState()
    const profileImage = useRef()
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

    const openChooseImage = () => {
        profileImage.current.click()
    }

    const changeProfileImage = event => {
        const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
        const selected = event.target.files[0]

        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader()
            reader.onloadend = () => setUserProfile(reader.result)
            return reader.readAsDataURL(selected)
        }

    }

    return (
        <>
            <div style={{ minHeight: '100vh' }}>
                <main className="container">
                    <div className="my-3 p-3 bg-body rounded shadow-sm">
                        <h4 className="border-bottom pb-2 mb-0 text-capitalize fw-bold">Welcome Back {user.name}</h4>
                        <div className="d-flex text-body-secondary pt-3 profile">
                            <img
                                className="me-3 border rounded-circle"
                                alt="profile"
                                width="80"
                                height="80"
                                onClick={openChooseImage}
                                src={userProfile ? userProfile : ProfileImg}
                            />
                            <span className="camera__icon">
                                <FaCamera className="" size='18' />
                            </span>
                            <input
                                hidden
                                type="file"
                                ref={profileImage}
                                onChange={changeProfileImage}
                            />
                            <div className="lh-1 pt-3">
                                <h1 className="h6 text-dark pb-2">Username: @{user.name}</h1>
                                <p>Email: {user.email}</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Profile