
import React, { useState } from "react";
import { ContentContainer } from "../components/ContentContainer";
import InsightWidget from "../components/InsightWidget";

const Home = () => {
  return (
    <>
      <ContentContainer>
        <div className="font-bold text-[28px] mb-5">Walkky Data Analysis</div>
        <div className="grid grid-cols-3 gap-5 w-full">
          <InsightWidget title="Total Accuracy" value="98%" icon="/assets/i-icon.svg" bg="lightTeal"/>
          <InsightWidget title="Total Accuracy" value="98%" icon="/assets/i-icon.svg" bg="walkkyBlue"/>
        </div>
      </ContentContainer>
    </>
  );
};

export { Home };
