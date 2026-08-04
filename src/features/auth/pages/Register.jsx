
// import React, { useState } from 'react'
// import { useNavigate, Link } from 'react-router'
// import { useAuth } from '../hooks/useAuth'
// import LoginLeft from '../components/LoginLeft'

// const Register = () => {

//     const navigate = useNavigate()
//     const [username, setUsername] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [phone, setPhone] = useState("")
//     const [address, setAddress] = useState("")

//     const { loading, handleRegister } = useAuth()
    
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         // Passing phone and address along with credentials
//         await handleRegister({ username, email, password, phone, address })
//         navigate("/")
//     }

//     if (loading) {
//         return (<main><h1>Loading.......</h1></main>)
//     }

//     return (
//         <main>
//             <LoginLeft/>
//             <div className="form-container">
//                 <h1>Register</h1>

//                 <form onSubmit={handleSubmit}>

//                     <div className="input-group">
//                         <label htmlFor="username">Username</label>
//                         <input
//                             onChange={(e) => { setUsername(e.target.value) }}
//                             type="text" id="username" name='username' placeholder='Enter username' />
//                     </div>

//                     <div className="input-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             onChange={(e) => { setEmail(e.target.value) }}
//                             type="email" id="email" name='email' placeholder='Enter email address' />
//                     </div>

//                     <div className="input-group">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             onChange={(e) => { setPassword(e.target.value) }}
//                             type="password" id="password" name='password' placeholder='Enter password' />
//                     </div>

//                     <div className="input-group">
//                         <label htmlFor="phone">Phone <span className="optional-text">(Optional)</span></label>
//                         <input
//                             onChange={(e) => { setPhone(e.target.value) }}
//                             type="text" id="phone" name='phone' placeholder='Enter phone number' />
//                     </div>

//                     <div className="input-group">
//                         <label htmlFor="address">Address <span className="optional-text">(Optional)</span></label>
//                         <input
//                             onChange={(e) => { setAddress(e.target.value) }}
//                             type="text" id="address" name='address' placeholder='Enter address' />
//                     </div>

//                     <button className='button primary-button'>Register</button>

//                 </form>

//                 <p>Already have an account? <Link to={"/login"}>Login</Link> </p>
//             </div>
//         </main>
//     )
// }

// export default Register


import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'
import LoginLeft from '../components/LoginLeft'

const Register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const { loading, handleRegister } = useAuth()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({ username, email, password, phone, address })
        navigate("/")
    }

    if (loading) {
        return (
            <div className="auth-loading">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen w-full bg-[#18181b] select-none text-zinc-100">
            <LoginLeft />

            <main className="auth-wrapper w-full lg:flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-16 bg-[#09090b]">
                <div className="form-container w-full max-w-md mx-auto">
                    <div className="form-header mb-8">
                        <h1 className="text-2xl font-bold text-white tracking-tight">Create an Account</h1>
                        <p className="text-sm text-zinc-400 mt-1">Please enter your details to sign up.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form space-y-4">
                        <div className="input-group flex flex-col gap-1.5">
                            <label htmlFor="username" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">Username</label>
                            <input
                                onChange={(e) => { setUsername(e.target.value) }}
                                type="text" 
                                id="username" 
                                name="username" 
                                placeholder="Enter username" 
                                required
                                className="px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            />
                        </div>

                        <div className="input-group flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">Email</label>
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="name@example.com" 
                                required
                                className="px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            />
                        </div>
                        
                        <div className="input-group flex flex-col gap-1.5">
                            <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">Password</label>
                            <input
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="••••••••" 
                                required
                                className="px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            />
                        </div>

                        <div className="input-group flex flex-col gap-1.5">
                            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                                Phone <span className="optional-text text-zinc-500 font-normal lowercase">(optional)</span>
                            </label>
                            <input
                                onChange={(e) => { setPhone(e.target.value) }}
                                type="text" 
                                id="phone" 
                                name="phone" 
                                placeholder="Enter phone number" 
                                className="px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            />
                        </div>

                        <div className="input-group flex flex-col gap-1.5">
                            <label htmlFor="address" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                                Address <span className="optional-text text-zinc-500 font-normal lowercase">(optional)</span>
                            </label>
                            <input
                                onChange={(e) => { setAddress(e.target.value) }}
                                type="text" 
                                id="address" 
                                name="address" 
                                placeholder="Enter address" 
                                className="px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            />
                        </div>

                        <button type="submit" className="button primary-button w-full py-2.5 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-md transition-all">
                            Register
                        </button>
                    </form>

                    <p className="auth-footer-text text-center text-sm text-zinc-400 mt-6">
                        Already have an account? <Link to={"/login"} className="text-purple-400 hover:underline font-medium">Login</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Register