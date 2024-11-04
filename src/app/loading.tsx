export default function Loading() {
    return (
        <section className="h-screen w-screen flex items-center justify-center">
            <div className="grid grid-cols-4 grid-rows-4 animate-spin gap-2">
                {Array.from({ length: 16 }).map((_, index) => (
                    <span
                        key={index}
                        className="bg-[var(--custom-red)] h-2 w-2"
                    ></span>
                ))}
            </div>
        </section>
    );
}
