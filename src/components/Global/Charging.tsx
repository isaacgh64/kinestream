
type ChargingProps = {
  text:string
}

export default function Charging({text}:ChargingProps) {
  return (
    <div className="z-120 fixed inset-0 bg-white flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-lg font-medium text-gray-700">{text}</p>
      </div>
    </div>
  )
}
