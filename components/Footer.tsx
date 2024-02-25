import React from 'react'



import discord from '@/public/discord.svg'
import twitter from '@/public/twitter.svg'
import github from '@/public/github.svg'
import telegram from '@/public/telegram.svg'
import Image from 'next/image'

const links = [
    { url: 'https://faq.com', label: 'FAQ' },
    { url: 'https://about.com', label: 'About' },
    { url: 'https://about.com', label: 'Blog' },
    { url: 'https://about.com', label: 'Terms of Services' },
    { url: 'https://about.com', label: 'Privact Policy' }


];

const images = [
    { src: twitter, alt: "twitter" },
    { src: discord, alt: "discord" },
    { src: github, alt: "github" },
    { src: telegram, alt: "telegram" },
];

const Footer = () => {
    return (
        <footer className="w-full mt-12 lg:mt-0 flex lg:flex-row flex-col border-t bg-white lg:bottom-0 lg:absolute lg:items-center lg:px-28" >
            <div className=' w-full flex flex-col lg:flex-row justify-between '>
                <div className='text-[#536471] gap-6 hidden md:flex  '>
                    {links.map((link) => (
                        <span key={link.label}>
                            {link.label}
                        </span>
                    ))}
                </div>
                <div className="pt-4 justify-center w-full flex flex-col items-center sm:hidden">
                    <div className='flex gap-6 text-xs text-[#536471] '>
                        <span>
                            FAQ
                        </span>
                        <span>
                            About
                        </span>
                        <span>
                            Blog
                        </span>
                    </div>
                    <div className='flex gap-6 pt-6 text-xs text-[#536471] '>
                        <span >
                            Terms of Services
                        </span>

                        <span>
                            Privacy Policy
                        </span>
                    </div>
                </div>


            </div>
            <div className="flex gap-4 items-center sm:items-start justify-center sm:justify-start  py-6 sm:py-0">
                {images.map((image) => (
                    <Image key={image.alt} src={image.src} alt={image.alt} />
                ))}
            </div>
        </footer>
    )
}

export default Footer