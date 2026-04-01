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
    <div className="grid grid-cols-2 gap-6">

      <div className="space-y-4">
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
  );
};

export default AnalyzeNews;