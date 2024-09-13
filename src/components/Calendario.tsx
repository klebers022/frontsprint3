import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendario1 } from "../styled";

const AgendamentoOficina: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedOficina, setSelectedOficina] = useState("");

  const oficinas = [
    { id: 1, name: "Oficina A" },
    { id: 2, name: "Oficina B" },
    { id: 3, name: "Oficina C" },
  ];

  const horarios = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00"];

  const handleAgendar = () => {
    if (selectedOficina && selectedDate && selectedTime) {
      alert(
        `Agendamento feito para ${selectedOficina} no dia ${selectedDate?.toLocaleDateString()} às ${selectedTime}.`
      );
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <Calendario1>
      <div className="agendamento-container">
        <h2>Agendar Manutenção</h2>

        <label>Selecione a Oficina:</label>
        <select
          value={selectedOficina}
          onChange={(e) => setSelectedOficina(e.target.value)}
        >
          <option value="">Escolha uma oficina</option>
          {oficinas.map((oficina) => (
            <option key={oficina.id} value={oficina.name}>
              {oficina.name}
            </option>
          ))}
        </select>

        <label>Selecione a Data:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Escolha a data"
        />

        <label>Selecione o Horário:</label>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Escolha um horário</option>
          {horarios.map((hora) => (
            <option key={hora} value={hora}>
              {hora}
            </option>
          ))}
        </select>

        <button onClick={handleAgendar}>Agendar</button>
      </div>
    </Calendario1>
  );
};

export default AgendamentoOficina;
