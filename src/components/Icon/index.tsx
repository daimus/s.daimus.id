import 'boxicons/css/boxicons.min.css'
import {cn} from "@/utils";

interface IconProps {
    icon: string,
    className?: string,
    type?: string
}

const Icon = ({icon, className, type}: IconProps) => {
    let typeClass = "bx"
    switch (type){
        case "solid":
            typeClass = "bxs"
            break
        case "logo":
            typeClass = "bxl"
            break
        case "regular":
        default:
            typeClass = "bx"
            break
    }
    return (
        <>
            <i className={cn("bx text-xl text-black dark:text-white", `${typeClass}-${icon}`, className)}/>
        </>
    )
}

export default Icon