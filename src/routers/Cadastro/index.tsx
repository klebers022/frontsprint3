import{ useState } from 'react';
import './Login.css';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleCadastro = () => {
    if (!name || !email || !password) {
      setError('Todos os campos são obrigatórios!');
      return;
    }
    
    setError('');
    alert(`Usuário ${name} cadastrado com sucesso!`);
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h2>Cadastro</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Nome (obrigatório)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email (obrigatório)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha (obrigatório)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleCadastro}>Cadastrar</button>
      </div>
    </div>
  );
};

export default Cadastro;
