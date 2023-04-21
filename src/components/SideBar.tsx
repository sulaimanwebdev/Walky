import { Link, useLocation } from "react-router-dom"

const SideBar = (props: any) => {
  const location = useLocation();

  return (
    <>
     <div className={`transition 2lg:translate-x-0 ${props.menu} fixed top-0 2lg:top-[60px] left-0 w-full max-w-[250px] z-[120] flex items-start flex-col gap-5 py-8 pr-5 bg-prussian min-h-screen max-h-screen 2lg:min-h-[calc(100vh-60px)] 2lg:max-h-[calc(100vh-60px)] overflow-y-auto`}>
      
      <Link to="/" className={`grid grid-cols-[50px,1fr] items-center gap-4 py-4 px-5 rounded-r-full w-full font-[500] text-[17px] leading-none ${location.pathname === "/" ? "text-yale bg-white" : "text-white bg-transparent"}`}>
        <img src="/assets/active-icons/dashboard.svg" alt="icon" className={`w-full ${location.pathname === "/" ? "" : "hidden"}`} />
        <img src="/assets/none-active-icons/dashboard.svg" alt="icon" className={`w-full ${location.pathname === "/" ? "hidden" : ""}`} />
        <span className="translate-y-[2px] translate-x-[2px]">Dashboard</span>
      </Link>

      <Link
            to="/data-sets"
            className={`grid grid-cols-[50px,1fr] items-center gap-4 py-4 px-5 rounded-r-full w-full font-[500] text-[17px] leading-none ${location.pathname.startsWith('/data-sets') ? "text-yale bg-white" : "text-white bg-transparent"}`}
          >
            <img src="/assets/active-icons/data.svg" alt="icon" className={`w-[35px] ${location.pathname.startsWith('/data-sets') ? "" : "hidden"}`} />
            <img src="/assets/none-active-icons/data.svg" alt="icon" className={`w-[35px] ${location.pathname.startsWith('/data-sets') ? "hidden" : ""}`} />
            <span className="translate-y-[2px] translate-x-[2px]">Data sets</span>
          </Link>

      <Link to="/diseases" className={`grid grid-cols-[50px,1fr] items-center gap-4 py-4 px-5 rounded-r-full w-full font-[500] text-[17px] leading-none ${location.pathname === "/diseases" ? "text-yale bg-white" : "text-white bg-transparent"}`}>
        <img src="/assets/active-icons/heart.svg" alt="icon" className={`w-[38px] ${location.pathname === "/diseases" ? "" : "hidden"}`} />
        <img src="/assets/none-active-icons/heart.svg" alt="icon" className={`w-[38px] ${location.pathname === "/diseases" ? "hidden" : ""}`} />
        <span className="translate-y-[2px] translate-x-[2px]">Diseases</span>
      </Link>

      <Link to="/playground" className={`grid grid-cols-[50px,1fr] items-center gap-4 py-4 px-5 rounded-r-full w-full font-[500] text-[17px] leading-none ${location.pathname === "/playground" ? "text-yale bg-white" : "text-white bg-transparent"}`}>
      <img src="/assets/active-icons/api.svg" alt="icon" className={`w-[48px] ${location.pathname === "/playground" ? "" : "hidden"}`} />
        <img src="/assets/none-active-icons/api.svg" alt="icon" className={`w-[48px] ${location.pathname === "/playground" ? "hidden" : ""}`} />
        <span className="translate-y-[2px] translate-x-[2px]">Playground</span>
      </Link>

     </div>

     <div onClick={()=> {props.setMenu("-translate-x-full")}} className={`fixed top-0 left-0 w-full h-screen bg-walkkyBlue bg-opacity-50 z-[115] transition ${props.menu === "-translate-x-full" ? "opacity-0 invisible" : "opacity-100 visible"}`}></div>
    </>
  )
}

export default SideBar;
