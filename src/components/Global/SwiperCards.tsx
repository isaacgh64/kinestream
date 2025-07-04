
import Cards from './Cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from "react";
import 'swiper/swiper-bundle.css';
import Films from '../../models/films';


type SwiperCardsProps = {
  title: string,
  list: Films[],
  setNext: React.Dispatch<React.SetStateAction<number>>
}

export default function SwiperCards({ title, list, setNext }: SwiperCardsProps) {
  const [index, setIndex] = useState(0);
  const [hasRequestedNext, setHasRequestedNext] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const [visibleSlides, setVisibleSlides] = useState(0);

  const onSlideChangeHandler = (swiper: SwiperType) => {
    setIndex(swiper.realIndex);

    if (swiper.realIndex >= list.length - visibleSlides && !hasRequestedNext) {
      setNext(prev => prev + 1);
      setHasRequestedNext(true);
    } else if (swiper.realIndex < list.length - 4) {
      setHasRequestedNext(false);
    }
  };

  const incrementIndex = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      
    }
  };

  const decrementIndex = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      
    }
  };

  return (
    <section className="max-w-6xl mx-auto py-3">
      <h3 className="text-3xl text-blue-500 font-bold">{title}</h3>
      <div className="flex flex-row items-center">
        <button
          className="swiper-button-prev-custom bg-white border border-blue-500 text-blue-500 p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-300 h-11 me-2 disabled:opacity-0"
          onClick={decrementIndex}
          disabled={index === 0}
        >
          <ChevronLeft size={24} />
        </button>

        <Swiper
        className='w-full'
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 6 },
            640: { slidesPerView: 3, spaceBetween: 8 },
            1024: { slidesPerView: 4, spaceBetween: 12 }
          }}
          onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  setVisibleSlides(swiper.params.slidesPerView as number);
              }}
              onResize={(swiper) => {
                  setVisibleSlides(swiper.params.slidesPerView as number);
              }}
          onSlideChange={onSlideChangeHandler}
        >
          {list.map((item, i) => (
            <SwiperSlide key={i} className='w-48 sm:w-56 md:w-62 lg:w-72 xl:w-80 flex-shrink-0'>
              <Cards key={`${i} / ${item}`} item={item} type={'movie'}/>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="swiper-button-next-custom bg-white border border-blue-500 text-blue-500 p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-300 h-11 ms-2 disabled:opacity-0"
          onClick={incrementIndex}
          disabled={index >= list.length - visibleSlides}
        >
          <ChevronRight size={25} />
        </button>
      </div>
    </section>
  );
}

