import {useState} from "react";
import Header from "./Header";
import SideBar from "./SideBar";

interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  const [menu, setMenu] = useState('-translate-x-full')

  return (
    <main className="w-full antialiased mt-[60px]">
      <Header setMenu={setMenu}/>

      <div className="w-full flex">
       <SideBar menu={menu} setMenu={setMenu}/>
       <div className="w-full p-5 2lg:p-7 overflow-x-hidden 2lg:ml-[250px]">{children}</div>
      </div>
     </main>
  );
};

export { ContentContainer };