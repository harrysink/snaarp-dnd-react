interface CnMiniCardProps {
    id: string;
    label: string;
    icon: React.ReactNode;
}

export const CnMiniCard = ({ id, label, icon }: CnMiniCardProps) => {
    return (
        <div id={id} className="bg-white items-center text-black rounded-lg pt-[10px] pb-[10px] pl-[20px] pr-[20px] h-full">
            <div className="flex items-center space-x-3 mb-3">
                <span className="bg-gray-200 p-1.25 rounded-md">{icon}</span>
                <p className="text-[14.5px]">{label}</p>
            </div>
            <p className="font-bold mb-3">316</p>
            <p className="text-xs">Compared to last week</p>
        </div>
    );
};