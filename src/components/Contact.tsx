import React from 'react';
import profile from '../../images/profile.png';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-green-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Vamos Conversar?</h2>
        <p className="text-lg text-green-200 mb-8 max-w-2xl mx-auto">
          Entre em contato e descubra como nossa assessoria contábil pode impulsionar os resultados do seu agronegócio.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-left">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg flex-1 max-w-md">
            <h3 className="text-2xl font-bold mb-4">Informações de Contato</h3>
            <div className="space-y-4">
              <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>+55 (67) 99999-9999</p>
              <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>contato@juniorcontabilidade.com.br</p>
              <p className="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>Av. Afonso Pena, 1234 - Campo Grande, MS</p>
            </div>
            <a 
              href="https://wa.me/5567999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg uppercase transition-transform transform hover:scale-105"
            >
              Fale pelo WhatsApp
            </a>
          </div>
          <div className="flex-1 max-w-md">
             <img src={profile} alt="Parajara Moraes Alves Júnior em uma cadeira" className="rounded-lg shadow-2xl w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;