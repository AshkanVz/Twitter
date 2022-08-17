import { SearchIcon } from "@heroicons/react/outline";

const Widgets = () => {
    return (
        <div className="xl:w-[600px] hidden lg:inline p-3">
            <div className="w-[90%] xl:w-[75%] sticky top-0  py-1.5 z-50">
                <div className="flex items-center p-3 rounded-full relative">
                    <SearchIcon className="h-5 w-5 z-50 text-gray-500"/>
                    <input type="text" placeholder="Search Twitter" className="rounded-full absolute inset-0 pl-11 border-gray-500 text-gray-700 focus:shadow-xl focus:bg-white bg-slate-50" />
                </div>
                
            </div>
            
        </div>
    );
};

export default Widgets;