
import { ContentContainer } from "../components/ContentContainer";
import InsightWidget from "../components/InsightWidget";
import DataAnalysis from "../components/DataAnalysis";
import Slider from "../components/Slider";
import DataDistribution from "../components/DataDistribution";

const Home = () => {
  return (
    <>
      <ContentContainer>
        <div className="font-bold text-[28px] mb-5">Walkky Data Analysis</div>

        <div className="grid grid-cols-1 3sm:grid-cols-2 md:grid-cols-3 gap-4 3sm:gap-7 w-full mb-8">
          <InsightWidget title="Total Accuracy" value="98%" icon="/assets/i-icon.svg" bg="lightTeal"/>
          <InsightWidget title="Single Beat Accuracy" value="96%" icon="/assets/i-icon.svg" bg="walkkyBlue"/>
        </div>
 
        <div className="customShadow bg-white p-5 rounded-xl">
          <div className="font-bold text-[25px] text-[#777777] mb-5">Data Analysis</div>
          <DataAnalysis/>
        </div>

        <div className="customShadow bg-white p-5 rounded-xl mt-8 mb-8">
          <div className="font-bold text-[25px] text-[#777777] mb-1">Data Sets</div>
          <div className="mb-5">Most recent</div>
          <Slider/>
        </div>

        <DataDistribution/>

      </ContentContainer>
    </>
  );
};

export { Home };
