
import { useStream } from '../hooks/useStream';
import SelectPlatform from '../components/Stream/SelectPlatform';
import { useEffect, useState } from 'react';
import Genres from '../models/genres';
import { API } from '../Utils/api';
import SwiperCardsPlatformStream from '../components/Stream/SwiperCardsStream';



export default function StreamPage() {
    const {state} = useStream()
    const [genres,setGenres] = useState<Genres[]>([])
    
    useEffect(()=>{
        if(state.type.trim()){
            API.getGenresPlatforms(state.type).then(value=>{
                setGenres(value)
            })
        }
    },[state.type])

    return (
        <>
            <div className="bg-neutral-50">
                <div className="w-full min-h-[calc(100vh-120px)] flex justify-center bg-neutral-50">
                    <main className="w-full max-w-7xl bg-white px-6 py-6 shadow-lg rounded-2xl">
                        {(state.view_stream)?
                            <div>
                                <SelectPlatform
                                    title={state.title}
                                    type={state.type}
                                />
                            </div>
                        :
                            <div>
                                {genres.map((item, i) => (
                                   <SwiperCardsPlatformStream
                                        key={i}
                                        title={item.name}
                                        id={state.id_stream}
                                        type={state.type}
                                        genre={item.id}
                                        
                                   />
                                ))}
                            </div>
                        }
                        
                        
                    </main>
                </div>
            </div>
        </>
    )
}
