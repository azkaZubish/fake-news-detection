import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const validateForm = () => {

        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        const email = formData.email.trim();
        const username = formData.username.trim();
        const password = formData.password.trim();
        const confirmPassword = formData.confirmPassword.trim();

        //username validate
        if (!username) {
            newErrors.username = 'Username is required';
        } else if (username.length < 3) {
            newErrors.username = "Username must be at least 3 characters";
        } else if (!usernameRegex.test(username)) {
            newErrors.username = "Username can only contain letters, numbers and underscores";
        }

        //email validate
        if (!email) {
            newErrors.email = 'Email is required';
        }else if (!emailRegex.test(email)) {
            newErrors.email = "Invalid email";
        }

        //password validate
        if (!password) {
            newErrors.password = 'Password is required';
        }else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }else  if (!passwordRegex.test(password)) {
            newErrors.password = "Password must contain uppercase, lowercase, number and special character";
        }

        //confirm password validate
        if (password && !confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
        }else if (formData.password.trim() !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        formData.email
        const userData = {
            username : formData.username.trim(),
            email: formData.email.trim(),
            password: formData.password,
        }

        if (!validateForm()) {
            return;
        }
        const response = await fetch(`${import.meta.env.VITE_API_URL}`,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userData),
        })
        const data = await response.json()
        console.log(data)
    }
    
    return (
        <div className="animate-fadeIn">
            <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-6">
                <div className="w-full max-w-6xl bg-gradient-to-br from-[#8ed8a9] to-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex flex-col">
                            <div className="mb-4 flex-col">
                                <div className="border border-gray-800 rounded-full p-4 w-fit">
                                    <h1 className="text-md text-slate-800">
                                        Truth Lens
                                    </h1>
                                </div>

                            </div>

                            <form onSubmit={handleSubmit} className="space-y-3 flex-col py-4 px-12 md:px-16 md:py-8 sm:px-14 sm:py-6">
                                <div className="justify-content items-center ">
                                    <p className="text-slate-800 text-2xl text-center">
                                        Register
                                    </p>

                                </div>
                                <div className="">
                                    <label className="block text-xs mb-2 text-slate-600 pl-4">
                                        Username
                                    </label>

                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Enter username"
                                        className="w-full px-4 py-3 rounded-full border border-slate-300 outline-none focus:border-blue-500"
                                    />

                                    {errors.username && (
                                        <p className="block text-xs mt-2 text-red-600 pl-4">{errors.username}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xs mb-2 text-slate-600 pl-4">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-full border border-slate-300 outline-none focus:border-blue-500"
                                    />
                                    {errors.email && (
                                        <p className="block text-xs mt-2 text-red-600 pl-4">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-xs mb-2 text-slate-600 pl-4">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Enter password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-full border border-slate-300 outline-none focus:border-blue-500"
                                    />
                                    {errors.password && (
                                        <p className="block text-xs mt-2 text-red-600 pl-4">{errors.password}</p>
                                    )}
                                </div>

                                {formData.password && <div>
                                    <label className="block text-xs mb-2 text-slate-600 pl-4">
                                        Confirm Password
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Re-enter password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-full border border-slate-300 outline-none focus:border-blue-500"
                                    />
                                    {errors.confirmPassword && (
                                        <p className="block text-xs mt-2 text-red-600 pl-4">{errors.confirmPassword}</p>
                                    )}
                                </div>}

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
                                >
                                    Register
                                </button>
                            </form>

                            <p className="mt-8 text-sm text-slate-500 flex-col">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="text-blue-600 font-medium"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="hidden md:flex w-1/2 relative">
                        <button
                            onClick={() => navigate("/")}
                            className="absolute top-2 right-4 z-10 p-2 rounded-full hover:bg-white mx-auto w-10 h-10"
                        >
                            x
                        </button>
                        {/* <img
                        src="/placeholder-news.jpg"
                        alt="News Analysis"
                        className="h-full w-full object-cover"
                    /> */}

                        <div className="absolute inset-0 flex items-end">
                            <div className="p-8 text-slate-600">
                                <h2 className="text-2xl font-bold">
                                    Detect Fake News Instantly
                                </h2>

                                <p className="mt-2 text-sm">
                                    Powered by AI-driven analysis and credibility scoring.
                                </p>
                            </div>
                        </div>
                    </div>

                </div >
            </div>
        </div>
    )
}

export default Register;