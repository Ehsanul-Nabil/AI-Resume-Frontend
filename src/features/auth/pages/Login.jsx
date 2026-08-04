// import React, { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import "../auth.form.scss"
// import { useAuth } from '../hooks/useAuth'

// const Login = () => {
//     const { loading, handleLogin } = useAuth()
//     const navigate = useNavigate()

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         await handleLogin({ email, password })
//         navigate('/')
//     }

//     if (loading) {
//         return (
//             <div className="auth-loading">
//                 <div className="spinner"></div>
//                 <p>Loading...</p>
//             </div>
//         )
//     }

//     return (
//         <main className="auth-wrapper">
//             <div className="form-container">
//                 <div className="form-header">
//                     <h1>Welcome Back</h1>
//                     <p>Please enter your details to sign in.</p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="auth-form">
//                     <div className="input-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             onChange={(e) => { setEmail(e.target.value) }}
//                             type="email" 
//                             id="email" 
//                             name="email" 
//                             placeholder="name@example.com" 
//                             required
//                         />
//                     </div>
                    
//                     <div className="input-group">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             onChange={(e) => { setPassword(e.target.value) }}
//                             type="password" 
//                             id="password" 
//                             name="password" 
//                             placeholder="••••••••" 
//                             required
//                         />
//                     </div>

//                     <button type="submit" className="button primary-button">
//                         Sign In
//                     </button>
//                 </form>

//                 <div className="auth-divider">
//                     <span>or continue with</span>
//                 </div>

// <button 
// // onClick={() => window.open(`${import.meta.env.VITE_API_URLL}/api/auth/google`, "_self")}
// onClick={
//     () => {
//   const apiUrl = import.meta.env.VITE_NODE_ENV=== "production" 
//     ? import.meta.env.VITE_API_URL
//     : import.meta.env.VITE_API_URLL;
//   window.open(`${apiUrl}/api/auth/google`, "_self");
// }
// }
//     className="google-auth-btn"
// >
//     <svg className="google-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
//         <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
//         <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.19v3.15C3.18 21.38 7.32 24 12 24z"/>
//         <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.6H1.19C.43 8.13 0 9.87 0 12s.43 3.87 1.19 5.4l4.08-3.16z"/>
//         <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.32 0 3.18 2.62 1.19 6.6l4.08 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
//     </svg>
//     <span>Continue with Google</span>
// </button>

//                 <p className="auth-footer-text">
//                     Don't have an account? <Link to={"/register"}>Create account</Link>
//                 </p>
//             </div>
//         </main>
//     )
// }

// export default Login



// // 2. The Main Login Component calling LoginLeft inside it
// import  { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import "../auth.form.scss"
// import { useAuth } from '../hooks/useAuth'
// import LoginLeft from '../components/LoginLeft'

// const Login = () => {
//     const { loading, handleLogin } = useAuth()
//     const navigate = useNavigate()

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         await handleLogin({ email, password })
//         navigate('/')
//     }

//     if (loading) {
//         return (
//             <div className="auth-loading">
//                 <div className="spinner"></div>
//                 <p>Loading...</p>
//             </div>
//         )
//     }

//     return (
//         <div className="flex min-h-screen w-full bg-white select-none">
//             <LoginLeft />

//             <main className="auth-wrapper flex-1 flex items-center justify-center p-8 lg:p-16">
//                 <div className="form-container w-full max-w-md mx-auto">
//                     <div className="form-header mb-8">
//                         <h1>Welcome Back</h1>
//                         <p>Please enter your details to sign in.</p>
//                     </div>

//                     <form onSubmit={handleSubmit} className="auth-form space-y-4">
//                         <div className="input-group flex flex-col gap-1.5">
//                             <label htmlFor="email">Email</label>
//                             <input
//                                 onChange={(e) => { setEmail(e.target.value) }}
//                                 type="email" 
//                                 id="email" 
//                                 name="email" 
//                                 placeholder="name@example.com" 
//                                 required
//                                 className="px-3.5 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
//                             />
//                         </div>
                        
//                         <div className="input-group flex flex-col gap-1.5">
//                             <label htmlFor="password">Password</label>
//                             <input
//                                 onChange={(e) => { setPassword(e.target.value) }}
//                                 type="password" 
//                                 id="password" 
//                                 name="password" 
//                                 placeholder="••••••••" 
//                                 required
//                                 className="px-3.5 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
//                             />
//                         </div>

//                         <button type="submit" className="button primary-button w-full py-2.5 px-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium rounded-lg shadow-md transition-all">
//                             Sign In
//                         </button>
//                     </form>

//                     <div className="auth-divider my-6 flex items-center text-center text-zinc-400 text-sm before:flex-1 before:border-t before:border-zinc-200 before:mr-3 after:flex-1 after:border-t after:border-zinc-200 after:ml-3">
//                         <span>or continue with</span>
//                     </div>

//                     <button 
//                         onClick={() => {
//                             const apiUrl = import.meta.env.VITE_NODE_ENV === "production" 
//                                 ? import.meta.env.VITE_API_URL
//                                 : import.meta.env.VITE_API_URLL;
//                             window.open(`${apiUrl}/api/auth/google`, "_self");
//                         }}
//                         className="google-auth-btn w-full flex items-center justify-center gap-3 py-2.5 px-4 border border-zinc-300 rounded-lg font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
//                     >
//                         <svg className="google-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
//                             <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
//                             <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.19v3.15C3.18 21.38 7.32 24 12 24z"/>
//                             <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.6H1.19C.43 8.13 0 9.87 0 12s.43 3.87 1.19 5.4l4.08-3.16z"/>
//                             <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.32 0 3.18 2.62 1.19 6.6l4.08 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
//                         </svg>
//                         <span>Continue with Google</span>
//                     </button>

//                     <p className="auth-footer-text text-center text-sm text-zinc-500 mt-6">
//                         Don't have an account? <Link to={"/register"} className="text-indigo-600 hover:underline font-medium">Create account</Link>
//                     </p>
//                 </div>
//             </main>
//         </div>
//     )
// }

// export default Login



import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'
import LoginLeft from '../components/LoginLeft'

const Login = () => {
    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate('/')
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
            {/* Hidden on mobile, displayed side-by-side on large screens */}
            <LoginLeft />

            {/* Takes full width on mobile, and flexes on desktop */}
            <main className="auth-wrapper w-full lg:flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-16 bg-[#09090b]">
                <div className="form-container w-full max-w-md mx-auto">
                    <div className="form-header mb-8">
                        <h1 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h1>
                        <p className="text-sm text-zinc-400 mt-1">Please enter your details to sign in.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form space-y-4">
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

                        <button type="submit" className="button primary-button w-full py-2.5 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-md transition-all">
                            Sign In
                        </button>
                    </form>

                    <div className="auth-divider my-6 flex items-center text-center text-zinc-500 text-sm before:flex-1 before:border-t before:border-zinc-800 before:mr-3 after:flex-1 after:border-t after:border-zinc-800 after:ml-3">
                        <span>or continue with</span>
                    </div>

                    <button 
                        onClick={() => {
                            const apiUrl = import.meta.env.VITE_NODE_ENV === "production" 
                                ? import.meta.env.VITE_API_URL
                                : import.meta.env.VITE_API_URLL;
                            window.open(`${apiUrl}/api/auth/google`, "_self");
                        }}
                        className="google-auth-btn w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-zinc-900 border border-zinc-700 rounded-lg font-medium text-zinc-200 hover:bg-zinc-800 transition-colors"
                    >
                        <svg className="google-icon" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.19v3.15C3.18 21.38 7.32 24 12 24z"/>
                            <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.6H1.19C.43 8.13 0 9.87 0 12s.43 3.87 1.19 5.4l4.08-3.16z"/>
                            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.32 0 3.18 2.62 1.19 6.6l4.08 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
                        </svg>
                        <span>Continue with Google</span>
                    </button>

                    <p className="auth-footer-text text-center text-sm text-zinc-400 mt-6">
                        Don't have an account? <Link to={"/register"} className="text-purple-400 hover:underline font-medium">Create account</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Login