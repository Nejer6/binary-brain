import {Inter} from 'next/font/google'
import Header from "@/components/Header";
import Main from "@/components/Main/Main";
import AboutUs from "@/components/Main/AboutUs";
import OurServices from "@/components/Main/OurServices";
import Footer from "@/components/Footer";
import {useEffect, useRef, useState} from "react";
import Team from "@/components/Main/Team";
import ModalWindow from "@/components/Main/ModalWindow";
import Layout from "@/components/Layout";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const chapters = [
        {ref: useRef(), title: "Главная"},
        {ref: useRef(), title: "О нас"},
        {ref: useRef(), title: "Услуги"},
        {ref: useRef(), title: "Команда"},
        // {ref: useRef(), title: "Контакты"},
        // {ref: useRef(), title: "Отслеживание заказа"}
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
                const chapterTop = chapter.ref.current.offsetTop
                const chapterBottom = chapterTop + chapter.ref.current.offsetHeight
                return scrollPosition >= chapterTop && scrollPosition <= chapterBottom
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
        <>
            <Layout>
                <Header tabs={chapters} activeTab={activeChapter}/>

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
            </Layout>


            {/*<Footer/>*/}

            {isModalOpen && <ModalWindow onClick={() => setIsModalOpen(false)}/>}
        </>

    )
}
