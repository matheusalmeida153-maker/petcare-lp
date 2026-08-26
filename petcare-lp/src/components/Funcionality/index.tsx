import Cards from "../Cards";
import { IoMdStar } from "react-icons/io";

export default function Funcionality () {
    return (
        <section className="flex flex-col items-center justify-center px-20">
                <p className="bg-[#DCEFE4] text-[#153229] px-8 py-2.5 rounded-full font-bold">
                    Funcionalidades
                </p>
            
                <h2 className="py-9 max-w-500px flex text-center text-3xl font-bold text-[#153229] ">
                    Tudo que o seu pet precisa, num só lugar
                </h2>

                <p className="flex text-center text-[#182420] max-w-600px">
                    Da vacina ao passeio, o PetCare acompanha cada etapa do cuidado - pra você nunca perder nada de vista.
                </p>

                <div className="grid grid-cols-3 mt-14">
                    <Cards title="123" description="234" icon={<IoMdStar />} />
                    <Cards title="123" description="234" icon={<IoMdStar />} />
                    <Cards title="123" description="234" icon={<IoMdStar />} />
                    <Cards title="123" description="234" icon={<IoMdStar />} />
                    <Cards title="123" description="234" icon={<IoMdStar />} />
                    <Cards title="123" description="234" icon={<IoMdStar />} />
                </div>
        </section>
    );
}