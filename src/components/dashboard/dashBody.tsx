import { DashSideBar } from "./dashSideBar"
import { DashHome } from "./dashHome"

export const DashBody = () => {
    return(
        <div className="w-full pl-[10px] pt-[10px] pb-[10px] pr-[20px] grid grid-cols-[14%_86%] bg-gray-200 gap-3">
            <DashSideBar />
            <DashHome />
        </div>
    )
}