import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="https://i.ibb.co/q3mvQ5cV/Gemini-Generated-Image-7g9yg77g9yg77g9y.png" 
              alt="Parajara Moraes Alves Júnior"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Parajara Júnior</h2>
            <p className="text-green-700 font-semibold text-lg mb-6">Contador especialista no agronegócio de Mato Grosso do Sul.</p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Com vasta experiência dedicada ao setor que move o Brasil, Parajara Moraes Alves Júnior, à frente da Junior Contabilidade, é mais que um contador: é um parceiro estratégico para o produtor rural. Nascido e criado no coração do agronegócio, ele compreende profundamente os desafios e as oportunidades do campo.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Nossa missão é simplificar a complexidade fiscal e financeira da sua fazenda, permitindo que você foque no que faz de melhor: produzir. Através de um planejamento tributário eficiente e uma gestão contábil precisa, transformamos dados em decisões que impulsionam a lucratividade e garantem a sustentabilidade do seu negócio.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Na Junior Contabilidade & Assessoria Rural, falamos a sua língua e trabalhamos pelo seu sucesso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;