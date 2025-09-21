import type { InputHTMLAttributes } from "react"

interface IProp extends InputHTMLAttributes<HTMLInputElement>{
    className?:string
}
function Input({className, ...rest}:IProp) {
  return (
        <input className={`w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm 
                  text-gray-700 placeholder-gray-400 shadow-sm 
                  focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50  ${className}`} {...rest}></input>
  )
}

export default Input
