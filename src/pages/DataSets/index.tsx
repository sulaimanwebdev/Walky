
import { ContentContainer } from "../../components/ContentContainer";
import InsightWidget from "../../components/InsightWidget";
import Slider from "../../components/Slider";

const DataSets = () => {
  return (
    <>
      <ContentContainer>

        <div className="flex items-start 3sm:items-center 3sm:justify-between flex-col 3sm:flex-row gap-4 3sm:gap-0 mb-5">
         <div className="font-bold text-[28px]">Data Sets</div>
         <input type="text" placeholder="Search" className="rounded-full px-4 py-2 w-full 3sm:max-w-[250px] border-solid border border-black outline-none text-black placeholder:text-black" />
        </div>

        <div className="grid grid-cols-1 3sm:grid-cols-2 md:grid-cols-3 gap-4 3sm:gap-7 w-full mb-8">
          <InsightWidget title="Number of Data Sets" value="6" icon="/assets/i-icon.svg" bg="lightTeal"/>
          <InsightWidget title="Number of Patients" value="240" icon="/assets/i-icon.svg" bg="walkkyBlue"/>
        </div>

        <div className="customShadow bg-white p-5 rounded-xl mt-8 mb-8">
          <div className="font-bold text-[25px] text-[#777777] mb-5">Medical Centers</div>
          <Slider/>
        </div>


        <div className="customShadow bg-white p-5 rounded-xl mt-8">
          <div className="font-bold text-[25px] text-[#777777] mb-5">Public</div>
          <Slider/>
        </div>
      

      </ContentContainer>
    </>
  );
};

export { DataSets };
