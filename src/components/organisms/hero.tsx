import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subTitle?: string;
  description?: string;
  children?: ReactNode;
}

export default function Hero({
  title,
  subTitle,
  description,
  children,
}: HeroProps) {
  return (
    <div className="h-[50vh] sticky">
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
}
