import React from "react";


function Two({smbg,bg,pos,zindex,centertext,belowtext}) {
  return (
    <div className={`sm:h-screen top-0 ${pos} ${zindex} h-[80vh] bg-center w-screen bg-cover sm:bg-[length:100vw_100vh] bg-no-repeat ${bg} ${smbg} flex-col flex justify-center items-center `}>
      <div className="text-white font-bold sm:text-6xl -mt-8 text-5xl md:max-w-[40vw] max-w-[80vw] flex flex-col justify-center items-center m-4">
        <p className="text-center">
        {centertext}</p>
      </div>
      <div className="text-gray-200 text-lg md:max-w-[40vw] max-w-[80vw] flex flex-col justify-center items-center m-4">
        <p className="text-center">{belowtext}</p>
      </div>
    </div>
  );
}

export default Two;
