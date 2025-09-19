import type { TextareaHTMLAttributes } from "react"

interface IProp extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    ClassName?:string,
}
function Textarea({ClassName,...rest}:IProp) {
  return (
    <textarea className={`w-full rounded-lg border border-gray-300      bg-white px-3 py-2 text-sm 
                  text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 
                  focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${ClassName}`} {...rest}/>
  )
}

export default Textarea
