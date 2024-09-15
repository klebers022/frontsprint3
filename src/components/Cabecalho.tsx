import { Link } from "react-router-dom";
import { Cabecalho1 } from "../styled";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Cabecalho() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Cabecalho1>
      <img src="logo-helpcar (1).png" alt="logo helpcar" />
      <h1 onClick={closeMenu}>HelpCar</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Ícones de abrir e fechar */}
      </button>
      <nav>
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/agendamento" onClick={closeMenu}>
              Agendamento
            </Link>
          </li>
          <li>
            <Link to="/participantes" onClick={closeMenu}>
              Participantes
            </Link>
          </li>
          <li>
            <Link to="/cadastro" onClick={closeMenu}>
              <button>Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </Cabecalho1>
  );
}
