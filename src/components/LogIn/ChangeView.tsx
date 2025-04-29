

type ChangeViewProps = {
    isRegister : boolean
    changeView : () => void
}

export default function ChangeView({isRegister, changeView} : ChangeViewProps) {
    return (
        <>  
            <div className='flex flex-row w-full border-b-4 border-sky-500 justify-center'>
                <button type="button" className='uppercase text-center text-2xl font-black  py-2 me-8 cursor-pointer opacity-30 disabled:opacity-100' disabled={!isRegister}  onClick={changeView} >Iniciar Sesión</button>
                <button type="button" className='uppercase text-center text-2xl font-black  py-2 me-8 cursor-pointer opacity-30 disabled:opacity-100' disabled={isRegister} onClick={changeView}>Registrarse</button>
            </div>
        
        </>
    )
}
