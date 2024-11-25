import { Card } from "@/components/card-funcionalidade/Card";
import { Database, LayoutDashboard, MessageSquare, Zap } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function Cards() {
  return (
    <div className="max-w-[1200px] flex flex-col gap-20 mb-14 max-tablet:w-[90%] max-tablet:mb-4 max-tablet:gap-10">
      <div className="flex items-center gap-6 max-tablet:flex-col max-tablet:gap-10">
        <Card
          icon={<LayoutDashboard size={24} />}
          title="Painel de Controle"
          description="O Painel de Controle do HermesFlow oferece uma interface limpa e intuitiva, permitindo que você acompanhe facilmente o consumo do plano, visualize dados do sistema e acesse o histórico de disparos."
        />
        <Card
          icon={<Database size={24} />}
          title="Múltiplas Bases de Dados"
          description="Com o HermesFlow, você pode organizar seu acervo de clientes em múltiplas Bases de Dados, importar contatos diretamente de planilhas CSV e muito mais, facilitando o gerenciamento e simplificando os disparos de mensagens."
        />
      </div>
      <div>
        <Card
          icon={<MessageSquare size={24} />}
          title="Criação de mensagens"
          description="O Sistema de Criação de Mensagens do HermesFlow permite que o usuário crie diversas mensagens, incluindo imagens, com um preview preciso. Essas mensagens ficam salvas no sistema e podem ser facilmente enviadas aos clientes sempre que necessário."
          image="/print-hermes.png"
        />
      </div>
      <div>
        <Card
          icon={<Zap size={24} />}
          title="Disparo de Mensagens"
          description="O Sistema de Criação de Mensagens do HermesFlow permite que o usuário crie diversas mensagens, incluindo imagens, com um preview preciso. Essas mensagens ficam salvas no sistema e podem ser facilmente enviadas aos clientes sempre que necessário."
          image="/print-hermes.png"
        />
      </div>
      <div className="p-14 rounded-[20px] shadow-purple max-tablet:p-7">
        <div className="max-w-3xl flex flex-col items-center gap-6 mx-auto">
          <h2 className="text-center font-bold text-5xl max-tablet:text-4xl">Nossa poderosa ferramenta otimiza seu pré atendimento, seu marketing, sua empresa.</h2>
          <p className="text-center">Experimente o HermesFlow e simplifique a gestão do seu negócio! Organize clientes, crie mensagens personalizadas com imagens e otimize seu pré-atendimento e marketing em uma interface prática e intuitiva. Tudo isso em um único sistema eficiente e fácil de usar.</p>
          <Button asChild variant="outline" className="bg-none bg-transparent rounded-full">
            <Link href="/">Fale Conosco</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
