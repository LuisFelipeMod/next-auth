import { ReactNode } from "react";

type CardProps = {
  children: ReactNode,
  className?: string;
}

type CardContentProps = {
  children: ReactNode
}

export function Card({children, className}: CardProps){
  return(
    <div className={`bg-neutral-900/70 drop-shadow-lg rounded-2xl shadow-lg p-4 text-neutral-200 ${className}`}>
      {children}
    </div>
  )
}

export function CardContent({children} : CardContentProps){
  return(
    <div className="p-4">
      {children}
    </div>
  )
}

export default Card;