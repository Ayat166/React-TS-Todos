interface IProp {
    message?: string;
}

const InputErrorMessage=({ message }:IProp) => {
    return (
        <span className="text-red-500 text-sm">{message}</span>
    )
}

export default InputErrorMessage
