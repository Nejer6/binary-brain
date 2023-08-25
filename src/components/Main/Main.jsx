import React, {useRef} from 'react';
import Button from "@/components/Main/Button";
import Scene from "@/components/Main/Scene";
import useWindowSize from "@/hooks/useWindowSize";

const Main = ({onClick}) => {

    const size = useWindowSize()

    const videoRef = useRef(null)

    // useEffect(() => {
    //     const video = videoRef.current
    //     if (video) {
    //         video.addEventListener('ended', () => {
    //             video.currentTime = 0
    //             video.play()
    //         })
    //     }
    // }, [videoRef])

    return (
        <div>
            <div className="pt-52 sm:pt-20 md:pt-40">
                <div className="flex justify-evenly items-center flex-wrap md:flex-nowrap gap-8">
                    <div className="w-full md:w-1/2 order-last md:order-first">
                        <span className="text-black text-5xl font-normal uppercase font-tektur">Окунись в </span>
                        <span className="text-orange-400 text-5xl font-normal uppercase font-tektur">новую эпоху IT</span>
                        <div className="text-2xl leading-10 mt-12 hyphens-auto">
                            Мы предоставляем широкий спектр услуг, включая разработку ПО, создание инновационных дизайн-решений, разработку мобильных приложений для платформы Android и создание современных веб-сайтов.
                        </div>
                        <Button className="h-16 w-80 mt-6" text="связаться" onClick={onClick}/>
                    </div>

                    {/*<object type="image/svg+xml" data="/main.svg" className="w-full md:w-1/2"/>*/}
                    {size.width >= 744 && <Scene className="w-full md:w-1/2 2xl:w-1/3 mx-20 md:mx-0 order-first md:order-last"/>}
                    {size.width < 744 && <video className="order-first md:order-last px-14" ref={videoRef} autoPlay={true} loop={true} muted={true} >
                        <source src="/main.mp4" type="video/mp4"/>
                    </video>}
                </div>
            </div>
        </div>
    );
};

export default Main;