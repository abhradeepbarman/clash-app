import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function HeroSection() {
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div>
                <Image
                    src={"/banner.svg"}
                    alt="banner-image"
                    width={500}
                    height={500}
                />
            </div>
            <div className="text-center mt-4">
                <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
                    Clash
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-center mt-2">
                    Discover the better choice together
                </p>
                <Link href={"/login"}>
                    <Button className=" mt-5">Start Free</Button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
