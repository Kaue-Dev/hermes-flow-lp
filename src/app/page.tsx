import { NavbarContainer } from "@/components/navbar/NavbarContainer";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Image from "next/image";
import Link from "next/link";

import { Cards } from "@/components/cards-section/Cards";
import { FooterContainer } from "@/components/footer/FooterContainer";

export default function Home() {
  return (
    <div className="bg-darkPurple min-h-screen text-white">
      <NavbarContainer />
      <div className="bg-background bg-no-repeat min-h-screen flex flex-col gap-20 justify-center items-center pt-40 pb-20">
        <div className="flex flex-col gap-6 items-center">
          <p className="border px-6 py-2 rounded-full">Simplificando a operação de mais de 5 empresas!</p>
          <h1 className="text-center text-7xl font-medium -tracking-3 max-w-3xl">Ferramenta moderna para empresas modernas.</h1>
          <p className="text-white/65 text-center max-w-xl text-lg">O disparador de mensagem HermesFlow oferece funcionalidades que facilitam o marketing da sua empresa.</p>
          <Button asChild variant="outline" className="bg-none bg-transparent">
            <Link href="/">Fale Conosco</Link>
          </Button>
        </div>
        <div className="w-full">
          <NeonGradientCard className="max-w-3xl mx-auto">
            <Image src="/print-hermes.png" width={800} height={500} layout="responsive" alt="Print Hermes Flow" className="rounded-[20px]" />
          </NeonGradientCard>
        </div>
      </div>
      <div className="max-w-3xl py-14 px-5 mx-auto">
        <p className="text-white/80 text-center mb-10 text-xl">Empresas sólidas que confiam no HermesFlow</p>
        <Marquee className="[--duration:20s] flex items-center gap-6">
          <span className="text-xl">Bruto</span>
          <span className="text-xl">Époka</span>
          <span className="text-xl">Bluebell</span>
          <span className="text-xl">ImobFácil</span>
          <span className="text-xl">Robust</span>
          <span className="text-xl">Fort</span>
        </Marquee>
      </div>
      <div className="flex flex-col items-center justify-center gap-20">
        <div>
          <h2 className="font-medium text-center text-5xl mb-6 max-w-sm mx-auto">Funcionalidades que trabalham para você.</h2>
          <p className="text-lg text-center max-w-[460px]">Dê uma olhada nas facilidades que o HermesFlow oferece pra você.</p>
        </div>
        <Cards />
      </div>
      <FooterContainer />
    </div>
  )
}