import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-green-50 to-gray-100 pt-24 md:pt-32 pb-20 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="md:w-3/5 text-center md:text-left">
            <span className="font-semibold text-green-700 text-lg">Olá, sou Parajara Júnior</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 my-4 leading-tight">
              Contabilidade Estratégica para o <span className="text-green-600">Agronegócio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
              Simplifico a gestão fiscal e financeira da sua fazenda para que você foque no que realmente importa: a produção. Vamos juntos transformar seus resultados.
            </p>
            <a 
              href="#contato" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-lg text-lg uppercase transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Fale com um especialista
            </a>
          </div>

          {/* Image Content */}
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-full max-w-sm">
                <img 
                  src="https://i.ibb.co/GQKFsHkd/Gemini-Generated-Image-q5ppluq5ppluq5pp.png" 
                  alt="Parajara Moraes Alves Júnior em sua mesa de escritório"
                  className="rounded-lg shadow-2xl w-full z-10 relative"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-green-300 rounded-lg z-0 transform -rotate-3"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;