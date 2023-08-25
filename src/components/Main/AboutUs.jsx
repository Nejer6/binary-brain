import React, {useRef} from 'react';


const AboutUs = () => {
    const ref = useRef(null)
    // const sizes = useWindowSize()
    // useEffect(() => {
    //     let r
    //     if (ref.current != null) {
    //          r = new rive.Rive({
    //             src: "/about-us.riv",
    //             // Or the path to a public Rive asset
    //             // src: '/public/example.riv',
    //             canvas: ref.current,
    //             autoplay: true,
    //             // stateMachines: "bumpy",
    //             onLoad: () => {
    //                 r.resizeDrawingSurfaceToCanvas();
    //             },
    //         });
    //     }
    //
    //     const resizeHandler = () => {
    //         r.resizeDrawingSurfaceToCanvas()
    //     }
    //
    //     window.addEventListener('resize', resizeHandler)
    //
    //     return () => {
    //         window.removeEventListener('resize', resizeHandler)
    //     }
    //
    // }, [ref, sizes.width, sizes])

    return (
        <div>
            <a name="1" className="h-14 block"/>
            <div className="mt-20">
                <div className="flex justify-between flex-wrap-reverse md:flex-nowrap items-center gap-8">

                    {/*<img src="/main.svg" alt="" className="w-full lg:w-1/2"/>*/}
                    {/*<RiveComponent*/}
                    {/*    onMouseEnter={() => rive && rive.play()}*/}
                    {/*    onMouseLeave={() => rive && rive.pause()}*/}
                    {/*    height={300}*/}
                    {/*/>*/}
                    {/*<Rive src="/about-us.riv" className="w-full lg:w-1/2 h-full"/>*/}
                    {/*<Rive src="/about-us.riv" height={100}/>*/}
                    {/*<canvas ref={ref} height={Number.MAX_VALUE} width={Number.MAX_VALUE} className="w-full md:w-1/2 h-full"/>*/}
                    <object type="image/svg+xml" data="/main.svg" className="w-full md:w-1/2 md:order-first order-last"/>
                    <div className="w-full lg:w-1/2 order-first md:order-last">
                        <div className="text-orange-400 text-5xl font-normal uppercase text-center lg:text-start font-tektur">О нас</div>
                        <div className="text-2xl leading-10 mt-12 hyphens-auto">
                            Мы молодая IT-компания, которая помогает вашему бизнесу вырасти. Мы уверены, что разработка ПО - это не просто создание кода, это искусство, требующее многолетнего опыта и экспертизы. Мы ценим инновации и стремимся к лучшему. Наша команда увлеченных профессионалов всегда готова помочь нашим клиентам достичь своих целей.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;