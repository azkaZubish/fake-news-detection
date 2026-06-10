import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-6">
            <div className="w-full max-w-6xl bg-gradient-to-br from-[#8ed8a9] to-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col  justify-center">
                    <div className="flex flex-col">
                        <div className="mb-6 flex-col">
                            <div className="border border-gray-800 rounded-full p-4 w-fit">
                                <h1 className="text-md text-slate-800">
                                    Truth Lens
                                </h1>
                            </div>

                        </div>

                        <form className="space-y-5 flex-col py-4 px-12 md:px-16 md:py-8 sm:px-14 sm:py-6">
                            <div className="justify-content items-center ">
                                <p className="text-slate-800 text-2xl text-center">
                                    Login
                                </p>
                                <p className="text-slate-500 text-sm mt-2 text-center">
                                    to continue analyzing news articles.
                                </p>
                            </div>
                            <div>
                                <label className="block text-xs mb-2 text-slate-600 pl-4">
                                    Username
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter username"
                                    className="w-full px-4 py-3 rounded-full border border-slate-300 outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs mb-2 text-slate-600 pl-4">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    className="w-full px-4 py-3 rounded-full border border-slate-300 outline-none focus:border-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
                            >
                                Login
                            </button>
                        </form>

                        <p className="mt-8 text-sm text-slate-500 flex-col">
                            Don't have an account?{" "}
                            {/* <Link
                            to="/register"
                            className="text-blue-600 font-medium"
                        >
                            Register
                        </Link> */}
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
    )
}

export default Login;