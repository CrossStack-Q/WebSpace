import React from "react";


function One({smbg,bg,pos,zindex}) {
  return (
    <div className={`h-screen w-screen ${pos} ${zindex} top-0 bg-[length:100vw_100vh] bg-no-repeat ${bg} ${smbg} flex-col flex justify-center items-center `}>
      <button className="rounded-full border-2 p-2 px-4 m-4 text-white bg-gray-400 bg-opacity-10 hover:bg-opacity-20 ">Our $10M Raise <span>{"->"}</span> </button>
      <div className="text-6xl font-bold text-white">Dare to dream.</div>
      <div className="text-6xl font-bold text-white">Dare to build.</div>
      <div className="text-gray-200 text-lg md:max-w-[40vw] max-w-[80vw] flex flex-col justify-center items-center m-4">
        <p className="text-center">
          We're building a new path for the world's best builders to come
          together,explore promising domains and ship meaningful products</p>
      </div>
      <button className="rounded-full m-4 p-1 border-2 px-4 border-white bg-white bg-opacity-20 text-lg text-white hover:bg-opacity-40">Explore</button>
    </div>
  );
}

export default One;


