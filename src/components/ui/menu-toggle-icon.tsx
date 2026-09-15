import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * MenuToggleIcon - ícone hambúrguer que anima para um "X" quando `open`.
 * (Não fazia parte do pacote do header; criado aqui para satisfazer o import.)
 */
export function MenuToggleIcon({
  open = false,
  duration = 300,
  className,
  ...props
}: React.ComponentProps<"svg"> & { open?: boolean; duration?: number }) {
  const t = `${duration}ms`;
  const base: React.CSSProperties = {
    transformBox: "fill-box",
    transformOrigin: "center",
    transition: `transform ${t} ease, opacity ${t} ease`,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={cn(className)}
      aria-hidden="true"
      {...props}
    >
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        style={{ ...base, transform: open ? "translateY(6px) rotate(45deg)" : "none" }}
      />
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        style={{ ...base, opacity: open ? 0 : 1 }}
      />
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        style={{ ...base, transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }}
      />
    </svg>
  );
}

export default MenuToggleIcon;
