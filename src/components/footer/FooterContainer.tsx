import Link from "next/link";
import { FooterContent } from "./FooterContent";
import Image from "next/image";

export function FooterContainer() {
  return (
    <footer className="w-full px-5 py-16 max-tablet:py-8">
      <FooterContent>
        <div className="flex flex-col justify-between h-52 max-tablet:h-40">
          <div>
            <h3 className="font-medium text-2xl mb-4">Contato</h3>
            <p className="font-light mb-1 text-white/70"><Link href="mailto:contato@blackhallgroup.com" target="_blank">Email: contato@blackhallgroup.com</Link></p>
            <p className="font-light text-white/70"><Link href="https://wa.me/5511974023405" target="_blank">Fone: (11) 97402-3405</Link></p>
          </div>
          <p className="text-[#939393] font-light">© 2024 BlackHall Group. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-col justify-between h-52">
          <div>
            <h3 className="font-medium text-2xl mb-4">Endereço</h3>
            <p className="font-light mb-1 max-w-52 text-white/70">Rua Amazonas, 1778 Country - 85813-080 Cascavel, Paraná</p>
          </div>
          <div>
            <h3 className="font-medium text-2xl mb-4">Social</h3>
            <Link href="/" target="_blank" className="font-light text-white/70">Insagram</Link>
          </div>
        </div>
        <Image src="/logo.svg" alt="logo" width={130} height={33} />
      </FooterContent>
    </footer>
  )
}