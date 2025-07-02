"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, BriefcaseBusiness, FileText, Home, LucideIcon, Phone, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

export function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const BigScreenItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Skills", url: "#skills", icon: BriefcaseBusiness },
    { name: "Projects", url: "#projects", icon: BriefcaseBusiness },
    { name: "Services", url: "#services", icon: FileText },
    { name: "Contact", url: "#contact", icon: User },
  ];

  const SmallScreenItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about", icon: User },
     { name: "Services", url: "#services", icon: BriefcaseBusiness },
    { name: "Contact", url: "#contact", icon: Phone },
  ];

  const [activeTab, setActiveTab] = useState(BigScreenItems[0].name);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentItems = isMobile ? SmallScreenItems : BigScreenItems;

  return (
    <div
      className={cn(
        "fixed h-fit  sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 pt-6"
      )}
    >
      <div className="flex items-center gap-3 bg-background/60 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {currentItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                scrollToSection(item.name);
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
