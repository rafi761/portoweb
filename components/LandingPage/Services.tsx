import Card from "../Root/Card"

const Services = () => {
    return (
        <section className="w-full min-h-screen flex flex-col gap-y-12 py-20 items-center">
            <h2 className="text-lg text-[#1e0a42] text-center font-medium max-w-xl max-sm:px-4">Kami paham betapa pentingnya memiliki website yang menarik dan responsif dalam menghadapi persaingan digital saat ini. Dengan pendekatan yang inovatif dan fokus pada kepuasan pelanggan, kami akan membuat website yang tidak hanya memikat mata, tetapi juga menghasilkan hasil yang nyata.</h2>

            <div className="grid grid-cols-3 gap-y-8 gap-x-16 pb-8 max-sm:grid-cols-1">
                <Card image="card1.png" title="Desain Web yang Kreatif dan Responsif" desc="Kami menghadirkan desain website yang tidak hanya menawan secara visual, tetapi juga responsif di semua perangkat. Setiap website yang kami buat dirancang dengan keahlian kreatif untuk mencerminkan identitas unik bisnis Anda." />
                <Card image="card5.png" title="E-Commerce dan Integrasi Pembayaran" desc="Kami mengkhususkan diri dalam mengembangkan situs e-commerce yang menghasilkan penjualan. Dari pembuatan toko online hingga integrasi sistem pembayaran yang aman, kami membantu Anda membangun platform e-commerce yang sukses." />
                <Card image="card2.png" title="Pengembangan Website yang Profesional" desc="Tim kami terampil dalam mengembangkan website berkualitas tinggi dengan fokus pada keamanan dan performa. Dari pengkodean hingga integrasi fitur, kami memastikan website Anda berfungsi optimal dan aman." />
                <Card image="card3.png" title="Optimasi SEO" desc="Kami membantu meningkatkan visibilitas website Anda di mesin pencari. Dengan strategi SEO terbaik, kami membawa bisnis Anda ke peringkat teratas dalam hasil pencarian, membantu Anda menjangkau lebih banyak pelanggan potensial." />
                <Card image="card4.png" title="Pengelolaan Kontent" desc="Kami menyediakan solusi pengelolaan konten yang efisien dan user-friendly. Dengan platform yang mudah digunakan, Anda dapat mengelola dan memperbarui konten website dengan cepat dan tanpa kesulitan." />
                <Card image="card6.png" title="Dukungan Teknis dan Pemeliharaan" desc="Kami tidak hanya membantu Anda membangun website, tetapi juga memberikan dukungan teknis dan pemeliharaan berkala. Kami siap menjaga website Anda tetap berjalan lancar dan aman setelah peluncuran." />
            </div>
        </section>
    )
}

export default Services