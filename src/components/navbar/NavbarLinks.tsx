import { NavbarLink } from "./NavbarLink";

export function NavbarLinks() {
  return (
    <div className="flex items-center justify-center gap-8 max-tablet:flex-col max-tablet:gap-2">
      <NavbarLink variant="link" href="#funcionalidades" text="Funcionalidades" />
      <NavbarLink variant="link" href="/" text="Planos" />
      <NavbarLink variant="outline" href="/" text="Fale Conosco" />
    </div>
  )
}