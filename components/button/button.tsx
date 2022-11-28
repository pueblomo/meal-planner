import React, { ReactNode } from "react";


interface buttonProps {
    type?: "button" | "submit" | "reset" | undefined,
    children: React.ReactNode
}


const Button = ({type = "button", children}: buttonProps) => {
    return (
        <button className="pr-1 pl-1 m-1 text-gray-200 rounded-md border border-gray-600 bg-slate-600" type={type}>{children}</button>
    )
}

export default Button