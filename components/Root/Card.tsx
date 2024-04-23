import Image from 'next/image'
import React from 'react'

type CardProps = {
    image: string,
    title: string,
    desc: string
}

const Card = ({ image, title, desc }: CardProps) => {
    return (
        <div className="flex flex-col justify-between px-2 py-4 w-80 h-[390px] bg-white rounded-3xl border">
            <div className="flex justify-center h-[160px]">
                <Image
                    src={`/images/${image}`}
                    alt="Menu"
                    width={180}
                    height={180}
                    className="object-contain"
                />
            </div>

            <h3 className="text-base text-[#1e0a42] text-center font-semibold italic">{title}</h3>
            <p className="text-sm text-[#1e0a42] text-center ">{desc}</p>
        </div>
    )
}

export default Card