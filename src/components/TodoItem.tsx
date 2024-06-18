import React, { FC, useState } from 'react'
import { IList } from '../types';
import { FiEdit, FiTrash } from 'react-icons/fi';

interface TodoItemProps {
  item: IList;
}

const TodoItem: FC<TodoItemProps> = ({ item }) => {
  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState(item.text);
  return (
    <li className='flex items-center justify-between min-w-full p-5 my-3 text-2xl duration-300 ease-in border-2 rounded-md shadow-sm hover:scale-105'>
      <div className="flex items-center w-10/12">
        <input 
            type="checkbox" 
            className='hover:scale-105 hover:cursor-pointer' 
            checked={item.checked} />
        <input 
            type="text" 
            disabled={!edit} 
            // onChange={(e) => setTask(e.target.value)} 
            value={task} 
            className={`overflow-hidden resize-none outline-none h-[25px] text-xl w-full mx-5 px-3 disabled:bg-transparent focus:border-b-[1px] ${item.checked && "line-through"} text-stone-500`}  />
      </div>
      <div className='flex justify-between w-1/6'>
        <FiEdit className='hover:scale-105 hover:cursor-pointer' />
        <FiTrash className='hover:scale-105 hover:cursor-pointer' />
      </div>
    </li>
  )
}

export default TodoItem