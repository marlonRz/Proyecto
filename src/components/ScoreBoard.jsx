// src/components/ScoreTable.jsx
import React, { useEffect, useState } from "react";
import { getTopScores } from "../stores/getScores";

const ScoreTable = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const topScores = await getTopScores();
      setScores(topScores);
    };

    fetchScores();
  }, []);

  return (
    <div style={{ background: "#111", color: "#fff", padding: "1rem", borderRadius: "10px" }}>
      <h2>🏆 Tabla de Resultados</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid white" }}>
            <th style={{ textAlign: "left" }}>Nombre</th>
            <th>Puntaje</th>
            <th>Errores</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.score}</td>
              <td>{s.incorrect}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTable;
