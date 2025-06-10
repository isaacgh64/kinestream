
import { useEffect, useState } from "react";
import 'swiper/swiper-bundle.css';
import CardsStream from './CardsStream';
import Platform from '../../models/platform';
import { API } from '../../Utils/api';
import Charging from "../Global/Charging";

type SwiperCardsStreamProps = {
    title: string,
    type:string
}

export default function SwiperCardsStream({title,type}:SwiperCardsStreamProps) {
      const [elements, setElements] = useState<Platform[]>([]);
      useEffect(()=>{
        if(type.trim()){
           API.getPlatforms(type).then(value=>{
            setElements(value)
          })
           window.scrollTo(0, 0);
        }
         
        },[type])
      
    return (
    <>
      {elements.length > 0 ? (
        <section className="text-center py-4 px-4 sm:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-sky-600 mb-4 mx-auto max-w-xl sm:max-w-2xl">
            {`Selecciona la plataforma donde quieres ver las ${title} disponibles`}
          </h2>

          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-6 sm:mt-10">
            {elements.map((item, index) => (
              <CardsStream key={`${index} / ${item}`} item={item} />
            ))}
          </div>
        </section>
      ) : (
        <Charging text={'Cargando...'}/>
      )}
    </>

  )
}
