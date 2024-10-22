import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constantes"
import { link } from "fs"
import Button from "./button"

function NoLogNavbar() {
  return (
    <nav className="flexCenter max-container
    padding-container relative z-30 py-5">
     <Link href="/">
      <Image src="/logo2-ucc.svg" alt="logo" width={64} height={29}/>
     </Link> 
    </nav>
  )
}

export default NoLogNavbar