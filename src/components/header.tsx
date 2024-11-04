import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
    return (
        <header className="flex flex-row items-center justify-between px-4 md:px-20 py-2 h-24">
            <Image
                src="/mantra-logo.webp"
                alt="Mantra Logo"
                width={200}
                height={200}
                className="select-none h-full "
            />

            <nav className="hidden md:flex flex-row items-center justify-between gap-4 [&>*]:text-lg uppercase">
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
                <ModeToggle className="[&>*]:flex [&>*]:items-center [&>*]:justify-center w-28 h-10 [&>*]:size-9 [&>*]:data-[state=checked]:translate-x-[4.5rem]" />
            </nav>

            <Sheet>
                <SheetTrigger asChild>
                    <Button className="md:hidden px-2 size-12">
                        <IoMdMenu className="h-12 w-12" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="top">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription className="sr-only">
                            Navigate through the sections of the site.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col gap-4 mt-4">
                        <Link className="font-poppins px-4 text-lg" href="/">
                            Home
                        </Link>
                        <Link
                            className="font-poppins px-4 text-lg"
                            href="#about"
                        >
                            About
                        </Link>
                        <Link
                            className="font-poppins px-4 text-lg"
                            href="#projects"
                        >
                            Services
                        </Link>
                        <Link
                            className="font-poppins px-4 text-lg"
                            href="#experiences"
                        >
                            Work
                        </Link>
                        <Link
                            className="font-poppins px-4 text-lg"
                            href="#contact"
                        >
                            Contact
                        </Link>
                        <ModeToggle className="mx-4 [&>*]:flex [&>*]:items-center [&>*]:justify-center w-20 h-10 [&>*]:size-9 [&>*]:data-[state=checked]:translate-x-[2.5rem]" />
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    );
}
