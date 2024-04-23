import LogoDevIcon from '@mui/icons-material/LogoDev';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <section className="flex flex-col gap-y-10 py-16 bg-[#15143c]">
            <div className="px-32 flex justify-between items-start max-sm:px-8 max-sm:flex-col max-sm:gap-y-8">
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-lg text-white font-semibold">Product</h2>
                    <ul className="flex flex-col gap-y-2 text-base text-slate-300">
                        <li>Mobile Push Notifications</li>
                        <li>Web Push Notifications</li>
                        <li>Email</li>
                        <li>In-App Messaging</li>
                        <li>Journeys</li>
                        <li>Live Activities</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-lg text-white font-semibold">Resources</h2>
                    <ul className="flex flex-col gap-y-2 text-base text-slate-300">
                        <li>Resource Library</li>
                        <li>Customer Case Studies</li>
                        <li>Blog</li>
                        <li>Notification Preview Tool</li>
                        <li>Glossary</li>
                        <li>Customer Program</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-lg text-white font-semibold">Developers</h2>
                    <ul className="flex flex-col gap-y-2 text-base text-slate-300">
                        <li>Documentation</li>
                        <li>Github</li>
                        <li>Code Samples</li>
                        <li>Developer Community</li>
                        <li>Beta Program</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-lg text-white font-semibold">Company</h2>
                    <ul className="flex flex-col gap-y-2 text-base text-slate-300">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Why OneSignal</li>
                        <li>Partner Program</li>
                        <li>Contact Sales</li>
                        <li>Live Activities</li>
                    </ul>
                </div>
            </div>

            <hr className="mx-32 max-sm:mx-8" />

            <div className='flex flex-col items-center gap-y-8'>
                <LogoDevIcon className='text-7xl text-white' />
                <div className='flex flex-col gap-y-3'>
                    <p className='text-slate-300 text-base'>Penyedia Layanan Website Nomor 1 & Terpercaya</p>
                    <p className='text-slate-300 text-base'>Solusi untuk Membesarkan Skala Perusahaan Anda</p>
                </div>
                <div className='flex items-center gap-x-4'>
                    <LinkedInIcon className='text-4xl text-white' />
                    <InstagramIcon className='text-4xl text-white' />
                    <FacebookIcon className='text-4xl text-white' />
                    <TwitterIcon className='text-4xl text-white' />
                </div>
            </div>

        </section>
    )
}

export default Footer