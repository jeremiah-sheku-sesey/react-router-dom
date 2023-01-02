import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function NotFound(){
    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        }, 5000)
    },[])
    return <h1>NotFound</h1>
}