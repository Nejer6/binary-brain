import React from 'react';

const OrderStep = ({task}) => {
    const isCompleted = task.state === "выполнено"
    const inProgress = task.state === "в процессе"

    return (
        <div className="flex xl:w-[984px]">
            <div className="grow hidden sm:block">
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
                        className={`text-4xl w-32 uppercase ${task.state ? "text-orange-400" : "text-neutral-400"}`}>Шаг {task.step}</div>
                    {isCompleted &&
                        <div className="text-white text-xl uppercase bg-sky-400 leading-loose">{task.state}</div>}
                    {inProgress &&
                        <div className="text-white text-xl uppercase bg-orange-400 leading-loose">{task.state}</div>}

                </div>

                <div className={task.state ? "text-black" : "text-neutral-400"}>
                    <div className={`w-full text-4xl uppercase mt-6`}>{task.name}</div>

                    <div className="w-full text-xl leading-loose hyphens-auto mt-3">{task.description}</div>
                </div>

            </div>
        </div>
    );
};

export default OrderStep;