import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white text-gray-800">


            <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20">

                <div className="space-y-6">
                    <h2 className="text-4xl font-bold leading-tight">
                        Detect Fake News in Seconds
                    </h2>

                    <p className="text-gray-600 text-lg">
                        Analyze articles using AI-powered models to determine credibility,
                        detect misinformation, and stay informed.
                    </p>

                    <div className="flex gap-4">
                        <button
                            onClick={() => navigate("/analyze")}
                            className="px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-900 transition"
                        >
                            Analyze Now
                        </button>

                    </div>
                </div>

                <div className="bg-gray-100 p-8 rounded-xl shadow-sm">
                    <p className="text-sm text-gray-500 mb-2">Example Output</p>

                    <div className="bg-white p-5 rounded-lg shadow">
                        <h3 className="font-semibold mb-2">
                            “Breaking: Secret government leak shocks nation”
                        </h3>

                        <p className="text-red-600 font-medium">Fake News</p>
                        <p className="text-sm text-gray-500">Confidence: 87%</p>
                    </div>
                </div>

            </section>

            <section className="px-10 py-20 bg-gray-50">

                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Use TruthLens?
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <h3 className="font-semibold text-lg mb-2">
                            AI-Based Detection
                        </h3>
                        <p className="text-gray-600">
                            Uses machine learning to classify news as real or fake.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <h3 className="font-semibold text-lg mb-2">
                            Instant Analysis
                        </h3>
                        <p className="text-gray-600">
                            Get results in seconds with confidence scores.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <h3 className="font-semibold text-lg mb-2">
                            Insightful Reports
                        </h3>
                        <p className="text-gray-600">
                            View keyword analysis and detection reasoning.
                        </p>
                    </div>

                </div>
            </section>

            <section className="px-10 py-20 text-center">

                <h2 className="text-3xl font-bold mb-4">
                    Start Detecting Fake News Today
                </h2>

                <p className="text-gray-600 mb-6">
                    Try our AI-powered tool and stay ahead of misinformation.
                </p>

                <button
                    onClick={() => navigate("/analyze")}
                    className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                    Get Started
                </button>

            </section>

        </div>
    );
};

export default LandingPage;