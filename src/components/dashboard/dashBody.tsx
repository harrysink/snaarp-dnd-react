import { DashSideBar } from "./dashSideBar"
import { DashHome } from "./dashHome"

export const DashBody = () => {
    return(
        <div className="w-full h-screen flex bg-gray-200">
            <div className="w-[16%] fixed h-screen overflow-y-auto pl-[10px] pt-[10px] pb-[10px] pr-[10px]">
                <DashSideBar />
            </div>
            <div className="w-[16%]"></div>
            <div className="flex-1 overflow-y-auto pt-[10px] pb-[10px] pr-[10px] pl-[10px]">
                <DashHome />
            </div>
        </div>
    )
}