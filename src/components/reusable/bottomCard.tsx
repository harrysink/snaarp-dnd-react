import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface BottomCardProps {
    id: string;
    children: React.ReactNode;
}

export const BottomCard = ({ id, children }: BottomCardProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            className="bottom-card bg-white flex items-center text-black rounded-lg pt-[10px] pb-[10px] pl-[20px] pr-[20px]"
        >
            {children}
        </div>
    );
};
