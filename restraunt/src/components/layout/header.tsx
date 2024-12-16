import { MdKeyboardArrowDown } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from "next/link";


function Header (){
    return(
        <main className="bg-black h-[120px] max-w-[1920px] mx-auto flex items-center justify-center ">
         <header className="h-[96px] w-[1320px] pt-12 flex items-center justify-between">
            {/* pages */}
            <div className="pb-5 text-white">
                <ul className="flex space-x-3 ">
                    <li>
                        <ul>
                            <li className="">Home</li>
                            <li className="  pl-3 text-orange-600 "><GoDotFill/></li>
                        </ul>
                    </li>
                    <li><Link href="/menu">Menu</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/pages">Pages</Link></li>
                    <li>
                        <ul className="flex">
                            <li><Link href="/about">About</Link></li>
                            <li className="mt-1.5"><MdKeyboardArrowDown/>
                            </li>
                        </ul>
                    </li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>

            {/* logo */}
            <div className="mb-[20px] flex justify-center gap-4 space-y-14 pb-14 mr-20">
                <p className="flex pb-[60x] text-[#FF9F0D] font-bold pr-38">Food <span className="flex text-white gap-9 font-bold">tuck</span></p>
            </div>


            {/* searchbar */}
            <div className="pb-9 flex justify-center items-center gap-3 h-[2px]">
           <ul className="rounded-3xl border-2 border-[#FF9F0D] w-[310px] h-[54px] flex justify-between items-center">
           <li className="ml-3 text-white">Search</li>
           <li className="mr-3 text-xl"><CiSearch /></li>
           </ul>
           <HiOutlineShoppingBag />
            </div>
    
            
         </header>

        </main>

    )
    
}
export default Header;