import Link from "next/link"
import clsx from 'clsx';
import { cn } from "@/libs/utils";

type ButtonProps = {
    link: string,
    className?: string,
    value: string
}

const RootButton = ({ link, className, value }: ButtonProps) => {
    return (
        <Link href={link} className={cn("px-5 py-2 rounded-2xl bg-[#4fb9df] text-white", className)}>
            {value}
        </Link>
    )
}

export default RootButton