import Image from "next/image"
import Link from "next/link"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

type CardProps = {
    image?: string,
    title?: string,
    desc?: string
}

const CardPricing = ({ image, title, desc }: CardProps) => {
    return (
        <div className="flex flex-col gap-y-8 px-2 py-4 w-80 h-[576px] bg-white rounded-3xl border max-sm:w-full">
            <div className="flex flex-col gap-y-5">
                <h2 className="text-[#1e0a42] text-2xl font-semibold">Basic</h2>
                <h1 className="text-5xl">$29</h1>
                <p className="text-gray-500 text-base">Bagus untuk perusahaan dengan skala kecil</p>
            </div>
            <Link href="" className="w-full py-4 text-center text-white rounded-lg bg-[#4fb9df]">Get Started</Link>
            <div className="flex flex-col gap-y-3">
                <div className="flex items-center gap-x-5">
                    <CheckIcon className="text-green-500" />
                    <p className="text-gray-500 text-base">Unlimited Support</p>
                </div>
                <div className="flex items-center gap-x-5">
                    <CheckIcon className="text-green-500" />
                    <p className="text-gray-500 text-base">10GB Server Space</p>
                </div>
                <div className="flex items-center gap-x-5">
                    <CheckIcon className="text-green-500" />
                    <p className="text-gray-500 text-base">Email Integration</p>
                </div>
                <div className="flex items-center gap-x-5">
                    <CloseIcon className="text-red-500" />
                    <p className="text-gray-500 text-base">Unlimited Download</p>
                </div>
                <div className="flex items-center gap-x-5">
                    <CloseIcon className="text-red-500" />
                    <p className="text-gray-500 text-base">User & Mobile Friendly</p>
                </div>
            </div>
        </div>
    )
}

export default CardPricing