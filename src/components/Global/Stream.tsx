import { useStream } from "../../hooks/useStream"

export default function Stream() {
  const {dispatch} = useStream()
  return (
    <div className="sm:max-w-xs inline-block bg-white overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mt-6 me-3 w-64" onClick={() => dispatch({type:"add-stream", payload:{id_Stream:1}}) }>
      <img 
        src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" 
        alt="Póster de la película Sonic 3: The Hedgehog" 
        className="object-cover w-64 h-64"
      />
      <div className="pt-2 pb-3 px-2 sm:pt-4 sm:pb-4 sm:px-4 text-center border-t border-gray-200 bg-gray-50">
        <h4 className="font-bold text-base sm:text-2xl text-gray-900">Netflix</h4>
       
      </div>
    </div>
  )
}
