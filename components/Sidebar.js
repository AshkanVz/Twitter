import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
  GlobeIcon
} from "@heroicons/react/outline";
import SidebarMenuItem from "./SidebarMenuItem";

const Sidebar = () => {
    return (
        <div className="hidden sm:flex flex-col xl:items-start fixed h-full p-2 ">
            {/*Twitter log */}
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <img src="/images/tweet.png" alt="" className="h-12 w-12" />
            </div>

            {/* Menu */}
              
              <div  className="mt-4 mb-2.5 xl:items-start">
              <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={GlobeIcon} />
        
          <>
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
          </>
        
              </div>
            {/*Button */}
             <button className=" text-white bg-gradient-to-r from-blue-400 to-blue-700 rounded-full w-56 h-12 font-bold shadow-blue-200 shadow-lg hover:brightness-95 text-lg hidden xl:inline tracking-wider ">
                 Tweet
             </button>
            {/* mini-profile */}
            <div className=" hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-2">
                <img src="images/ashkan.jpg" alt="" className="h-10 w-10 rounded-full xl:mr-2" />
                <div className="leading-5 hidden xl:inline">
                    <h4 className="font-bold">Ashkan Valizadeh</h4>
                    <p className="text-gray-500">@ashkan_vz</p>
                </div>
                <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>

            </div>
        </div>
    );
};

export default Sidebar;