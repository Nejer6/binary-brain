import React from 'react';

const OrderStep = ({step_info, step, is_completed}) => {
    const isCompleted = is_completed || (step_info.id < step)
    const inProgress = !is_completed && (step_info.id === step)
    const notStart = !is_completed && (step_info.id > step)

    return (
        <div className="flex w-full xl:w-[984px]">
            <div className="hidden sm:block">
                <div className="me-3 flex flex-col items-center h-full">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {(isCompleted || inProgress) &&
                            <circle cx="32" cy="32" r="31" fill="white" stroke="#F98D0D" strokeWidth="2"
                                    strokeDasharray={inProgress ? 2 : 0}/>}
                    </svg>

                    {isCompleted && <div className="grow border-orange-400 border border-dashed w-0"/>}
                </div>
            </div>


            <div className="mb-12">
                <div className="flex justify-between sm:justify-start sm:gap-3">
                    <div
                        className={`text-4xl w-32 uppercase font-tektur ${!notStart ? "text-orange-400" : "text-neutral-400"}`}>Шаг {step_info.id}</div>
                    {isCompleted &&
                        <div className="text-white text-xl uppercase bg-sky-400 leading-loose">выполнено</div>}
                    {inProgress &&
                        <div className="text-white text-xl uppercase bg-orange-400 leading-loose">в процессе</div>}

                </div>

                <div className={!notStart ? "text-black" : "text-neutral-400"}>
                    <div className={`w-full text-4xl uppercase mt-6 font-tektur`}>{step_info.title}</div>

                    <div className="w-full text-xl leading-loose hyphens-auto mt-3">{step_info.description}</div>
                </div>

            </div>
        </div>
    );
};

export default OrderStep;