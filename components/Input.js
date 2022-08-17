import { EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";


const Input = () => {
    return (
        <div className="flex  border-b border-gray-200 p-3 space-x-3">
          <img
            
            src="/images/ashkan.jpg"
            alt="user-img"
            className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
          />
          <div className="w-full divide-y-2 divide-gray-200">
            <div className="">
              <textarea
                className="w-full border-none rounded-xl focus:ring-0 text-lg placeholder-gray-700 bg-slate-100 tracking-wide min-h-[50px] text-gray-600"
                rows="2"
                placeholder="What's happening?"
                
                
              ></textarea>
            </div>
            <hr className=" mt-4 h-0.5 leading-5 bg-gray-600"/>
              
          
            <div className="flex items-center justify-between pt-2.5">
             
                <>
                  <div className="flex">
                    <div
                      className=""
                      
                    >
                      <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                      <input
                        type="file"
                        hidden
                        
                      />
                    </div>
                    <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                  </div>
                  <button
                    
                    
                    className="bg-gradient-to-r from-blue-400 leading-5 to-blue-700 text-white px-4 py-1.5 rounded-full font-bold shadow-blue-200 shadow-lg tracking-wide align-baseline hover:brightness-95 disabled:opacity-50"
                  >
                    <p className="items-center mb-0.5 p-0.5">Tweet</p>
                  </button>
                </>
            
            </div>
          </div>
        </div>
    );
};

export default Input;