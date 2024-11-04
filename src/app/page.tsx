import About from "@/components/about";
import HeroPlayer from "@/components/hero-player";
import Services from "@/components/services";

export default function Home() {
    return (
        <main className="flex flex-col gap-10">
            <HeroPlayer />
            <About />
            <Services />
        </main>
    );
}
