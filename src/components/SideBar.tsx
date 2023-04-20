import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <>
     <div className="fixed top-[60px] left-0 w-[250px] flex items-start flex-col gap-5 py-8 pr-5 bg-prussian min-h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] overflow-y-auto">
      <Link to="/" className="grid grid-cols-[50px,1fr] items-center gap-4 py-4 px-5 bg-white rounded-r-full w-full font-[500] text-yale text-[17px] leading-none"><img src="/assets/active-icons/dashboard.svg" alt="icon" className="w-full" /> <span className="translate-y-[2px] translate-x-[2px]">Dashboard</span></Link>
      <Link to="/" className="grid grid-cols-[50px,1fr] items-center gap-4 py-4 px-5 bg-transparent rounded-r-full w-full font-[500] text-white text-[17px] leading-none"><img src="/assets/none-active-icons/data.svg" alt="icon" className="w-[35px]" /> <span className="translate-y-[2px] translate-x-[2px]">Data sets</span></Link>
      <Link to="/" className="grid grid-cols-[50px,1fr] items-center gap-4 py-4 px-5 bg-transparent rounded-r-full w-full font-[500] text-white text-[17px] leading-none"><img src="/assets/none-active-icons/heart.svg" alt="icon" className="w-[38px]" /> <span className="translate-y-[2px] translate-x-[2px]">Diseases</span></Link>
      <Link to="/" className="grid grid-cols-[50px,1fr] items-center gap-4 py-4 px-5 bg-transparent rounded-r-full w-full font-[500] text-white text-[17px] leading-none"><img src="/assets/none-active-icons/api.svg" alt="icon" className="w-[48px]" /> <span className="translate-y-[2px] translate-x-[2px]">Playground</span></Link>
     </div>
    </>
  )
}

export default SideBar