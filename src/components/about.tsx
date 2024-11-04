"use client";

/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
// import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const images = ["one", "two", "three", "four", "five", "six"];

export default function About() {
    return (
        <section className="grid grid-cols-2 px-32 gap-6 py-10">
            <Card className="overflow-hidden transition-all bg-red-100 duration-300 hover:ring-2 hover:ring-red-500 rounded-none">
                <CardContent className="p-0 flex">
                    <img
                        src="/devendra.jpg"
                        alt="Devendra Kumar"
                        className="object-cover h-full w-full block"
                    />
                </CardContent>
                <CardFooter className="sr-only"></CardFooter>
            </Card>

            <div className="flex flex-col gap-6">
                <Card className="transition-all duration-300 border-none shadow-none dark:bg-inherit">
                    <CardHeader className="p-0"></CardHeader>
                    <CardContent className="flex flex-col h-full font-open-sans text-xl p-0 gap-2 text-justify">
                        <p className="text-muted-foreground">
                            Mantra Pixels is a post-production studio located in
                            Mumbai, India. Established in 2015, it was founded
                            by Mr. Devendra Prajapati (R.K.), a well-respected
                            and experienced post-production editor in the
                            industry. Over the years, R.K. has built an
                            impressive reputation working with some of the
                            largest post-production houses in India. He is known
                            for his unwavering aspirations and his commitment to
                            achieving excellence while effectively managing
                            clients&apos; finances.
                        </p>
                        <p>
                            To this day, R.K. continues to push the boundaries
                            of innovation, which inspired him to launch Mantra
                            Pixels. The studio is equipped with comprehensive
                            setups and in-house facilities, supported by an
                            excellent creative team. Our team showcases
                            extensive show-reels featuring cutting-edge films,
                            efficient client management, and successful
                            collaborations with top agencies in India and around
                            the world.
                        </p>
                    </CardContent>
                </Card>

                <Card className="overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-red-500 p-1 rounded-none">
                    <CardContent className="p-0">
                        <Swiper
                            spaceBetween={30}
                            modules={[Autoplay, Pagination]}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            className="w-full h-full"
                        >
                            {images.map((image) => (
                                <SwiperSlide
                                    key={image}
                                    className="flex justify-center items-center rounded-none overflow-hidden h-full"
                                >
                                    <img
                                        src={`/office-slider/${image}.jpg`}
                                        alt={image}
                                        className="w-full h-full object-cover block rounded-none"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
