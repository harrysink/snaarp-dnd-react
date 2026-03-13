# snaarp-dnd-react
This repository contains code files pertaining to the Snaarp Frontend Developer assessment

# How to use
The dashboard, according to the instructions for the assessment, features a drag-n-drop feature that enables users rearrange sections of the dashboard vertically, in any order they wish. However, the order of arrangemet will be reverted to the original upon page refresh or browser reload, because the change event handling the rearrangement is only temmporarily stored in state. 
To rearrange (sort) a section, simpy click and hold the section header and drag to any position of your choice vertically (up or down) within the dashboard.
Individual cards within the sections were left as just draggable but not droppable due to differences in width and size.

# Tools used
- Framework: React version 19.2.0 (latest at the time of project development).
- Drag-n-drop feature: Dnd-kit, for its easier implementation, being a better balance over react-beautiful-dnd and react-dnd.
- State management: React useState hook, because the state management requirement for this app was minimal, and so eliminated the need to use more app-wide and complex options like Context api or Redux.
- Styling: Tailwind CSS, for easy inline-styling and manipulation of CSS sytax.
- Version control: Github

# Challenges faced
- I had some difficulty making the list sorting/reordering strategy for the section vertical. This was my first time using Dnd-kit for drag-and-drop and so I was new to some of the syntax. I found through their documentation that I had to manually import it.
- I had some difficulty with making sure the height of the draggable component (section) was maintained while it was been dragged. I was ble to sort it out for most of the sections, but it persisted on the search bar section. I suspect it was a styling issue within the style object of the SortableSection variable. Given more time, I would most likely check the structuring of the search bar section component itself in comparison with that of the other sections I was able to fix, and determine whether it was a styling conflict that was causing the issue. On further inspection, I discovered that everytime a component was dragged from its original position and over the position of another element, it would temporily before being dropped, strech to fit the height of and space occupied by that other element it is about to displace, and then, upon dropping, will reduce to its original size and have the the new space it is about to occupy expand or compress to fit it, depending on whether its original size is larger or smaller than the space.
