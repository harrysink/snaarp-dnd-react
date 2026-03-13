
import { useState } from 'react';
import { DndContext, useDroppable, type DragEndEvent } from '@dnd-kit/core';
import { arrayMove, useSortable, SortableContext, verticalListSortingStrategy, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { SectionHeader } from "../reusable/sectionHeader";
import { CnMiniCard } from "../reusable/cnMiniCard";
// import { BottomCard } from "../reusable/bottomCard";
import { SubDmdCard } from "../reusable/subDmdCard";
import { DmdMidiCard } from "../reusable/dmdMidiCard";
import { MicroDmdCard } from "../reusable/microDmdCard"
import { RiArrowDownSLine } from "react-icons/ri";
import { PiUserLight, PiProjectorScreenChartLight, PiUsersThree, PiPlugs, PiPlugsConnected, PiEnvelopeOpen,  
    PiDevices, PiGlobe, PiUsersFour, PiUpload, PiFiles, PiPower, PiDownload, PiWindowsLogoFill,
    PiEnvelope, PiArrowUpRight, PiArrowDownLeft, PiLinuxLogo, PiBuildings, PiClock,
    PiUser, PiCalendar, PiAppStoreLogo } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { BiLogoApple } from "react-icons/bi";
import { SiGooglecloudstorage } from "react-icons/si";
import { BsLightningCharge } from "react-icons/bs";

export const DashHome = () => {
    // order of the top‑level sections within the dashboard
    const [sectionOrder, setSectionOrder] = useState<string[]>([
        'search',
        'cloudGrid',
        'fileGrid',
        'deviceMgmt',
        'productivity',
    ]);


    // nested sortable orders for cards within sections
    const [cloudGridOrder, setCloudGridOrder] = useState<string[]>([
        'users',
        'groups',
        'uploads',
        'departments',
    ]);

    const [fileGridOrder, setFileGridOrder] = useState<string[]>([
        'fileSharing',
        'activeUsers',
    ]);

    const [deviceGridOrder, setDeviceGridOrder] = useState<string[]>([
        'devices-col',
        'users-col',
        'emails-col',
        'apps-downloads-col',
    ]);

    const [productivityOrder, setProductivityOrder] = useState<string[]>([
        'prod-hours',
        'prod-days',
        'prod-users',
        'prod-web',
    ]);

    const { setNodeRef: setDropRef } = useDroppable({ id: 'home-body' });

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;
        const activeId = active.id as string;
        const overId = over.id as string;

        if (sectionOrder.includes(activeId) && sectionOrder.includes(overId)) {
            setSectionOrder((items) => {
                const oldIndex = items.indexOf(activeId);
                const newIndex = items.indexOf(overId);
                return arrayMove(items, oldIndex, newIndex);
            });
        } else if (cloudGridOrder.includes(activeId) && cloudGridOrder.includes(overId)) {
            setCloudGridOrder((items) => {
                const oldIndex = items.indexOf(activeId);
                const newIndex = items.indexOf(overId);
                return arrayMove(items, oldIndex, newIndex);
            });
        } else if (fileGridOrder.includes(activeId) && fileGridOrder.includes(overId)) {
            setFileGridOrder((items) => {
                const oldIndex = items.indexOf(activeId);
                const newIndex = items.indexOf(overId);
                return arrayMove(items, oldIndex, newIndex);
            });
        } else if (deviceGridOrder.includes(activeId) && deviceGridOrder.includes(overId)) {
            setDeviceGridOrder((items) => {
                const oldIndex = items.indexOf(activeId);
                const newIndex = items.indexOf(overId);
                return arrayMove(items, oldIndex, newIndex);
            });
        } else if (productivityOrder.includes(activeId) && productivityOrder.includes(overId)) {
            setProductivityOrder((items) => {
                const oldIndex = items.indexOf(activeId);
                const newIndex = items.indexOf(overId);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    const SortableSection: React.FC<{id: string; children: React.ReactNode}> = ({ id, children }) => {
        const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
            useSortable({ id });
        const style = {
            transform: CSS.Transform.toString(transform),
            transition,
            opacity: isDragging ? 0.5 : 1,
            position: 'relative' as const,
            zIndex: isDragging ? 1000 : 'auto',
        };
        return (
            <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                {children}
            </div>
        );
    };

    // Wrapper for individual draggable cards that prevents layout shift
    const SortableCard: React.FC<{id: string; children: React.ReactNode; className?: string}> = ({
        id,
        children,
        className = '',
    }) => {
        const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
            useSortable({ id });
        const style = {
            transform: CSS.Transform.toString(transform),
            transition,
            flex: '1 0 auto',
            opacity: isDragging ? 0.5 : 1,
        };
        return (
            <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={className}>
                {children}
            </div>
        );
    };

    const sectionContent: { [key: string]: React.ReactNode } = {
        search: (
            <div className="bg-white rounded-lg pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-black font-bold">
                <input
                    type="text"
                    placeholder="Search for users, groups or settings"
                    className="text-gray-200 w-[45%] placeholder:text-gray-300 placeholder:text-xs placeholder:font-light border border-gray-300 pl-2 pr-2 pt-1 pb-1 rounded-md"
                />
            </div>
        ),
        cloudGrid: (
            <>
                <div className="flex items-center justify-between bg-white text-black font-bold rounded-lg pt-[10px] pb-[10px] pl-[20px] pr-[20px] mb-3">
                    <div className="flex items-center space-x-3">
                        <PiGlobe size={30} className="bg-gray-200 p-1.25 rounded-md" />
                        <p className="font-bold">Cloud Network</p>
                    </div>
                    <RiArrowDownSLine size={25} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-3">
                        <SortableContext items={cloudGridOrder} strategy={horizontalListSortingStrategy}>
                            <div className="grid grid-cols-2 gap-3">
                                <SortableCard id="users" className="bg-white text-black rounded-lg">
                                    <CnMiniCard id="users" label="Users" icon={<PiUserLight />} />
                                </SortableCard>
                                <SortableCard id="groups" className="bg-white text-black rounded-lg">
                                    <CnMiniCard id="groups" label="Groups" icon={<PiUsersThree />} />
                                </SortableCard>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <SortableCard id="uploads" className="bg-white text-black rounded-lg">
                                    <CnMiniCard id="uploads" label="Uploads" icon={<PiUpload />} />
                                </SortableCard>
                                <SortableCard id="departments" className="bg-white text-black rounded-lg">
                                    <CnMiniCard id="departments" label="Departments" icon={<PiUsersFour />} />
                                </SortableCard>
                            </div>
                        </SortableContext>
                    </div>
                    <div className="storage bg-white text-black rounded-lg pt-[10px] pb-[10px] pl-[20px] pr-[20px] relative">
                        <div className="flex items-center space-x-3">
                            <SiGooglecloudstorage
                                size={25}
                                className="bg-gray-200 p-1.25 rounded-md"
                            />
                            <p className="text-[14.5px]">Storage</p>
                        </div>
                        <button className="upgrade-plan absolute bottom-[10px] right-[10px] flex items-center space-x-2 bg-white border border-blue-500 pt-2 pb-2 pl-4 pr-4 rounded-lg">
                            <BsLightningCharge className="text-blue-500" />
                            <p className="text-blue-500 text-sm">Upgrade Plan</p>
                        </button>
                    </div>
                </div>
            </>
        ),
        fileGrid: (
            <SortableContext items={fileGridOrder} strategy={horizontalListSortingStrategy}>
                <div className="grid grid-cols-2 gap-3">
                    <SortableCard id="fileSharing" className="bg-white text-black rounded-lg pt-[10px] pb-[10px] pl-[20px] pr-[20px]">
                        <div className="flex text-black items-center space-x-3">
                            <PiFiles
                                size={30}
                                className="bg-gray-200 p-1.25 rounded-md"
                            />
                            <p className="text-[14.5px] font-bold">File Sharing</p>
                        </div>
                    </SortableCard>
                    <SortableCard id="activeUsers" className="bg-white text-black rounded-lg pt-[10px] pb-[10px] pl-[10px] pr-[10px]">
                        <div className="flex text-black items-center space-x-3">
                            <PiUserLight
                                size={30}
                                className="bg-gray-200 p-1.25 rounded-md"
                            />
                            <p className="text-[14.5px] font-bold">Active Users</p>
                        </div>
                    </SortableCard>
                </div>
            </SortableContext>
        ),
        deviceMgmt: (
            <>
                <SectionHeader
                    title="Device Management Dashboard"
                    icon={<PiDevices size={20} />}
                />
                <SortableContext items={deviceGridOrder} strategy={horizontalListSortingStrategy}>
                <div className="grid grid-cols-4 gap-3">
                    <SortableCard id="devices-col" className="space-y-3">
                        <DmdMidiCard 
                            id="no-devices"
                            label1="Number Of Devices" 
                            label2="Plugged" 
                            label3="Unplugged" 
                            icon1={<PiDevices size={20} />} 
                            icon2={<PiPlugs size={20} />} 
                            icon3={<PiPlugsConnected size={20} />} 
                            num1={1923} 
                            num2={1913}
                            num3={10}
                        />
                        <SubDmdCard id="devices-os">
                            <div className="flex items-center justify-between space-x-1">
                                <MicroDmdCard icon={<PiWindowsLogoFill className="text-blue-500" />} label="Windows" number={1403} text="devices" />
                                <MicroDmdCard icon={<BiLogoApple />} label="Mac" number={632} text="devices" />
                                <MicroDmdCard icon={<PiLinuxLogo />} label="Linux" number={1801} text="devices" />
                            </div>
                        </SubDmdCard>
                    </SortableCard>
                    <SortableCard id="users-col" className="space-y-3">
                        <DmdMidiCard 
                            id="users-status"
                            label1="Users" 
                            label2="Active" 
                            label3="Offline" 
                            icon1={<PiUserLight size={20} />} 
                            icon2={<PiPower size={20} className="text-green-500" />} 
                            icon3={<PiPower size={20} className="text-red-500" />} 
                            num1={592} 
                            num2={3836}
                            num3={756}
                        />
                        <SubDmdCard id="users-orgs">
                            <div className="flex items-center justify-between space-x-1">
                                <MicroDmdCard icon={<PiBuildings />} label="Orgs." number={1403} text="users" />
                                <MicroDmdCard icon={<PiUsersFour />} label="Depts." number={632} text="users" />
                                <MicroDmdCard icon={<PiUsersThree />} label="Groups" number={1801} text="users" />
                            </div>
                        </SubDmdCard>
                    </SortableCard>
                    <SortableCard id="emails-col" className="space-y-3">
                        <DmdMidiCard 
                            id="email-status"
                            label1="Emails" 
                            label2="Sent" 
                            label3="Received" 
                            icon1={<MdOutlineMail size={20} />} 
                            icon2={<PiArrowUpRight size={20} />} 
                            icon3={<PiArrowDownLeft size={20} />} 
                            num1={592} 
                            num2={3836}
                            num3={4428}
                        />
                        <SubDmdCard id="emails-status">
                            <div className="flex items-center justify-between space-x-1">
                                <MicroDmdCard icon={<PiEnvelopeOpen />} label="Read" number={1403} text="emails" />
                                <MicroDmdCard icon={<PiEnvelope />} label="Unread" number={632} text="emails" />
                            </div>
                        </SubDmdCard>
                    </SortableCard>
                    <SortableCard id="apps-downloads-col" className="space-y-3">
                        <div className="flex-1 mb-3">
                            <CnMiniCard id="app-no" label="Number of Apps" icon={<PiAppStoreLogo />} />
                        </div>
                        <div className="flex-1">
                            <CnMiniCard id="downloads-no" label="Number of Downloads" icon={<PiDownload />} />
                        </div>
                    </SortableCard>
                </div>
                </SortableContext>
            </>
        ),
        productivity: (
            <>
                <SectionHeader
                    title="Productivity Report"
                    icon={<PiProjectorScreenChartLight size={20} />}
                />
                <SortableContext items={productivityOrder} strategy={horizontalListSortingStrategy}>
                    <div className="grid grid-cols-4 space-x-3 mb-3">
                        <SortableCard id="prod-hours" className="bg-white text-black rounded-lg">
                            <CnMiniCard id="prod-hours" label="Hours Of Productivity" icon={<PiClock />} />
                        </SortableCard>
                        <SortableCard id="prod-days" className="bg-white text-black rounded-lg">
                            <CnMiniCard id="prod-days" label="Days Of Activity" icon={<PiCalendar />} />
                        </SortableCard>
                        <SortableCard id="prod-users" className="bg-white text-black rounded-lg">
                            <CnMiniCard id="prod-users" label="Users" icon={<PiUser />} />
                        </SortableCard>
                        <SortableCard id="prod-web" className="bg-white text-black rounded-lg">
                            <CnMiniCard id="prod-web" label="Web Activity" icon={<PiGlobe />} />
                        </SortableCard>
                    </div>
                </SortableContext>
                <div className="grid grid-cols-[28%_72%] space-x-3 mb-3">
                    {/* Email Chart */}
                    <div className="flex items-center justify-between bg-white text-black font-bold rounded-lg pt-[10px] pb-[10px] pl-[20px] pr-[20px]">
                        <div className="flex items-center space-x-3">
                            <MdOutlineMail size={30} className="bg-gray-200 p-1.25 rounded-md" />
                            <p className="font-bold">Email Chart</p>
                        </div>
                    </div>

                    {/* Total Email */}
                    <div className="flex items-center justify-between bg-white text-black font-bold rounded-lg pt-[10px] pb-[10px] pl-[20px] pr-[20px]">
                        <div className="flex items-center space-x-3">
                            <MdOutlineMail size={30} className="bg-gray-200 p-1.25 rounded-md" />
                            <p className="font-bold">Total Email</p>
                        </div>
                    </div>
                </div>

                {/* Online Users */}
                <div className="flex items-center justify-between mb-3 bg-white text-black font-bold rounded-lg pt-[10px] pb-[10px] pl-[20px] pr-[20px]">
                    <div className="flex items-center space-x-3">
                        <PiUserLight size={30} className="bg-gray-200 p-1.25 rounded-md" />
                        <p className="font-bold">Online Users</p>
                    </div>
                </div>
                <div className="text-black grid grid-cols-[60%_40%] gap-3 pr-[10px]">
                    {/* App Activity Report */}
                    <div className="bg-white flex items-center space-x-3 pb-[10px] pl-[20px] pr-[20px] pt-[10px] rounded-lg">
                        <MdOutlineMail size={30} className="bg-gray-200 p-1.25 rounded-md" />
                        <p className="font-bold">App Activity Report</p>
                    </div>
                    {/* Web Activiy */}
                    <div className="bg-white flex items-center space-x-3 pb-[10px] pl-[20px] pr-[20px] pt-[10px] rounded-lg">
                        <PiGlobe size={30} className="bg-gray-200 p-1.25 rounded-md" />
                        <p className="font-bold">Web Activiy</p>
                    </div>
                </div>
            </>
        ),
    };


    return(
        <DndContext onDragEnd={handleDragEnd}>
            <div ref={setDropRef} className="bg-gray-200 rounded-lg space-y-3">
                <SortableContext items={sectionOrder} strategy={verticalListSortingStrategy}>
                    {sectionOrder.map((id) => (
                        <SortableSection key={id} id={id}>
                            {sectionContent[id]}
                        </SortableSection>
                    ))}
                </SortableContext>
            </div>
        </DndContext>
    )
}