import {useDraggable} from '@dnd-kit/core';
interface DmdMidiCardProps {
    id: string;
    label1: string;
    label2: string;
    label3: string;
    num1: number;
    num2: number;
    num3: number;
    icon1: React.ReactNode;
    icon2: React.ReactNode;
    icon3: React.ReactNode;
}

export const DmdMidiCard = ({id, label1, label2, label3, icon1, icon2, icon3, num1, num2, num3}: DmdMidiCardProps) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id,
    });

    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          }
        : undefined;

    return(
        <div 
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="bg-white text-black rounded-lg pt-[10px] pb-[10px] pl-[20px] pr-[20px]"
        >
            <div className="flex items-center space-x-3 mb-3">
                <span className="bg-gray-200 p-1.25 rounded-md">{icon1}</span>
                <p className="text-[14.5px]">{label1}</p>
            </div>
            <p className="font-bold mb-3">316</p>
            <p className="text-xs mb-3">Compared to last week</p>
            <hr className="text-gray-300 mb-3" />
            <div className="grid grid-cols-2 mb-3">
                <div className="flex items-center space-x-3">
                    <span className="bg-gray-200 p-1.25 rounded-md">{icon2}</span>
                    <p className="text-[14.5px]">{label2}</p>
                </div>
                <div className="flex items-center space-x-3">
                    <span className="bg-gray-200 p-1.25 rounded-md">{icon3}</span>
                    <p className="text-[14.5px]">{label3}</p>
                </div>
            </div>
            <div className="grid grid-cols-3 font-bold">
                <p>{num1}</p>
                <p>{num2}</p>
                <p>{num3}</p>
            </div>
        </div>
    )
}