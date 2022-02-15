import React from 'react';


function Current(props) {
    const {currPrice, currTime, currDate} = props;
  return (
    <>
            <div className="rounded-full bg-slate-500 p-2 pr-10 flex items-center justify-center">
                <div>
                    <img src="/Bitcoin.svg" alt='icon' className="ml-2 mr-4 w-full" />
                </div>
                <div className=" text-4xl md:text-5xl flex flex-col items-left justify-center m-2 ml-6">
                    BTCUSD
                    <h2 className=" text-xl md:text-2xl ">{currPrice} USD</h2>
                </div>
            </div>
            <div className="m-2 text-gray-50 text-sm">
                Last Updated: {currDate}, {currTime}
            </div>
    </>
  )
}

export default Current