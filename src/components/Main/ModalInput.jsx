import React, {useEffect, useRef, useState} from 'react';

const ModalInput = ({title, placeholder, required, value, onChange, type, isError, errorMessage}) => {
    const [isActive, setIsActive] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsActive(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, []);

    return (
        <div className="border-sky-400 border-2 flex flex-row cursor-text border-b-0" onClick={() => {
                setIsActive(true)
                ref.current.focus()
            }
        }>
            {isActive && <div className=" bg-orange-400 w-4"></div>}

            <div className={isActive ? 'px-2' : 'px-6'}>
                <div className={`text-sky-400 text-xl mt-2 mb-1 `}>{title}
                    {required && <span className="text-orange-400"> *</span>}
                    {isError && <div className="text-red-400">{errorMessage}</div>}
                </div>

                <input value={value} type={type} onChange={onChange} className={`w-full text-xl mb-3`} placeholder={placeholder} ref={ref} onClick={() => setIsActive(true)}/>
            </div>
        </div>
    );
};

export default ModalInput;