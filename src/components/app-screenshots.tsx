import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { url } from "inspector";
import { useRef } from "react";

export function AppScreenshots() {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <section className="py-20 px-4 bg-background">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        See Safirah in{" "}
                        <span className="text-primary">
                            Action
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get a sneak peek at the intuitive interface and powerful features that make
                        Safirah the ultimate safety companion.
                    </p>
                </div>

                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-5xl mx-auto"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {[
                            {
                                id: 1,
                                url: "/safirah-homepage.jpg",
                                label: "Home page"
                            },
                            {
                                id: 2,
                                url: "/safirah-routefindingpage.jpg",
                                label: "Route finding page"
                            },
                            {
                                id: 1,
                                url: "/safirah-communitypage.jpg",
                                label: "Community page"
                            },
                            {
                                id: 1,
                                url: "/safirah-incidentspage.jpg",
                                label: "Incidents Reporting page"
                            },
                            {
                                id: 1,
                                url: "/safirah-profilepage.jpg",
                                label: "Profile page"
                            },
                        ].map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="md:basis-1/2 lg:basis-1/3 flex justify-center"
                            >
                                <Card className="overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex items-center justify-center">
                                    <img
                                        src={item.url}
                                        alt={item.label}
                                        className="max-h-[600px] w-auto object-contain"
                                    />
                                </Card>
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}