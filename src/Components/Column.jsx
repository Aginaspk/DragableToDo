import React from 'react'
import TaskCard from './TaskCard'
import { useDroppable } from '@dnd-kit/core'

function Column({ column, tasks }) {

    const { setNodeRef } = useDroppable({
        id: column.id
    })
    return (
        <div className=''>
            <div className='h-10 bg-white px-2 flex items-center rounded-md my-2'>
                <h1 className='font-medium'>{column.title}</h1>
            </div>
            <div ref={setNodeRef} className='h-screen'>
                {tasks.map(item => {
                    return <TaskCard key={item.id} task={item} />
                })}
            </div>
        </div>
    )
}

export default Column