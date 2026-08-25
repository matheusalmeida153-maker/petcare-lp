import {ReactElement} from "react"

interface CardsProps{
    title: string
    description: string
    icon: React.ReactElement;
}

export default function Cards ({ title, description, icon}: CardsProps) {
    return (
        <div className="bg-white mb-12 border border-[#ccc] rounded-lg p-8 max-w-[350px]">
                    <div className="bg=[#DCEFE4] rounded-2x1 p2 w-12">
                        {icon}
                    </div>

                    <p className="mt-6 font-bold text-[18px]">{title}</p>

                    <p className="mt-4">{description} </p>
        </div>

                
    );
}