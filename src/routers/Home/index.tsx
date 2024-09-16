import { useEffect } from "react";

// Definir o tipo para o window global para suportar a instância do chat
declare global {
  interface Window {
    watsonAssistantChatOptions: any;
    watsonChatInstance: any;
  }
}

export default function Home() {
  useEffect(() => {
    

    // Configurar as opções do Watson Assistant
    window.watsonAssistantChatOptions = {
      integrationID: "0762ce57-398d-4c2e-b1a9-edfaf15b13c5",
      region: "au-syd",
      serviceInstanceID: "664e0483-55e7-43ef-b5c5-5a0f4b64c4e3",
      onLoad: async (instance: any) => {
        await instance.render(); // Renderiza o chatbot
  
        window.watsonChatInstance = instance; // Armazena globalmente se necessário
      },
    };

    // Adicionar o script do Watson Assistant
    const script = document.createElement("script");
    script.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);

    // Limpeza quando o componente desmontar
    return () => {
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Função para abrir o chat ao clicar em qualquer botão
  const openChat = () => {
    if (window.watsonChatInstance) {
      window.watsonChatInstance.openWindow(); // Abre a janela do chat
    } else {
      console.error(
        "A instância do Watson Assistant ainda não está carregada."
      );
    }
  };

  return (
    <>
      <div className="container-header">
        <div className="text-header">
          <h1>REVOLUCIONANDO A MANUTENÇÃO AUTOMOTIVA</h1>
          <p>
            Encontre, Agende e Resolva com a HelpCar - Sua Oficina Inteligente e
            Conectada.
          </p>
          <button className="button" onClick={openChat}>
            CONTE CONOSCO
          </button>
        </div>
      </div>

      <section className="sec1">
        <h2>Por que escolher a help car?</h2>
        <hr />
        <div className="cards">
          <div className="card">
            <img className="icon" src="icon-engrenagem.png" alt="Engrenagem" />
            <h3>Ampla Rede de Oficinas</h3>
            <p>
              Nossa plataforma conecta você às melhores oficinas mecânicas,
              garantindo serviço de qualidade onde quer que você esteja.
            </p>
          </div>
          <div className="card">
            <img className="icon" src="carro.png" alt="Carro" />
            <h3>Atendimento Inteligente com IA</h3>
            <p>
              Nosso chatbot utiliza inteligência artificial para diagnósticos
              rápidos e eficientes, oferecendo suporte via texto, áudio e
              análise de imagens de problemas do veículo.
            </p>
          </div>
          <div className="card">
            <img className="icon" src="carregando.png" alt="Carregando" />
            <h3>Gestão de Estoque Otimizada</h3>
            <p>
              Trabalhamos com estoque mínimo de peças, adquirindo-as sob demanda
              após a confirmação do agendamento, economizando capital e
              garantindo eficiência.
            </p>
          </div>
        </div>

        <button onClick={openChat}>fazer avaliação</button>
      </section>

      <section className="sec2">
        <div className="text-sec2">
          <h2>Conheça o HelpCar Bot: Seu Mecânico Virtual Inteligente!</h2>
          <p>
            Nosso chatbot revolucionário combina a eficiência da inteligência
            artificial com a precisão da análise de dados para fornecer
            diagnósticos rápidos e confiáveis. Com a capacidade de entender
            texto e áudio, o HelpCar Bot é seu assistente mecânico 24/7, pronto
            para ajudar a identificar problemas e fornecer soluções imediatas.
            Além disso, com nossa tecnologia de visão computacional, o bot pode
            analisar imagens de painéis de veículos, explicando detalhadamente
            os sinais de alerta. Simplifique suas manutenções e economize tempo
            com o HelpCar Bot – a inovação ao seu alcance!
          </p>
        </div>

        <div className="chat-bot">
          <img src="logo-helpcar.ico" alt="Logo HelpCar" />
          <h2>chat-bot</h2>
          <p>
            descubra seu problema com apenas um clique com a ajuda do help car
            tudo fica mais facil
          </p>
          <button onClick={openChat}>conheça</button>
        </div>
      </section>

      <section className="sec3">
        <h2>quem somos?</h2>

        <div className="cards-sec3">
          <div className="card-sec3">
            <h3>nosso compromisso</h3>
            <p>
              Nosso compromisso é entregar uma experiência eficiente e confiável
              para nossos usuários. Buscamos constantemente melhorar nossos
              serviços, garantindo diagnósticos rápidos e precisos, e
              simplificando a manutenção automotiva com tecnologia de ponta.
            </p>
          </div>
          <div className="card-sec3">
            <h3>Nossa Visão de Futuro</h3>
            <p>
              Visualizamos um futuro onde a tecnologia de inteligência
              artificial revoluciona a indústria automotiva. Nosso objetivo é
              ser pioneiros nessa transformação, proporcionando soluções
              inovadoras que facilitem a vida dos motoristas e melhorem a
              eficiência dos serviços mecânicos.
            </p>
          </div>
          <div className="card-sec3">
            <h3>nosso desafio</h3>
            <p>
              Nosso desafio começou com uma proposta da Porto Seguro em nossa
              faculdade: intermediar a relação entre mecânicos e clientes.
              Aceitamos essa missão e, com muita pesquisa e desenvolvimento,
              criamos o HelpCar, uma plataforma que utiliza IA para tornar o
              diagnóstico e a manutenção automotiva mais acessíveis e
              eficientes.
            </p>
          </div>
          <div className="card-sec3">
            <h3>quem somos nós?</h3>
            <p>
              Somos um grupo de três estudantes apaixonados por tecnologia e
              inovação. Unimos nossas habilidades e conhecimentos para criar o
              HelpCar, uma solução inteligente que transforma a interação entre
              mecânicos e clientes, utilizando inteligência artificial para
              facilitar e otimizar os serviços automotivos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
