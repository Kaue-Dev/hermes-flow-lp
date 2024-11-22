interface NavbarProps {
  children: React.ReactNode;
}

export function NavbarContent({ children }: NavbarProps) {
  return (
    <div className="flex items-center justify-between w-full">
      {children}
    </div>
  )
}