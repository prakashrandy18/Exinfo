import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export function CarouselPlugin({ data = [] }) {
  const plugin = React.useRef([
    Autoplay({ delay: 2000, stopOnInteraction: true }),
    Fade(),
  ]);

  return (
    <Carousel
      plugins={plugin.current}
      className="w-full h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className={'h-full'}>
        {data.map((o, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="rounded-none border-none">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img
                    src={`/images/HeroImages/${o?.src}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    alt="Next.js Logo"
                  />
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
