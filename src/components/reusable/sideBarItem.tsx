export const SideBarItem = ({label, icon}: {label: string; icon: React.ReactNode}) => {
    return(
        <div className="flex cursor-pointer text-gray-500 items-center space-x-2 text-xs p-2 hover:text-blue-600 hover:bg-blue-100 hover:font-bold transition-all duration-150 rounded-lg">
            <span>{icon}</span>
            <p>{label}</p>
        </div>
    )
}