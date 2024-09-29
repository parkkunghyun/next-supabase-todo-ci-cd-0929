"use client"

import { useEffect, useState } from "react";
import Todo from "./components/todo";
import { IconButton } from "@material-tailwind/react";
import { Button, Input} from "@material-tailwind/react";
import { supabase } from "./supabaseClient";
import { todo } from "node:test";

 

interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

export default function UI() {
    const [todos, setTodos] = useState<TodoItem[]>([])
    const [title, setTitle] = useState("")
    const [search, setSearch] = useState("")

    const fetchTodos = async () => {
        const { data, error } = await supabase.from("todos").select("*").order('id', { ascending: true });
        if (error) {
            console.error("Error fetching todo", error)
        }
        setTodos(data)
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    const isDeleted = async (id: number) => {
        const { data, error } = await supabase.from("todos").delete().match({id})
        if (error) {
            console.error("Error delete todo", error)
        }
        fetchTodos()
    }

    const isAdd = async () => {
        if (title !== "") {
            const { data, error } = await supabase.from("todos")
                .insert([{ title: title }])
            
            if (error) {
                console.error("Error adding todo", error)
            } else {
                fetchTodos()
                setTitle("")
            }
        }
    }

    const isToggle = async (id) => {
        const todoToggle = todos.find(todo => todo.id === id)
        if (todoToggle) {
            const { error } = await supabase.from("todos")
                .update({ completed: !todoToggle.completed }).match({ id })
            
            if (error) {
                console.error("Error toggle todo", error)
            }
            fetchTodos()
        }
    }

    const filteredTodos = search === "" ? todos : todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
    
    return (
        <div className="w-full border border-b-gray-400 p-4 rounded-xl">
            <h2 className="text-3xl text-center border-b border-black p-4 font-bold mb-8">TODO LIST</h2>
            <div className="w-full flex justify-between p-4">
                <input placeholder="검색을 해주세요" value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 mr-4 pl-4" />
                <IconButton className="text-xl w-32 h-32" placeholder={undefined}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><i className="fas fa-search"></i></IconButton>
            </div>
            
            {
                filteredTodos.length > 0 ? (
                    filteredTodos.map(todo => (
                        <Todo key={todo.id} todo={todo}  isDeleted={isDeleted} isToggle={isToggle}  ></Todo>
                    ))
                ) : (<div className="text-center text-gray-500">일치하는 할 일이 없습니다.</div>)
            }

            <div className="w-full flex justify-between p-4 border-black rounded-xl border-4 mt-24 mb-8 ">
                <input placeholder="할일을 추가 해주세요" value={title} onChange={(e) => setTitle(e.target.value)} className="flex-1 mr-4 pl-4" />
                
            </div>
            <Button onClick={() => isAdd()} className="mx-auto flex justify-center items-center p-4 gap-2"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <i className="fas fa-add text-xl mr-2"></i>
                <div className="text-xl">ADD</div>
            </Button>
        </div>
    )
}