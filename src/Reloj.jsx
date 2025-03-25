import { useState, useEffect } from 'react'
import './index.css'

export function Reloj() {
    const [hora, setHora] = useState(new Date());
    const [showDot, setShowDot] = useState(true);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date());
            setShowDot((prev) => !prev)
        }, 500);

        return () => clearInterval(intervalo);
    }, []);

    const diasSemana = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    const diaActivo = hora.getDay();

    return (
        <div className='flex rounded-4xl select-none pr-8 pl-8 border-8 border-solid border-[#2d2d2d] w-fit'>
            <div className='flex flex-col justify-center items-center text-[#2d2d2d] w-12 pr-6 text-[1.8rem] font-bold'>
                {diasSemana.map((dia, index) => (
                    <span key={dia} className={index === diaActivo ? 'text-white' : ''}>
                        {dia}
                    </span>
                ))}
            </div>

            <div className='inline-block text-[13rem] pl-6'>
                <span>{String(hora.getHours()).padStart(2, '0')}</span>
                <span className={showDot ? 'invisible' : ''}>:</span>
                <span>{String(hora.getMinutes()).padStart(2, '0')}</span>
            </div>
        </div>
    );
}