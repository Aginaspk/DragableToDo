import { useState } from "react"
import Column from "./Components/Column"
import { DndContext } from '@dnd-kit/core'

const COLUNMS = [
  { id: 'ToDo', title: 'To Do' },
  { id: 'InProgress', title: 'In Progress' },
  { id: 'Review', title: 'Review' },
  { id: 'Done', title: 'Done' }
]


const TASKS = [
  {
    id: '1',
    title: "One Piece",
    img: "https://i.pinimg.com/736x/79/03/5f/79035fa0aaae656a0a13c1fe59fcc762.jpg",
    status: "ToDo"
  },
  {
    id: '2',
    title: "Blue Lock",
    img: "https://i.pinimg.com/736x/73/71/b8/7371b8f290a457862fc5e7b407ec4cac.jpg",
    status: "Review"
  },
  {
    id: '3',
    title: "Attack on Titan",
    img: "https://i.pinimg.com/736x/00/38/72/003872d42fa1f59cd752fbe6cb1a3ae4.jpg",
    status: "Done"
  },
  {
    id: '4',
    title: "Naruto",
    img: "",
    status: "Done"
  },
  {
    id: '5',
    title: "Bleach",
    img: "",
    status: "InProgress"
  },
  {
    id: '6',
    title: "Saka Moto Days",
    img: "",
    status: "ToDo"
  },
  {
    id: '7',
    title: "Dragon Ball Z",
    img: "",
    status: "ToDo"
  },
  {
    id: '8',
    title: "Demon Slayer",
    img: "",
    status: "Review"
  },
  {
    id: '9',
    title: "Solo Leveling",
    img: "",
    status: "InProgress"
  },
  {
    id: '10',
    title: "Black Clover",
    img: "",
    status: "Review"
  },

]
function App() {

  const [tasks, setTasks] = useState(TASKS)

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    setTasks(() => tasks.map(item => item.id === taskId ? { ...item, status: newStatus } : item))

  }

  return (
    <>
      <div className="p-4 ">
        <div className="grid grid-cols-4 w-full gap-3">
          <DndContext onDragEnd={handleDragEnd}>
            {COLUNMS.map((item) => {
              return <Column key={item.id} column={item} tasks={tasks.filter(task => task.status === item.id)} />
            })}
          </DndContext>
        </div>
      </div>
    </>
  )
}

export default App
