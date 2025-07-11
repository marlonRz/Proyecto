import "./DiseaseNavegation.css";
import { motion } from "framer-motion";

const sections = [
  { id: 'que-es', label: '¿QUÉ ES?' },
  { id: 'sintomas', label: 'SÍNTOMAS' },
  { id: 'tratamiento', label: 'TRATAMIENTO' },
  { id: 'prevencion', label: 'PREVENCIÓN' }
];

const DiseaseNavigation = ({ setSeccion, activeSection }) => {
  // Filtrar las secciones para excluir la activa
  const filteredSections = sections.filter(section => section.id !== activeSection);

  return (
    <div className="disease-navigation">
      {filteredSections.map((section) => (
        <motion.button
          key={section.id}
          className="disease-button"
          onClick={() => setSeccion(section.id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {section.label}
        </motion.button>
      ))}
    </div>
  );
};

export default DiseaseNavigation;