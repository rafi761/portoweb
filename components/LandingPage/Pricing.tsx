import CardPricing from "./CardPricing"

const Pricing = () => {
    return (
        <section className="w-full h-screen flex flex-col gap-y-10 max-sm:h-auto">
            <div className="flex flex-col gap-y-4 items-center">
                <h1 className="text-3xl text-[#1e0a42] font-semibold max-sm:text-center max-sm:px-4">Buat Website Menarik Anda !</h1>
                <p className="text-base text-gray-500 max-sm:text-center">Pilih Paket Tersedia yang Menarik untuk Anda</p>
            </div>

            <div className="grid grid-cols-3 gap-y-8 w-[992px] mx-auto max-sm:grid-cols-1 max-sm:w-full max-sm:justify-items-center max-sm:px-3">
                <CardPricing />
                <CardPricing />
                <CardPricing />
            </div>
        </section>
    )
}

export default Pricing