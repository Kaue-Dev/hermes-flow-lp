interface FooterContentProps {
  children: React.ReactNode;
}

export function FooterContent({ children }: FooterContentProps) {
  return (
    <div className="max-w-[1200px] mx-auto p-6 flex justify-between items-end max-tablet:flex-wrap max-tablet:gap-8">
      {children}
    </div>
  )
}