"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Benefits Of GFRP", href: "/benefits" },
  { name: "Corporate Identity", href: "/corporate-identity" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl' 
        : 'bg-white/20 backdrop-blur-md border-b border-white/10'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/50 to-white/30"></div>
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10 w-full"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="group flex items-center space-x-3 hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-300"></div>
              <Image
                src="/images/gfrp_logo.png"
                alt="Vegnar GFRP Logo"
                width={40}
                height={40}
                className="relative h-10 w-auto drop-shadow-lg"
                priority
              />
            </div>
            {/* <div className="hidden sm:block">
              <span className="text-lg font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent drop-shadow-lg">
                VEGNAR GFRP
              </span>
            </div> */}
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className={`p-2 rounded-xl backdrop-blur-md border transition-all duration-300 shadow-lg ${
              scrolled
                ? "bg-white/80 border-gray-200/50 hover:bg-white/90"
                : "bg-white/40 border-white/30 hover:bg-white/60"
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium whitespace-nowrap transition-all duration-300 hover:scale-105 ${
                isActive(item.href)
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto overflow-x-hidden bg-white/95 backdrop-blur-xl border-l border-gray-200/50 px-6 py-6 sm:max-w-sm shadow-2xl">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                src="/images/gfrp_logo.png"
                alt="Vegnar GFRP Logo"
                width={32}
                height={32}
                className="h-8 w-auto drop-shadow-lg"
                priority
              />
              {/* <span className="text-lg font-bold text-gray-900">
                VEGNAR GFRP
              </span> */}
            </Link>
            <button
              type="button"
              className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200/30">
              <div className="space-y-3 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-accent"
                        : "text-foreground hover:text-primary hover:bg-accent"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
