import { useEffect, useState } from "react"

export function useDebounce <T>(
    initalValue: T,
    timer:number
):[T, T,React.Dispatch<T>]{
    const [value, setValue] = useState<T>(initalValue) // Save value current
    const [debounceValue, setDebounceValue] = useState<T>(initalValue)

    useEffect(()=>{
        const debounce = setTimeout(()=>{
            setDebounceValue(value); // Set value current depen on value
        },timer)
        return ()=>{
            clearTimeout(debounce)
        }
    },[value,timer])
    return [debounceValue, value,setValue]
}