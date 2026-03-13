import { SideBarItem } from "../reusable/sideBarItem";
import { RxDashboard } from "react-icons/rx";
import { PiUserLight, PiQuestion, PiProjectorScreenChartLight, PiDevices, PiChartBar, PiBuildings, PiGear } from "react-icons/pi";

export const DashSideBar = () => {
    return(
        <div className="bg-white p-[10px] rounded-lg">
            <p className="mt-[15px] mb-[25px] font-bold text-3xl text-black text-center">
                Snaarp
            </p>
            <div className="space-y-4 mb-[115px]">
                <SideBarItem label="Dashboard" icon={<RxDashboard />} />
                <SideBarItem label="Organization & Reg" icon={<PiBuildings />} />
                <SideBarItem label="Reporting" icon={<PiUserLight />} />
                <SideBarItem label="Billing" icon={<PiUserLight />} />
                <SideBarItem label="Account" icon={<PiUserLight />} />
                <SideBarItem label="Storage" icon={<PiUserLight />} />
                <SideBarItem label="Settings" icon={<PiGear />} />
                <SideBarItem label="Device Management" icon={<PiDevices/>} />
                <SideBarItem label="Productivity Report" icon={<PiProjectorScreenChartLight />} />
            </div>
            <div className="space-y-4">
                <SideBarItem label="User Panel" icon={<PiChartBar />} />
                <SideBarItem label="Support" icon={<PiQuestion  />} />
            </div>
        </div>
    )
}