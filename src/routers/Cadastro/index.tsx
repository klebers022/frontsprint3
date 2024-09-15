import { useState } from "react";
import "./Cadastro.css";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    email: "",
    password: "",
    phone: "",
    cep: "",
    houseNumber: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCadastro = () => {
    const { name, cpf, email, password, phone, cep, houseNumber, city, state } =
      formData;
    if (
      !name ||
      !cpf ||
      !email ||
      !password ||
      !phone ||
      !cep ||
      !houseNumber ||
      !city ||
      !state
    ) {
      setError("Todos os campos obrigatórios devem ser preenchidos!");
      return;
    }
    setError("");
    alert(`Usuário ${name} cadastrado com sucesso!`);
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h2>Cadastro</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          name="name"
          placeholder="Nome (obrigatório)"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF (obrigatório)"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email (obrigatório)"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha (obrigatório)"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefone (obrigatório)"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cep"
          placeholder="CEP (obrigatório)"
          value={formData.cep}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="houseNumber"
          placeholder="Número da Casa (obrigatório)"
          value={formData.houseNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="complement"
          placeholder="Complemento"
          value={formData.complement}
          onChange={handleChange}
        />
        <input
          type="text"
          name="neighborhood"
          placeholder="Bairro"
          value={formData.neighborhood}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="Cidade (obrigatório)"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="Estado (obrigatório)"
          value={formData.state}
          onChange={handleChange}
          required
        />
        <button onClick={handleCadastro}>Cadastrar</button>
      </div>
    </div>
  );
};

export default Cadastro;
