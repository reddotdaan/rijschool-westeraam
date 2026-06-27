"use client";

import { Button, cn } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LinkButton } from "@/components/ui/link-button";
import { siteConfig, type NavItem } from "@/lib/site-config";

function isNavActive(pathname: string, item: NavItem) {
  if (pathname === item.href) return true;
  if ("children" in item && item.children) {
    return item.children.some((child) => pathname === child.href);
  }
  return pathname.startsWith(item.href) && item.href !== "/";
}

function DesktopNavItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isNavActive(pathname, item);

  if ("children" in item && item.children) {
    return (
      <div className="group relative">
        <Link
          href={item.href}
          className={cn(
            "inline-flex items-center gap-1 text-sm font-medium transition-colors",
            active ? "text-westeraam-orange" : "text-gray-700 hover:text-westeraam-blue",
          )}
        >
          {item.label}
          <svg
            className="h-4 w-4 shrink-0 opacity-60"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <div className="invisible absolute left-0 top-full z-50 min-w-[220px] pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          <div className="rounded-xl border border-gray-200 bg-white py-2 shadow-lg">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "block px-4 py-2 text-sm transition-colors hover:bg-gray-50",
                  pathname === child.href
                    ? "font-medium text-westeraam-orange"
                    : "text-gray-700 hover:text-westeraam-blue",
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "text-sm font-medium transition-colors",
        active ? "text-westeraam-orange" : "text-gray-700 hover:text-westeraam-blue",
      )}
    >
      {item.label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-westeraam-blue/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt={siteConfig.shortName}
            width={382}
            height={228}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.nav.map((item) => (
            <DesktopNavItem key={item.label} item={item} pathname={pathname} />
          ))}
          <LinkButton href={siteConfig.cta.href} size="sm">
            {siteConfig.cta.label}
          </LinkButton>
        </nav>

        <Button
          variant="ghost"
          isIconOnly
          size="sm"
          className="text-westeraam-blue lg:hidden"
          aria-label="Menu openen"
          aria-expanded={mobileOpen}
          onPress={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </Button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => {
              if ("children" in item && item.children) {
                return (
                  <div key={item.label} className="py-1">
                    <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-sm font-medium",
                          pathname === child.href
                            ? "bg-westeraam-blue/5 text-westeraam-orange"
                            : "text-gray-700 hover:bg-gray-50",
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium",
                    isActive
                      ? "bg-westeraam-blue/5 text-westeraam-orange"
                      : "text-gray-700 hover:bg-gray-50",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <LinkButton
              href={siteConfig.cta.href}
              fullWidth
              size="sm"
              className="mt-2"
              onClick={() => setMobileOpen(false)}
            >
              {siteConfig.cta.label}
            </LinkButton>
          </div>
        </nav>
      )}
    </header>
  );
}
