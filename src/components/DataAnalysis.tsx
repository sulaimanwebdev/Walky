const DataAnalysis = () => {

    let data = [
        {
          name: "AFIB",
          dataSets: 53,
          accuracyDataSets: 93,
        },
        {
          name: "Normal",
          dataSets: 14,
          accuracyDataSets: 94,
        },
        {
          name: "SB",
          dataSets: 67,
          accuracyDataSets: 97,
        },
        {
          name: "VT",
          dataSets: 72,
          accuracyDataSets: 92,
        },
        {
          name: "PVC",
          dataSets: 65,
          accuracyDataSets: 95,
        },
        {
          name: "VF",
          dataSets: 65,
          accuracyDataSets: 95,
        },
        {
          name: "SA",
          dataSets: 70,
          accuracyDataSets: 90,
        },
        {
          name: "SVT",
          dataSets: 53,
          accuracyDataSets: 93,
        },
      ];


    return (
      <>
          <div className="max-w-full overflow-x-auto">
          <div className="grid grid-cols-[80px,1fr,1fr] md:grid-cols-[120px,1fr,1fr] gap-10 min-w-[800px]">
            <div>
              <div className="font-[600] text-[18px] mb-4">Name</div>
              <div className="flex flex-col gap-5">
                {data.map((item) => (
                  <div key={Math.random()}>{item.name}</div>
                ))}
              </div>
            </div>
  
            <div>
              <div className="font-[600] text-[18px] mb-4">% of Data Sets</div>
              <div className="flex flex-col gap-5">
                {data.map((item) => (
                  <div className="flex items-center gap-3 w-full" key={Math.random()}>
                    <div style={{ fontSize: "17px", color: "#777777" }}>
                      {item.dataSets}%
                    </div>
                    <div className="flex rounded-full bg-yale bg-opacity-30 w-full h-[15px] overflow-hidden">
                      <div
                        className={`bg-walkkyBlue h-full rounded-full`}
                        style={{ width: `${item.dataSets}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            <div>
              <div className="font-[600] text-[18px] mb-4">
                Accuracy across all data sets
              </div>
              <div className="flex flex-col gap-5">
                {data.map((item) => (
                  <div className="flex items-center gap-3 w-full" key={Math.random()}>
                    <div style={{ fontSize: "17px", color: "#777777" }}>
                      {item.accuracyDataSets}%
                    </div>
                    <div className="flex rounded-full bg-lightTeal bg-opacity-30 w-full h-[15px] overflow-hidden">
                      <div
                        className={`bg-lightTeal h-full rounded-full`}
                        style={{ width: `${item.accuracyDataSets}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
      </>
    );
  };
  
  export default DataAnalysis;
  