import { useState } from "react";
import useFakeDetection from "../hooks/useFakeDetection";
import TextInputBox from "../components/analyzer/TextInputBox";
import AnimatedMeter from "../components/analyzer/AnimatedMeter";
import AnalysisPanel from "../components/analyzer/AnalysisPanel";
import ImageUploadBox from "../components/analyzer/ImageUploadBox";

const AnalyzeNews = () => {
  const [text, setText] = useState("");
  const { result, loading, detectNews } = useFakeDetection();

  return (
    <>
      <div className="animate-fadeIn">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            News Analyzer
          </h1>
          <p className="text-gray-500">
            Detect whether news is real or fake using AI
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">

          <div className="space-y-6">
            <TextInputBox
              value={text}
              setValue={setText}
              onAnalyze={() => detectNews(text)}
            />

          </div>

          <div className="space-y-4">

            {!result && !loading && (
              <div className="bg-white p-8 rounded-xl shadow-sm border text-center animate-fadeIn">

                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-primary text-2xl">
                  !
                </div>

                <h2 className="text-lg font-semibold text-gray-700">
                  No analysis yet
                </h2>

                <p className="text-gray-500 mt-2">
                  Paste the content and click
                  <span className="text-primary font-medium"> Analyze</span> to see results
                </p>

              </div>
            )}

            {loading && (
              <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
                <p className="text-gray-500 animate-pulse">
                  Analyzing news...
                </p>
              </div>
            )}

            {result && (
              <>
                <AnimatedMeter result={result} loading={loading} />
              </>
            )}

          </div>

        </div>
      </div>
    </>
  );
};

export default AnalyzeNews;