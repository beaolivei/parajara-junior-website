import { BlogPost } from '../types';

const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'imposto-de-renda-para-produtor-rural-guia-completo-2024',
    title: 'Imposto de Renda para Produtor Rural: O Guia Completo 2024',
    text: `A declaração do Imposto de Renda para o produtor rural possui particularidades que exigem atenção. Desde a forma de apuração do resultado da atividade rural até as deduções permitidas, é fundamental estar bem assessorado para evitar problemas com o Fisco e otimizar a carga tributária. Neste post, detalhamos o passo a passo, as novidades para este ano e como a contabilidade especializada pode ser sua maior aliada.\n\nO resultado da atividade rural pode ser apurado pelo resultado real ou presumido, e a escolha correta pode gerar uma economia significativa. Além disso, despesas com custeio, investimentos e a folha de pagamento podem ser deduzidas, mas é preciso manter a documentação organizada. Falamos também sobre o Livro Caixa Digital do Produtor Rural (LCDPR), obrigatório para quem fatura acima de um certo limite.`,
    tags: ['Imposto de Renda', 'Produtor Rural', 'Tributação'],
    imageUrl: 'https://picsum.photos/seed/blog1/800/600',
    date: '15 de Julho, 2024',
  },
  {
    id: 2,
    slug: 'credito-rural-como-acessar-e-utilizar-de-forma-estrategica',
    title: 'Crédito Rural: Como Acessar e Utilizar de Forma Estratégica',
    text: `O crédito rural é uma ferramenta essencial para o desenvolvimento do agronegócio, permitindo investimentos em tecnologia, custeio da safra e expansão da produção. No entanto, o processo para acessar essas linhas de financiamento pode ser complexo. Abordamos os principais programas de crédito disponíveis, como o PRONAF e o PRONAMP, os requisitos necessários e como um bom planejamento financeiro e contábil pode aumentar suas chances de aprovação.\n\nUm projeto técnico bem elaborado e a comprovação da capacidade de pagamento são cruciais. A contabilidade entra como peça-chave, organizando as informações financeiras e demonstrando a saúde do seu negócio para as instituições financeiras. Explicamos como preparar sua documentação e usar o crédito de forma inteligente para alavancar seus resultados.`,
    tags: ['Crédito Rural', 'Financiamento', 'Agronegócio'],
    imageUrl: 'https://picsum.photos/seed/blog2/800/600',
    date: '02 de Julho, 2024',
  },
  {
    id: 3,
    slug: 'os-5-beneficios-fiscais-que-todo-pecuarista-precisa-conhecer',
    title: 'Os 5 Benefícios Fiscais que Todo Pecuarista Precisa Conhecer',
    text: `A pecuária, assim como outras atividades rurais, possui uma série de incentivos e benefícios fiscais que podem reduzir drasticamente os impostos a pagar. Muitos produtores, por falta de informação ou assessoria, acabam perdendo essas oportunidades. Listamos e explicamos 5 benefícios importantes, como o diferimento do ICMS, créditos de PIS/COFINS na aquisição de insumos e as regras para depreciação de animais e benfeitorias.\n\nEntender esses mecanismos é vital para a competitividade da sua fazenda. A correta aplicação desses benefícios não só aumenta a margem de lucro, mas também garante a conformidade legal, evitando multas e autuações. Uma contabilidade especializada em agronegócio conhece a fundo essa legislação e pode criar um planejamento tributário sob medida para a sua operação.`,
    tags: ['Pecuária', 'Benefícios Fiscais', 'Contabilidade'],
    imageUrl: 'https://picsum.photos/seed/blog3/800/600',
    date: '21 de Junho, 2024',
  },
];

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockBlogPosts);
    }, 500);
  });
};
