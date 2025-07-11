import {useState} from "react"

export default function useToggle(initiValue=false){
    const [value,setValue]=useState(initialValue);
    const toggle=()=>setValue((prev)=>!prev)
}