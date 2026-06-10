const Login = () => {
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-6">
            <div className="w-full max-w-6xl bg-gradient-to-br from-[#8ed8a9] to-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col  justify-center">
                    <div className="flex flex-col">
                        <div className="mb-10 flex-col">
                            <h1 className="text-3xl font-bold text-slate-800">
                                Welcome Back
                            </h1>

                            <p className="text-slate-500 mt-2">
                                Login to continue analyzing news articles.
                            </p>
                        </div>

                        <form className="space-y-5 flex-col py-4 px-12 md:px-16 md:py-8 sm:px-14 sm:py-6">
                            <div>
                                <label className="block text-sm mb-2 text-slate-600">
                                    Username
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter username"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-2 text-slate-600">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:border-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
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
                {/* <img
                        src="/placeholder-news.jpg"
                        alt="News Analysis"
                        className="h-full w-full object-cover"
                    /> */}

                <div className="absolute inset-0 flex items-end">
                    <div className="p-8 text-white">
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