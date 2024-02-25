"use client";


import Image from "next/image";
import image from "@/public/talent.jpg"
import first from "@/public/single.webp"
import second from "@/public/two.webp"
import third from "@/public/twomore.webp"
import logo from "@/public/logo.svg"
import profile from "@/public/profile.webp";
import { useEffect, useRef } from "react";
import Popover from "@/components/Popover";
import Footer from "@/components/Footer";
import Marquee from "react-fast-marquee";


export default function Home() {

  const marqueeUpRef = useRef<HTMLDivElement>(null);
  const marqueeDownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const marqueeUp = marqueeUpRef.current;
    const marqueeDown = marqueeDownRef.current;
    if (marqueeUp && marqueeDown) {
      const contentUp = marqueeUp.querySelector('.content');
      const contentDown = marqueeDown.querySelector('.content');
      if (contentUp && contentDown) {
        const contentUpHeight = contentUp.clientHeight;
        const contentDownHeight = contentDown.clientHeight;
        (contentUp as HTMLElement).style.animationDuration = `${contentUpHeight * 0.5}s`;
        (contentDown as HTMLElement).style.animationDuration = `${contentDownHeight * 0.5}s`;
      }
    }
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="lg:hidden">
        <div className="flex flex-col items-center justify-center py-12">
          <nav>
            <Image src={logo} alt="logo" />
          </nav>
          <div className="space-y-6 pt-24">
            <h1 className=" text-[40px] px-12 text-center  lg:text-[3.5rem] leading-[1.2]">
              You"ll never <span className="italic font-thin">build</span> alone.
            </h1>
            <p className="text-[#536471] px-4 lg:text-[1.25rem] leading-[1.5]">
              Where builders commit to goals, share their progress and find the support they need to succeed.
            </p>
            <div className="justify-center w-full text-center">
              <button className="bg-[#7857ed] py-[0.88rem] px-[2rem] rounded-[50px] font-semibold text-white">
                Launch App
              </button>
            </div>
          </div>
          <div className="space-y-4 px-4 pt-20">
            <p className="font-medium  text-center">
              Join +6,000 builders who already achieved their goals.
            </p>
            <div className=" flex flex-col px-8 gap-4 ">
              <div className="flex w-14 h-14">
                <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
              </div>
              <div className="flex w-14 h-14">
                <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
              </div>
            </div>
          </div>
        </div>


        <div className="">
          <Marquee  className="py-4">
            <div className="flex ">
              <Image src={image} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={first} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={second} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={third} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={image} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={first} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={second} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={third} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
            </div>
          </Marquee>
        </div>


        <div className="">
          <Marquee  direction="right" className="py-4">
            <div className="flex ">
              <Image src={image} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={first} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={second} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={third} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={image} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={first} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={second} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={third} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[200px] mx-2  transition-all duration-150 ease-in-out hover:shadow-none" />
            </div>
          </Marquee>
        </div>

        <Footer/>
      </div>




      <div className="hidden md:block">
        <div className="min-h-screen overflow-hidden text-gray-900 flex">
          <div className="container mx-auto w-3/4">
            <div className="py-12 pl-28 flex flex-col justify-between h-full">
              <nav>
                <Image src={logo} alt="logo" />
              </nav>
              <div className="space-y-6">
                <h1 className="text-[3.5rem] leading-[1.2]">
                  You"ll never <span className="italic font-light">build</span> alone.
                </h1>
                <p className="text-[1.25rem] leading-[1.5]">
                  Where builders commit to goals, share their progress and find the support they need to succeed.
                </p>
                <button className="bg-[#7857ed] py-[0.88rem] px-[2rem] rounded-[50px] font-semibold text-white">
                  Launch App
                </button>
              </div>

              <div className="space-y-4 bottom-12 relative">
                <p className="font-semibold">
                  Join +6,000 builders who already achieved their goals.
                </p>
                <div className="flex gap-2 w-10 h-10">
                  <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                  <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                  <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                  <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                  <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                  <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                  <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                  <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                  <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                  <Popover image={profile} line1="Name Here" line2="Profile Info Here" />
                </div>
              </div>
            </div>
          </div>
          <div ref={marqueeUpRef} className="marquee-up w-1/4 2xl:w-1/4 mr-4 lg:w-[450px] lg:mr-6 lg:relative lg:left-[150px]  2xl:left-0">
            <div className="content">
              <Image src={image} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={first} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={second} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={third} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={image} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={first} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={second} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={third} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
            </div>
          </div>
          <div ref={marqueeUpRef} className="marquee-down lg:w-[450px] lg:relative lg:left-[150px] 2xl:left-0 ">
            <div className="content">
              <Image src={image} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={first} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={second} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={third} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={image} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={first} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={second} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
              <Image src={third} alt="image" className="border hover:border-2 rounded-2xl shadow-md hover:scale-95 w-[450px] my-3  transition-all duration-150 ease-in-out hover:shadow-none" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
