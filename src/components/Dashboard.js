export const Dashboard = () => {
    return <div className="bg-slate-900 h-screen text-gray-50">
        <div className="p-2 w-11/12 mx-auto flex justify-end">
            <a href="/">Sign Out</a>
        </div>
        <div className="flex flex-col items-center justify-center" style={{ height: '95%' }}>
            <div className="rounded-full bg-slate-500 p-2 pr-10 flex items-center justify-center">
                <div>
                    <img src="/Bitcoin.svg" alt='icon' className="ml-2 mr-4 w-full" />
                </div>
                <div className=" text-6xl flex flex-col items-left justify-center m-3 ml-6">
                    BTCUSD
                    <h2 className=" text-3xl ">43005.77 USD</h2>
                </div>

            </div>
            <div className="m-2 text-gray-50 text-sm">
                Last Updated: 08/02/2022, 11:45PM
            </div>
        </div>
    </div>
}