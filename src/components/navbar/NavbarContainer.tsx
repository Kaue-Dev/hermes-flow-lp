import { NavbarContent } from "./NavbarContent";
import Image from "next/image";
import { NavbarLinks } from "./NavbarLinks";

export function NavbarContainer() {	
  return (
    <nav className="max-w-7xl h-[72px] mx-auto flex items-center justify-center">
      <NavbarContent>
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
        <NavbarLinks />
      </NavbarContent>
    </nav>
  )
}