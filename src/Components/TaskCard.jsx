import {Plus} from 'lucide-react'
import { useDraggable } from '@dnd-kit/core';
import React, { useContext, useEffect, useState } from 'react';
import { PlatformContext } from '../context/PlatformContext';

const PLATFORMS = [
    {
        id: '1',
        name: 'NetFlix',
        img: "https://i.pinimg.com/736x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg"
    },
    {
        id: '2',
        name: 'Crunchyroll',
        img: "https://i.pinimg.com/736x/89/fc/de/89fcdebedfdcf2bf3a00a49d75833c3a.jpg"
    },
    {
        id: '3',
        name: 'Prime Video',
        img: "https://i.pinimg.com/736x/3c/07/85/3c07856025991b924ec6cbd741e88811.jpg"
    },
    {
        id: '4',
        name: 'Youtube',
        img: "https://i.pinimg.com/736x/9f/fc/17/9ffc17d8234d69587aea04dff27e9abc.jpg"
    },
];

function TaskCard({ task }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { platforms, updatePlatform } = useContext(PlatformContext);

    const selectedPlatform = platforms[task.id];


    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id
    });

    const style = transform ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
    } : undefined;

    return (
        <div ref={setNodeRef} {...listeners} {...attributes} style={style} className='bg-white my-1 border-l-[3px] border-blue-500'>
            <div>
                {task.img && <img src={task.img} alt="img" />}
            </div>
            <div className='flex justify-between py-3 px-2 relative'>
                <h1 className=''>{task.title}</h1>

                <div
                    className='w-7 h-7 overflow-hidden rounded-full cursor-pointer flex items-center justify-center bg-gray-400'
                    onPointerDownCapture={(e) => {
                        e.stopPropagation();
                        setIsMenuOpen((prev) => !prev);
                    }}
                >
                    {selectedPlatform?.img ? <img src={selectedPlatform.img} alt="" /> : <div><Plus className='text-gray-500 font-bold'/></div>}
                </div>

                {isMenuOpen && (
                    <div className={`h-[110px] grid absolute right-10 bg-white shadow-md p-2 rounded-md z-50`}
                        onPointerDownCapture={(e) => {
                            e.stopPropagation();
                        }}>
                        {PLATFORMS.map((item) => (
                            <div
                                key={item.id}
                                className='h-[25px] flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded'
                                onClick={() => {
                                    updatePlatform(task.id,item);
                                    setIsMenuOpen(false);
                                }}
                            >
                                <img src={item.img} alt="" className='h-full' />
                                <p className='text-[10px]'>{item.name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TaskCard;
