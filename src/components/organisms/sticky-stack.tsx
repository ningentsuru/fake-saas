import { CSSProperties, ReactNode, FC } from "react";
import { cn } from "@/lib/utils";

export interface StickySection {
  id: string;
  className?: string;
  backgroundColor?: string;
  backgroundColorDark?: string;
  textColor?: string;
  textColorDark?: string;
  children?: ReactNode;
}

interface StickyStackProps {
  sections: StickySection[];
  containerClassName?: string;
}

export const StickyStack: FC<StickyStackProps> = ({
  sections,
  containerClassName = "",
}) => {
  return (
    <div className={cn("w-full", containerClassName)}>
      {sections.map((section, index) => {
        const sectionStyle = {
          zIndex: index + 1,
          "--sticky-stack-bg": section.backgroundColor ?? "transparent",
          "--sticky-stack-bg-dark":
            section.backgroundColorDark ??
            section.backgroundColor ??
            "transparent",
          "--sticky-stack-text": section.textColor ?? "#ffffff",
          "--sticky-stack-text-dark":
            section.textColorDark ?? section.textColor ?? "#ffffff",
        } as CSSProperties;

        return (
          <div
            id={section.id}
            key={section.id}
            className={cn(
              "sticky top-0 h-screen w-full snap-start snap-always bg-(--sticky-stack-bg) text-(--sticky-stack-text) shadow-[0_-4px_10px_rgba(0,0,0,0.2)] dark:bg-(--sticky-stack-bg-dark) dark:text-(--sticky-stack-text-dark)",
              section.className,
            )}
            style={sectionStyle}
          >
            {section.children && section.children}
          </div>
        );
      })}
    </div>
  );
};
