import HeaderMain from "@/components/Main/HeaderMain";
import Main from "@/components/Main/Main";
import AboutUs from "@/components/Main/AboutUs";
import OurServices from "@/components/Main/OurServices";
import {useEffect, useRef, useState} from "react";
import Team from "@/components/Main/Team";
import NotificationModalWrapper from "@/components/NotificationModalWrapper";

export default function Home() {
    const chapters = [
        {ref: useRef(null), title: "Главная"},
        {ref: useRef(null), title: "О нас"},
        {ref: useRef(null), title: "Услуги"},
        {ref: useRef(null), title: "Команда"}
    ]
    const [activeChapter, setActiveChapter] = useState(chapters[0])
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'unset'
    }, [isModalOpen])


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2

            const activeChapter = chapters.find(chapter => {
                if (chapter.ref.current !== null) {
                    const chapterTop = chapter.ref.current.offsetTop
                    const chapterBottom = chapterTop + chapter.ref.current.offsetHeight
                    return scrollPosition >= chapterTop && scrollPosition <= chapterBottom
                }
            })

            if (activeChapter) {
                setActiveChapter(activeChapter)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <NotificationModalWrapper isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <HeaderMain tabs={chapters} activeTab={activeChapter}/>
            <div className="mx-3 md:mx-16">
                <div ref={chapters[0].ref}>
                    <Main onClick={() => setIsModalOpen(true)}/>
                </div>
                <div ref={chapters[1].ref}>
                    <AboutUs/>
                </div>
                <div ref={chapters[2].ref} className="pt-20">
                    <OurServices/>
                </div>
                <div ref={chapters[3].ref} className="pt-20">
                    <Team/>
                </div>
            </div>
        </NotificationModalWrapper>
    )
}
