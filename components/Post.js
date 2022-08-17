import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline";

const Post = ({post}) => {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-200 ">
      {/*user image */}
      <img src={post.userImg} alt="" className="h-10 w-10 rounded-full mr-4" />
      {/*right side */}
      <div className="flex-col items-center">
        {/*header*/}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1 whitespace-nowrap">{/*post user info */}
          <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline tracking-wide">{post.name}</h4>
          <span className="text-sm sm:text-[15px] text-slate-700 ">@{post.username} - </span>
          <span className="text-sm sm:text-[15px] hover:underline text-slate-700">{post.timestamp}</span>
          </div>
          {/*douts */}
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2"/>
        </div>
        {/*post text */}
<p className="text-gray-800 text-[15px] sm:text-[16px] mb-2 ">{post.text}</p>
        {/*post image */}
<img src={post.img}  alt="" className="rounded-2xl mr-2 shadow-md" />
        {/*post interaction icons */}

        <div className="flex justify-between text-gray-500 p-2 ">
            <ChatIcon className="w-8 h-8 cursor-pointer hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100 shadow-xl"/>
            <TrashIcon className="w-8 h-8 cursor-pointer hoverEffect p-2 hover:text-rose-500 hover:bg-rose-100 shadow-xl"/>
            <HeartIcon className="w-8 h-8 cursor-pointer hoverEffect p-2 hover:text-rose-500 hover:bg-rose-100 shadow-xl"/>
            <ShareIcon className="w-8 h-8 cursor-pointer hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100 shadow-xl"/>
            <ChartBarIcon className="w-8 h-8 cursor-pointer hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100 shadow-xl"/>
        </div>
      </div>
    </div>
  );
};

export default Post;
