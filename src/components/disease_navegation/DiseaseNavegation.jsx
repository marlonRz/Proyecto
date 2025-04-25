import "./DiseaseNavegation.css"
import { motion } from "framer-motion";

const sections = [
  { id: 'que-es', label: '¿QUÉ ES?' },
  { id: 'sintomas', label: 'SÍNTOMAS' },
  { id: 'tratamiento', label: 'TRATAMIENTO' },
  { id: 'prevencion', label: 'PREVENCIÓN' }
];

const DiseaseNavigation = ({ setSeccion, activeSection }) => {
  return (
    <div className="disease-navigation">
      {sections.map((section) => (
        <motion.button
          key={section.id}
          className={`disease-button ${activeSection === section.id ? 'active' : ''}`}
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