import Stream from "./Stream";


export default function SelectPlatform() {
    const elements = []
    for(var i=0;i<30;i++){
        elements.push(<Stream key={i}/>)
    }
  return (
    <>
        <section className="text-center py-2">
            <h2 className="text-4xl font-bold text-sky-600 mb-2">Selecciona la plataforma<br></br>en la que quieres ver el contenido</h2>
        </section>
        <div className="flex flex-wrap gap-6 justify-center">
            {elements}
        </div>
    </>
     
  )
}
