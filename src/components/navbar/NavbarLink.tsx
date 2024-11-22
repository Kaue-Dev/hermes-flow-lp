import Link from "next/link";
import { Button } from "../ui/button";

interface NavbarLinkProps {
  variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
  href: string;
  target?: string;
  text: string;
}

export function NavbarLink({ 
  variant, 
  href, 
  target = "_self", 
  text
 }: NavbarLinkProps) {
  return (
    <Button asChild variant={variant}>
      <Link 
        href={href} 
        target={target}
        className="text-white"
        {...(variant === "outline" && { className: "bg-none bg-transparent" })} // Se o variant for outline, a cor de fundo é transparente
      >
        {text}
      </Link>
    </Button>
  )
}