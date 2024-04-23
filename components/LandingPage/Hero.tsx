import Image from "next/image"
import { Montserrat } from "next/font/google"
import RootButton from '@/components/Root/RootButton';

const bebas = Montserrat({ subsets: ["latin"] });

const Hero = () => {
    return (
        <section className="w-full flex flex-row max-sm:flex-col max-sm:gap-y-7">
            <div className="flex-1 flex flex-col gap-y-2 justify-center max-sm:order-2">
                <h1 className={`${bebas.className} text-5xl text-[#1e0a42] leading-tight font-medium px-20 max-sm:px-4 max-sm:text-3xl`}>Berkembang Bersama Kami: Solusi Website Profesional Untuk Bisnis Anda</h1>
                <p className="px-20 max-sm:px-4">Kami adalah tim muda dengan semangat besar untuk menciptakan website unik dan efektif untuk memajukan bisnis Anda. Dengan kreativitas dan keahlian teknis kami, kami siap membantu Anda menghadirkan identitas digital yang mengesankan.</p>
                <RootButton className="mx-20 px-10 w-fit max-sm:mx-4" link="" value="Pesan" />
            </div>

            <div className="flex-1 -mr-3 -mt-2 max-sm:order-1">
                <Image
                    src="/images/hero.png"
                    alt="Hero Image"
                    width={950}
                    height={950}
                    className="object-contain"
                />
            </div>
        </section>
    )
}

export default Hero