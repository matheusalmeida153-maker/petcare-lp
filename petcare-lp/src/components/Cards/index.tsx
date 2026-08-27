
interface CardsProps{
    title: string
    description: string
    icon: React.ReactElement
    background: string;
}

export default function Cards ({ title, description, icon, background}: CardsProps) {
    return (
        
        <div className="bg-white border border-[#ccc] rounded-lg p-8 max-w-100">
            <div className={`${background} flex flex-col items-center justify-center rounded-2xl p-2 w-12`}>
                {icon}
            </div>

            <p className="mt-6 font-bold text-[18px]">{title}</p>

            <p className="mt-4">{description} </p>
        </div>

                
    );
}