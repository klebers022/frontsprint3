import React from "react";
import "./participantes.css";
import { Participante } from "../../Types";

const participantes: Participante[] = [
    {
      id: 1,
      nome: "Gabriel Thomas",
      rm: "558637",
      github: "https://github.com/GThomaz03",
      redesSociais: {
        instagram: "https://instagram.com/gthomaz03",
        linkedin: "https://www.linkedin.com/in/joaosilva",
      },
      foto: "public\\gabriel.png", // URL da foto
    },
    {
      id: 2,
      nome: "Kleber da Silva",
      rm: "557887",
      github: "https://github.com/klebers022",
      redesSociais: {
        instagram: "https://instagram.com/klebers022",
        linkedin: "https://www.linkedin.com/in/mariaoliveira",
      },
      foto: "public\\kleber.png", // URL da foto
    },
    {
      id: 3,
      nome: "Pedro Dovigo",
      rm: "556491",
      github: "https://github.com/PedroDovigo",
      redesSociais: {
        instagram: "https://instagram.com/pedrodovigo",
        linkedin: "https://www.linkedin.com/in/pedrosantos",
      },
      foto: "public\\pedro.png", // URL da foto
    },
  ];
  
  const ParticipantCard: React.FC<{ participante: Participante }> = ({
    participante,
  }) => (
    <div className="participant-card">
      <img
        src={participante.foto}
        alt={participante.nome}
        className="participant-photo"
      />
      <h2 className="participant-name">{participante.nome}</h2>
      <p className="participant-rm">RM: {participante.rm}</p>
      <a
        href={participante.github}
        className="participant-github"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <div className="participant-socials">
        <a
          href={participante.redesSociais.instagram}
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href={participante.redesSociais.linkedin}
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
  
  const App = () => {
    return (
      <div className="container">
        <h1 className="title">Participantes</h1>
        <div className="participant-list">
          {participantes.map((participante) => (
            <ParticipantCard key={participante.id} participante={participante} />
          ))}
        </div>
      </div>
    );
  };
  
  export default App;
