
const InsightWidget = (props:any) => {
  return (
    <>
    <div className={`w-full customShadow rounded-lg text-white p-5 pb-0 ${props.bg === "lightTeal" ? "bg-lightTeal" : props.bg === "walkkyBlue" ? "bg-walkkyBlue" : props.bg === "walkyOrange" ? "bg-walkyOrange" : ""}`}>
      <div>{props.title}</div>

      <div className="flex items-center justify-between mt-6">
       <div className="text-[55px]">{props.value}</div>
       <div><img src={props.icon} alt="icon" className="w-[40px]" /></div>
      </div>
    </div>
    </>
  )
}

export default InsightWidget