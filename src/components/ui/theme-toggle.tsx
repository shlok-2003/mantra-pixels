"use client";

import * as React from "react";
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Switch } from "./switch";
import { cn } from "@/lib/utils";

export function ModeToggle({
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof Switch>) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [isSystemDark, setIsSystemDark] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setIsSystemDark(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setIsSystemDark(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    if (!mounted) {
        return null;
    }

    const isDark = theme === "dark" || (theme === "system" && isSystemDark);

    return (
        <Switch
            checked={theme === "dark" || (theme === "system" && isDark)}
            onCheckedChange={(value) => setTheme(value ? "dark" : "light")}
            className={cn(className)}
            {...props}
        />
    );
}
