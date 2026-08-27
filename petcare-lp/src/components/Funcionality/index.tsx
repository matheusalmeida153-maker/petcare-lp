import Cards from "../Cards";
import { CiCalendar } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiChat1 } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { PiSyringeDuotone } from "react-icons/pi";


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

                <div className="grid grid-cols-3 mt-14 gap-5">
                    <Cards 
                        title="Agendamento de consultas" 
                        description="Marque horários com clínicas parceiras em poucos toques e receba lembretes automáticos." 
                        icon={<CiCalendar size={32} color="#053305"/>} 
                        background="bg-[#7CA37C]"
                        />
                    <Cards 
                        title="Carteira de vacinação" 
                        description="Histórico completo de vacinas e vermifungos, com alerta antes de cada dose vencer." 
                        icon={<PiSyringeDuotone size={32} color="#FF645C"/>} 
                        background="bg-[#FF9E99]"
                        />
                    <Cards 
                        title="Histórico de saúde" 
                        description="Peso, exames e diagnósticos organizados por pet, prontos pra mostrar ao veterinário." 
                        icon={<IoMdHeartEmpty size={32} color="#8A804C" />} 
                        background="bg-[#FFEE8C]"
                        />
                    <Cards 
                        title="Chat com veterinários"
                        description="Tire dúvidas rápidas por mensagem, sem precisar sair de casa nem esperar em fila." 
                        icon={<CiChat1 size={32} color="#053305"/>} 
                        background="bg-[#7CA37C]"
                        />
                    <Cards 
                        title="Lembretes inteligentes" 
                        description="Notificações de banho, remédio e retorno, ajustadas à rotina de cada pet." 
                        icon={<FaRegClock size={32} color="#FF645C"/>} 
                        background="bg-[#FF9E99]"
                        />
                    <Cards 
                        title="Loja de produtos" 
                        description="ração, medicamentos e acessórios recomendados, com entrega direto na sua casa." 
                        icon={<CiShoppingCart size={32} color="#8A804C"/>} 
                        background="bg-[#FFEE8C]"
                        />
                </div>
        </section>
    );
}