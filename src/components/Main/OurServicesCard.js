import React, {useRef, useState} from 'react';
import Lottie from "lottie-react";
import flow3 from '../../../public/lottie/Flow 2.json'

const OurServicesCard = ({title, text, src}) => {
    // const [isHovered, setIsHovered] = useState(false)
    const [hoverProgress, setHoverProgress] = useState(0)

    const animationRef = useRef(null)

    const handleMouseEnter = () => {
        // setIsHovered(true)
        setHoverProgress(0)
        if (animationRef.current) {
            console.log(animationRef.current.getDuration())
            animationRef.current.play()
            // animationRef.current.playSegments([0, 0.5], false)
        }
    }

    const handleMouseLeave = () => {
        // setIsHovered(false)
        setHoverProgress(1)
        if (animationRef.current) {
            animationRef.current.stop()
            // animationRef.current.playSegments([0.5, 1], true)
        }
    }

    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="w-full flex justify-center">
                <div className="flex items-center bg-sky-400 justify-center w-2/3 md:w-full md:h-64">
                    {/*<img src={src} className="w-55 h-55" alt=""/>*/}
                    <Lottie
                        lottieRef={animationRef}
                        animationData={flow3}
                        autoplay={false}
                        loop={false}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}

                    />
                </div>
            </div>

            <div className="text-center uppercase text-orange-400 text-4xl mb-3 mt-14 font-tektur">{title}</div>
            <div className="text-2xl leading-10 hyphens-auto">{text}</div>

        </div>
    );
};

export default OurServicesCard;