import { useDraggable } from '@dnd-kit/core';

interface SubDmdCardProps {
    id: string;
    children: React.ReactNode;
}

export const SubDmdCard = ({ id, children }: SubDmdCardProps) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id,
    });

    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          }
        : undefined;

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
