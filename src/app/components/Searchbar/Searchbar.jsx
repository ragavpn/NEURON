import twitter from "@assets/twitter.svg";
import insta from "@assets/insta.svg";
import facebook from "@assets/facebook.svg";
import search from "@assets/search.svg";
import dude from "@assets/dude.svg";
import Image from "next/image";

export const Searchbar = () => {
    return (
        <div className="flex flex-row justify-between items-center px-2">
            <div className="flex flex-row justify-between items-center w-[13%]">
                <Image src={twitter} alt="" />
                <Image src={insta} alt="" />
                <Image src={facebook} alt="" />

            </div>
            <div className="w-[65%] relative">
                <input className="search w-full backdrop-blur-lg text-xl font-semibold border-[1px] border-white bg-transparent pl-4 pr-14 py-2 rounded-xl" 
                    placeholder="Search inside your mother's ass" 
                    type="text" 
                />
                <Image className="w-[3.5%] absolute top-3.5 right-4" src={search} alt="" />
            </div>
            <button className="w-[15%] border-2 border-black flex flex-row justify-around items-center bg-[#E6F9FB] py-1 rounded-lg">
                <Image className="w-[10%]" src={dude} alt="" />
                <h1 className="text-2xl">Log In</h1>
            </button>
        </div>
    )
}