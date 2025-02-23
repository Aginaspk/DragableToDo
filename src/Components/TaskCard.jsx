import { useDraggable } from '@dnd-kit/core'
import React from 'react'

function TaskCard({ task }) {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id
    })

    const style = transform ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
    } : undefined;
    return (
        <>
            <div ref={setNodeRef} {...listeners} {...attributes} style={style} className='bg-white my-1 border-l-[3px] border-blue-500'>
                <div>
                    {task.img && <img src={task.img} alt="img" />}
                </div>
                <h1 className='py-3 px-2'>{task.title}</h1>
            </div>
        </>
    )
}

export default TaskCard