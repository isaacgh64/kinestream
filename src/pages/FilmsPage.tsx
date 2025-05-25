import { useEffect, useState } from 'react';
import SelectPlatform from '../components/Global/SelectPlatform';
import { useStream } from '../hooks/useStream';
import SwiperCardsStream from '../components/Stream/SwiperCardsStream';

export default function FilmsPage() {
    const {state} = useStream()
    const [disabled,setDisabled] = useState(true)
    useEffect(()=>{
      if(state.id_Stream === -1){
        setDisabled(true)
      }else{
        setDisabled(false)
      }
    },[state.id_Stream])
    return (
        <>
            <div className="bg-neutral-50">
                <div className="w-full min-h-[calc(100vh-120px)] flex justify-center bg-neutral-50">
                    <main className="w-full max-w-7xl bg-white px-6 py-6 shadow-lg rounded-2xl">
                        <div className={(!disabled)?'hidden':''}>
                             <SelectPlatform/>
                        </div>
                        <div className={(disabled)?'hidden':''}>
                          <SwiperCardsStream
                            title="Ciencia ficción"
                          />
                          <SwiperCardsStream
                            title="Misterio"
                          />
                          <SwiperCardsStream
                            title="Miedo"
                          />
                          <SwiperCardsStream
                            title="Dibujos"
                          />
                        </div>
                     
                    </main>
                </div>
            </div>
        </>
    )
}