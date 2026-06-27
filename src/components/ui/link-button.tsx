"use client";

import NextLink from "next/link";
import { buttonVariants, cn, type VariantProps } from "@heroui/react";
import { buttonBlueClass } from "@/lib/heroui-theme";

type LinkButtonProps = VariantProps<typeof buttonVariants> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  brand?: "blue" | "orange";
  onClick?: () => void;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  size,
  className,
  brand = "orange",
  fullWidth,
  isIconOnly,
  onClick,
}: LinkButtonProps) {
  return (
    <NextLink
      href={href}
      onClick={onClick}
      className={cn(
        buttonVariants({ variant, size, fullWidth, isIconOnly }),
        brand === "blue" && buttonBlueClass,
        className,
      )}
    >
      {children}
    </NextLink>
  );
}
