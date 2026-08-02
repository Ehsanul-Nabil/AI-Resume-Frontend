import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe, UpdateUser } from "../services/auth.api";



export const useAuth = () => {

    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context


    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        try {
            const data = await login({ email, password })
            setUser(data.user)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

//     const handleRegister = async ({ username, email, password }) => {
//         setLoading(true)
//         try {
//             const data = await register({ username, email, password })
//             setUser(data.user)
//         } catch (err) {
// console.log(err)
//         } finally {
//             setLoading(false)
//         }
//     }


const handleRegister = async ({ username, email, password, phone, address }) => {
        setLoading(true)
        try {
            const data = await register({ username, email, password, phone, address })
            setUser(data.user)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            await logout()
            setUser(null)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

const handleUpdateUser = async ({ phone, address }) => {
        setLoading(true);
        try {
            const response = await UpdateUser({ phone, address });
            
            // Assuming your response returns the updated user object, 
            // update your local auth context/state here if needed.
            setUser(response.user); 
        } catch (err) {
            console.log("Failed to update user:", err);
        } finally {
            setLoading(false);
        }
    };

useEffect(() => {
    const getAndSetUser = async () => {
        try {
            const data = await getMe();
            // Use optional chaining so it won't crash if data is undefined
            setUser(data?.user || null);
        } catch (err) { 
            console.log("User Not Found : ", err);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    getAndSetUser();
}, []);

    return { user, loading, handleRegister, handleLogin, handleLogout,handleUpdateUser }
}