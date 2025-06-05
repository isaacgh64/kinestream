import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from "react";
import 'swiper/swiper-bundle.css';
import Starts from '../../models/starts';
import Start from './Start';



type SwiperCardsProps = {
    list:Starts[]
}

export default function SwiperCardsStart({list}:SwiperCardsProps) {
  
      const [index,setIndex] = useState(0)
      const swiperRef = useRef<SwiperType | null>(null)
      const incrementIndex = () => {
        console.log(swiperRef.current?.realIndex)
        if (swiperRef.current) {
          swiperRef.current.slideNext();
          setIndex(swiperRef.current.realIndex)
        }
      };
    
      const decrementIndex = () => {
        if (swiperRef.current) {
          swiperRef.current.slidePrev();
          setIndex(swiperRef.current.realIndex)
        }
      };
    return (
        <section className="max-w-6xl mx-auto">
            <div className="flex flex-row items-center">
              <button className="swiper-button-prev-custom bg-white border border-blue-500 text-blue-500 p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-300 h-11 me-2 disabled:opacity-0" onClick={decrementIndex} disabled={(index == 0)?true:false}>
                <ChevronLeft size={24} />
              </button>
              <Swiper breakpoints={{
                0: { slidesPerView: 2, spaceBetween:4 },  
                640: { slidesPerView: 3,spaceBetween:4  },  
                1024: { slidesPerView: 6,spaceBetween:4  }  
              }} onSwiper={(swiper) => (swiperRef.current = swiper)}onSlideChange={(swiper) => setIndex(swiper.realIndex)}>
                    {
                      list.map((item,index) =>(
                        <SwiperSlide key={index}>
                            <Start
                                key={`${index} / ${item}`}
                                item={item}
                              />
                        </SwiperSlide>
                      ))
                    }
              </Swiper>
              <button className="swiper-button-next-custom  bg-white border border-blue-500 text-blue-500 p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-300 h-11 ms-2  disabled:opacity-0" onClick={incrementIndex} disabled={(index == list.length-4)?true:false} >
                <ChevronRight size={25} />
              </button>
            </div>
        </section>
  )
}