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
        <div className="grid md:grid-cols-2 gap-8 items-start">

          <div className="space-y-6">
            <TextInputBox
              value={text}
              setValue={setText}
              onAnalyze={() => detectNews(text)}
            />

            <ImageUploadBox onUpload={(file) => console.log(file)} />
          </div>

          <div className="space-y-4">
            <AnimatedMeter result={result} loading={loading} />
            <AnalysisPanel result={result} />
          </div>

        </div>
      </div>
    </>
  );
};

export default AnalyzeNews;