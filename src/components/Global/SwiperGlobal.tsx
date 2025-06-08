import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from "react";
import 'swiper/swiper-bundle.css';
import Starts from '../../models/starts';
import Season from '../../models/seasons';
import Start from '../Starts/Start';
import SeasonCards from '../TV/SeasonCards';

type SwiperSeasonProps = {
    listStarts?:Starts[]
    listSeason?:Season[]
    type:string
}

export default function SwiperSeason({listStarts,listSeason,type}:SwiperSeasonProps) {
      const listLength:number = (listSeason?.length??0 >0)?listSeason?.length ?? 0:listStarts?.length ?? 0
      const [index,setIndex] = useState(0)
      const swiperRef = useRef<SwiperType | null>(null)
      const incrementIndex = () => {
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
              <Swiper className='w-full' breakpoints={{
                0: { slidesPerView: 2, spaceBetween:4 },  
                640: { slidesPerView: 3,spaceBetween:4  },  
                1024: { slidesPerView: 6,spaceBetween:4  }  
              }} onSwiper={(swiper) => (swiperRef.current = swiper)}onSlideChange={(swiper) => setIndex(swiper.realIndex)}>
                    {
                        (type==='starts')?
                        <div className='w-full'>
                          {
                            listStarts?.map((item,index) =>(
                                <SwiperSlide 
                                className='w-48 sm:w-56 md:w-62 lg:w-72 xl:w-80 flex-shrink-0'
                                key={index}>
                                    <Start
                                        key={`${index} / ${item}`}
                                        item={item}
                                    />
                                </SwiperSlide>
                            ))
                          }
                        </div>
                            
                        :
                        <div className='w-full'>
                          {
                            listSeason?.map((item,index) =>(
                                <SwiperSlide key={index} className='w-48 sm:w-56 md:w-62 lg:w-72 xl:w-80 flex-shrink-0'>
                                    <SeasonCards
                                        key={`${index} / ${item}`}
                                        item={item}
                                    />
                                </SwiperSlide>
                            ))
                          }
                        </div>
                         
                    }
              </Swiper>
              <button className="swiper-button-next-custom  bg-white border border-blue-500 text-blue-500 p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-300 h-11 ms-2  disabled:opacity-0" onClick={incrementIndex}  disabled={index >= listLength - 6} >
                <ChevronRight size={25} />
              </button>
            </div>
        </section>
  )
}