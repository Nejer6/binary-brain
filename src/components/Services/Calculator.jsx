import React, {useState} from 'react';
import Button from "@/components/Button";
import WebsiteCalculator from "@/components/Services/WebsiteCalculator";
import MobileAppCalculator from "@/components/Services/MobileAppCalculator";
import BigBlock from "@/components/BigBlock";
import BigBlockWithTitle from "@/components/BigBlockWithTitle";
import SmallBlock from "@/components/SmallBlock";

const ProjectType = {
    WEBSITE: 'Website',
    MOBILE_APP: 'Mobile App',
    WEBSITE_WITH_MOBILE_APP: 'Website with Mobile App'
}

const Calculator = () => {

    const [selectedProjectType, setSelectedProjectType] = useState(null)

    return (
        <div className="mx-3 md:mx-16 mt-52 sm:mt-40">
            <div className="uppercase text-orange-400 text-center text-5xl font-tektur">Калькулятор услуг</div>
            <div className="text-center text-2xl mt-12">Здесь вы можете примерно расчитать стоимость нашиг услуг под ваш
                проект
            </div>

            <BigBlockWithTitle title="Выберете тип проекта:">
                <SmallBlock className="flex justify-center">
                    <Button text="Веб-сайт"
                            className="min-w"
                            onClick={() => setSelectedProjectType(ProjectType.WEBSITE)}
                            selected={selectedProjectType === ProjectType.WEBSITE}
                    />
                    <Button text="Мобильное приложение"
                            className="mx-6 h-16"
                            onClick={() => setSelectedProjectType(ProjectType.MOBILE_APP)}
                            selected={selectedProjectType === ProjectType.MOBILE_APP}
                    />
                    <Button text="Мобильное приложение и веб-сайт"
                            onClick={() => setSelectedProjectType(ProjectType.WEBSITE_WITH_MOBILE_APP)}
                            selected={selectedProjectType === ProjectType.WEBSITE_WITH_MOBILE_APP}
                    />
                </SmallBlock>
            </BigBlockWithTitle>

            <BigBlock>
                {selectedProjectType === ProjectType.WEBSITE && <WebsiteCalculator/>}
                {selectedProjectType === ProjectType.MOBILE_APP && <MobileAppCalculator/>}
                {/*{selectedProjectType === ProjectType.WEBSITE_WITH_MOBILE_APP && <WebsiteWithMobileAppCalculator/>}*/}
            </BigBlock>

            {selectedProjectType && <div className="flex flex-col items-center text-2xl font-bold mt-24">
                <div>Примерная стоимость проекта:</div>
                <div>186 500р</div>
                <Button className="mt-6" text="Заказать проект"/>
            </div>}
        </div>
    );
};

export default Calculator;