import { IconButton } from "@material-tailwind/react";
 
interface TodoProps {
    todo: {
        id: number,
        title: string,
        completed : boolean
    },
    isDeleted: (id: number) => void;
    isToggle: (id: number) => void;
}

export default function Todo({todo, isDeleted, isToggle} : TodoProps) {
    return (
        <div className="w-full flex items-center gap-2 mb-4 p-4 border-b border-gray-400">
            <input onChange={() => isToggle(todo.id)} className="w-4 h-4" type="checkbox"  />
            {todo.completed ? (<p className="flex-1 text-xl text-gray-700 line-through">{ todo.title}</p>)  : (<p className="flex-1 text-xl ">{ todo.title}</p>)}
            {/* <IconButton  className="text-xl w-32 h-32"><i className="fas fa-edit"></i></IconButton> */}
            <IconButton className="text-xl w-32 h-32" onClick={() => isDeleted(todo.id)} title="Delete" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><i className="fas fa-trash"></i></IconButton>
        </div>
    )
}