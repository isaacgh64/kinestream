import Stream from "./Stream";


type SelectPlatformProps = {
    title: string,
}


export default function SelectPlatform({title}:SelectPlatformProps) {
    const elements = []
    for(var i=0;i<30;i++){
        elements.push(<Stream key={i}/>)
    }
  return (
    <>
        <section className="text-center py-2">
            <h2 className="text-4xl font-bold text-sky-600 mb-2">{title}</h2>
        </section>
        <div className="flex flex-wrap gap-6 justify-center">
            {elements}
        </div>
    </>
     
  )
}
