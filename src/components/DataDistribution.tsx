
const DataDistribution = () => {
  return (
    <>
    <div className="customShadow bg-white p-5 rounded-xl">
      <div className="flex items-start 2sm:items-center justify-between gap-5 whitespace-nowrap flex-col 2sm:flex-row">
       <div className="font-bold text-[25px] text-[#777777]">Disease Distribution</div>
       <div className="flex items-center justify-between 2sm:justify-end w-full gap-4 2sm:gap-8 flex-wrap">
         <div className="flex items-center gap-3 flex-row-reverse">AFIB <div className="w-[20px] h-[20px] rounded-full bg-walkkyBlue"></div></div>
         <div className="flex items-center gap-3 flex-row-reverse">VT <div className="w-[20px] h-[20px] rounded-full bg-steel"></div></div>
         <div className="flex items-center gap-3 flex-row-reverse">ST <div className="w-[20px] h-[20px] rounded-full bg-hospitalGreen"></div></div>
         <div className="flex items-center gap-3 flex-row-reverse">SA <div className="w-[20px] h-[20px] rounded-full bg-prussian"></div></div>
       </div>
      </div>

      <div className="flex flex-col gap-5 mt-7 2sm:mt-5">
        <div className="grid grid-cols-1 2sm:grid-cols-[120px,1fr] gap-2 2sm:gap-0 items-center">
            <div className="text-[17px] w-fit">Rambam</div>
            <div className="flex w-full">
                <div className="bg-walkkyBlue rounded-full w-[30%] h-[15px]"></div>
                <div className="bg-lightTeal rounded-full w-[30%] h-[15px]"></div>
                <div className="bg-hospitalGreen rounded-full w-[25%] h-[15px]"></div>
                <div className="bg-prussian rounded-full w-[15%] h-[15px]"></div>
            </div>
        </div>

        <div className="grid grid-cols-1 2sm:grid-cols-[120px,1fr] gap-2 2sm:gap-0 items-center">
            <div className="text-[17px] w-fit">Sheba</div>
            <div className="flex w-full">
                <div className="bg-walkkyBlue rounded-full w-[30%] h-[15px]"></div>
                <div className="bg-lightTeal rounded-full w-[25%] h-[15px]"></div>
                <div className="bg-hospitalGreen rounded-full w-[45%] h-[15px]"></div>
            </div>
        </div>


        <div className="grid grid-cols-1 2sm:grid-cols-[120px,1fr] gap-2 2sm:gap-0 items-center">
            <div className="text-[17px] w-fit">Mayo Clinic</div>
            <div className="flex w-full">
                <div className="bg-walkkyBlue rounded-full w-[20%] h-[15px]"></div>
                <div className="bg-lightTeal rounded-full w-[40%] h-[15px]"></div>
                <div className="bg-hospitalGreen rounded-full w-[10%] h-[15px]"></div>
                <div className="bg-prussian rounded-full w-[30%] h-[15px]"></div>
            </div>
        </div>

        
      </div>
          
    </div>
    </>
  )
}

export default DataDistribution