import React,{useState} from "react";
import logo from "../assets/images/logo-bookmark.svg";
import ImgTag from "./ImgTag";
import Button from "./Button";
import Link from "./Link";
import Ham from "./Ham";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex  justify-between h-24 items-center transition m-auto w-[85%]">
   
  <ImgTag src={logo} />

      {/* nav for mobile*/}
    <div className={`flex lg:hidden`}>
        <Ham isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* nav for desktop*/}
      <div className="hidden lg:flex ">
        <Link className="hoverRed transition" >Features</Link>
        <Link className="hoverRed transition" >Pricing</Link>
        <Link className="hoverRed transition" > Contact</Link>
        <Button className="cursor-pointer transition bg-soft-red  border-soft-red text-white px-6 py-2 uppercase tracking-wide rounded-md hover:bg-white outline-none hoverRed hover:border-soft-red border-2">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
