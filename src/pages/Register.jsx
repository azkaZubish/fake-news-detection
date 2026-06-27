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
        const {name, value} = e.target
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const validateForm = () => {

        const newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }

        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = 'Confirm Password is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateForm()){
            return;
        }
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
                                        placeholder="Enter username"
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

                                 <div>
                                    <label className="block text-xs mb-2 text-slate-600 pl-4">
                                        Confirm Password
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Confirm password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-full border border-slate-300 outline-none focus:border-blue-500"
                                    />
                                    {errors.confirmPassword && (
                                        <p className="block text-xs mt-2 text-red-600 pl-4">{errors.confirmPassword}</p>
                                    )}
                                </div>

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