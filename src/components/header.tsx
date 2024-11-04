import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ui/theme-toggle";

export default function Header() {
    return (
        <header className="flex flex-row items-center justify-between px-20 py-2 h-24">
            <Image
                src="/mantra-logo.webp"
                alt="Mantra Logo"
                width={200}
                height={200}
                className="select-none h-full w-max"
            />

            <nav className="flex flex-row items-center justify-between gap-4 [&>*]:text-lg uppercase">
                <Link className="font-poppins px-4" href="/">
                    Home
                </Link>
                <Link className="font-poppins px-4" href="#about">
                    About
                </Link>
                <Link className="font-poppins px-4" href="#projects">
                    Services
                </Link>
                <Link className="font-poppins px-4" href="#experiences">
                    Work
                </Link>
                <Link className="font-poppins px-4" href="#contact">
                    Contact
                </Link>
                <ModeToggle className="[&>*]:flex [&>*]:items-center [&>*]:justify-center " />
            </nav>
        </header>
    );
}
