import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  icon?: JSX.Element;
  image?: string;
}

export function Card({ title, description, icon, image }: CardProps) {
  return (
    <div className="p-14 rounded-[20px] shadow-purple flex items-center justify-between gap-3">
      <div className="w-full flex flex-col gap-3 max-w-md">
        <div className="border border-[#5C4D7B] p-2 w-fit rounded-md shadow-icon mb-2">
          {icon}
        </div>
        <h3 className="font-medium text-2xl">{title}</h3>
        <p>{description}</p>
      </div>
      {image && <Image src={image} width={460} height={300} alt="Print Hermes Flow" className="rounded-[20px]" />}
    </div>
  )
}