import { RiArrowDownSLine } from "react-icons/ri";
import { BsLightningCharge } from "react-icons/bs";

export const SectionHeader = ({title, icon}: {title: string; icon: React.ReactNode}) => {
    return (
        <div className="section-header mb-3 text-black flex items-center justify-between bg-white rounded-lg pt-[10px] pb-[10px] pl-[20px] pr-[20px]">
            <div className="flex items-center space-x-3">
                <span className="bg-gray-200 p-1.25 rounded-md">{icon}</span>
                <p className="font-bold">{title}</p>
            </div>
            <button className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-blue-500 pt-2 pb-2 pl-4 pr-4 rounded-lg">
                    <BsLightningCharge className="text-white" />
                    <p className="text-white text-sm">Upgrade Plan</p>
                </div>
                <RiArrowDownSLine size={25} />
            </button>
        </div>
    )

}