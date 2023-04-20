import Header from "./Header";
import SideBar from "./SideBar";

interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return (
    <main className="w-full antialiased mt-[60px]">
      <Header/>

      <div className="w-full flex">
       <SideBar/>
       <div className="w-full p-7 ml-[250px] overflow-x-hidden">{children}</div>
      </div>
     </main>
  );
};

export { ContentContainer };
