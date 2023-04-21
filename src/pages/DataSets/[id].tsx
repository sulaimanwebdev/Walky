import { useParams } from 'react-router-dom';
import InsightWidget from "../../components/InsightWidget";
import DataAnalysis from "../../components/DataAnalysis";
import { ContentContainer } from "../../components/ContentContainer";
import PatientAnalysis from '../../components/PatientAnalysis';

const Hospital = () => {
  const { id } = useParams<{ id?: string }>();
  const HospitalName = id?.replace(/-/g, ' ') ?? '';

  return (
    <>
      <ContentContainer>
        <div className="font-bold text-[28px]">{`Data Sets >`} <span className='capitalize'>{HospitalName}</span></div>
        <div className="flex items-center gap-4 text-[17px] mt-2 mb-5">35,000 patients <svg width="25" height="25" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.9375 18C0.9375 8.57625 8.57625 0.9375 18 0.9375C27.4237 0.9375 35.0625 8.57625 35.0625 18C35.0625 27.4237 27.4237 35.0625 18 35.0625C8.57625 35.0625 0.9375 27.4237 0.9375 18ZM16.173 15.4765C18.1785 14.4737 20.4377 16.2867 19.8935 18.462L18.6528 23.425L18.7262 23.39C19.0346 23.2544 19.3833 23.2426 19.7002 23.357C20.017 23.4714 20.2777 23.7033 20.4284 24.0046C20.579 24.3059 20.6081 24.6535 20.5095 24.9757C20.4109 25.2978 20.1922 25.5696 19.8988 25.735L19.8288 25.7735C17.8215 26.7762 15.5623 24.9632 16.1065 22.788L17.349 17.825L17.2755 17.86C17.1207 17.946 16.9501 17.9998 16.7739 18.0182C16.5978 18.0366 16.4197 18.0191 16.2505 17.9668C16.0813 17.9145 15.9244 17.8285 15.7893 17.714C15.6542 17.5995 15.5436 17.4588 15.4643 17.3004C15.385 17.1421 15.3386 16.9693 15.3278 16.7925C15.3171 16.6157 15.3422 16.4386 15.4017 16.2718C15.4612 16.105 15.5539 15.9519 15.6741 15.8219C15.7943 15.6918 15.9396 15.5874 16.1012 15.515L16.173 15.4765ZM18 12.75C18.3481 12.75 18.6819 12.6117 18.9281 12.3656C19.1742 12.1194 19.3125 11.7856 19.3125 11.4375C19.3125 11.0894 19.1742 10.7556 18.9281 10.5094C18.6819 10.2633 18.3481 10.125 18 10.125C17.6519 10.125 17.3181 10.2633 17.0719 10.5094C16.8258 10.7556 16.6875 11.0894 16.6875 11.4375C16.6875 11.7856 16.8258 12.1194 17.0719 12.3656C17.3181 12.6117 17.6519 12.75 18 12.75Z" fill="black"/></svg></div>
      
        <div className="grid grid-cols-1 3sm:grid-cols-2 md:grid-cols-3 gap-4 3sm:gap-7 w-full mb-8">
          <InsightWidget title="Total Accuracy" value="96%" icon="/assets/i-icon.svg" bg="lightTeal"/>
          <InsightWidget title="Single Beat Accuracy" value="92%" icon="/assets/i-icon.svg" bg="walkkyBlue"/>
        </div>

        <div className="customShadow bg-white p-5 rounded-xl mb-8">
          <div className="font-bold text-[25px] text-[#777777] mb-5">Disease Analysis</div>
          <DataAnalysis/>
        </div>

        <div className="customShadow bg-white p-5 rounded-xl">
          <div className="flex items-start 3sm:items-center 3sm:justify-between flex-col 3sm:flex-row gap-4 3sm:gap-0 mb-5">
           <div className="font-bold text-[25px] text-[#777777]">Patient Analysis</div>
           <input type="text" placeholder="Search" className="rounded-full px-4 py-2 w-full 3sm:max-w-[250px] border-solid border border-black outline-none text-black placeholder:text-black" />
          </div>
          <PatientAnalysis HospitalName={HospitalName}/>
        </div>
        
      </ContentContainer>
    </>
  );
};

export { Hospital };
