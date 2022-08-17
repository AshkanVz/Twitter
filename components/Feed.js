import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

const Feed = () => {
  const posts= [
    {
      id: "1",
      name: "ashkan valizadeh",
      username: "ashkan_vz",
      userImg:"/images/ashkan.jpg",
      img:"https://cdn.motor1.com/images/mgl/3W1OBp/s1/2022-mercedes-amg-gt-63-63-s-4-door-coupe.jpg",
      text:"nice car",
      timestamp:"2 hours ago"
    },

    {
      id: "2",
      name: "ashkan valizadeh",
      username: "ashkan_vz",
      userImg:"/images/ashkan.jpg",
      img:"https://cdn.motor1.com/images/mgl/3W1OBp/s1/2022-mercedes-amg-gt-63-63-s-4-door-coupe.jpg",
      text:"nice car",
      timestamp:"2 hours ago"
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-300 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-slate-50 border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer text-gray-700 tracking-wider">
          Home
        </h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5 " />
        </div>
      </div>
      <Input/>
      {
        posts.map((post) => {
          return (
            <Post id={post.id} post={post}/>
          )
        }
        )
      }
    </div>
  );
};

export default Feed;
