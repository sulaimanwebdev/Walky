import { useParams } from 'react-router-dom';
import InsightWidget from "../../components/InsightWidget";
import { ContentContainer } from "../../components/ContentContainer";

const Patient = () => {
  const { id, subId } = useParams<{ id?: string, subId?: string }>();
  const HospitalName = id?.replace(/-/g, ' ') ?? '';

  return (
    <>
      <ContentContainer>
        <div className="font-bold text-[28px] mb-5">{`Data Sets >`} <span className='capitalize'>{HospitalName}</span> {`>`} {subId}</div>
      
        <div className="grid grid-cols-1 3sm:grid-cols-2 md:grid-cols-3 gap-4 3sm:gap-7 w-full mb-8">
          <InsightWidget title="67 y/o" value="Male" icon="/assets/user.svg" bg="walkyOrange"/>
          <InsightWidget title="Diagnosed Disease" value="AFIB" icon="/assets/heart.svg" bg="lightTeal"/>
          <InsightWidget title="Walkky Prediction" value="AFIB" icon="/assets/check.svg" bg="walkkyBlue"/>
        </div>

      </ContentContainer>
    </>
  );
};

export { Patient };