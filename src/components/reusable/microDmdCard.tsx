export interface MicroDmdCardProps {
    icon: React.ReactNode;
    label: string;
    number: number;
    text: string;
}

export const MicroDmdCard = ({icon, label, number, text}: MicroDmdCardProps) => {
    return(
        <div className="bg-white items-center text-black text-xs rounded p-[2px]">
            <div className="flex items-center space-x-1 mb-0.5">
                <span className="bg-gray-200 p-1.25 rounded-md">{icon}</span>
                <p>{label}</p>
            </div>
            <p className="font-bold">{number} {text}</p>
        </div>
    )
}