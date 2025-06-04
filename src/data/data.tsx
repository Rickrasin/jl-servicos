import {
  FaCamera,
  FaNetworkWired,
  FaBolt,
  FaDoorOpen,
  FaShieldAlt
} from "react-icons/fa";

import { PiSirenFill } from "react-icons/pi";

const services = [
  {
    title: "Câmeras de Segurança ",
    description: "Instalação e manutenção de sistemas de vigilância modernos.",
    icon: FaCamera
  },
  {
    title: "Automação de Portões",
    description:
      "Segurança e praticidade com portões automáticos de alta qualidade.",
    icon: FaDoorOpen
  },
  {
    title: "Portaria Eletrônica",
    description: "Soluções eficientes para condomínios e empresas.",
    icon: FaShieldAlt
  },
  {
    title: "Infraestrutura de Redes",
    description: "Projetos e instalações de redes estruturadas confiáveis.",
    icon: FaNetworkWired
  },
  {
    title: "Serviços Elétricos",
    description:
      "Instalações e manutenções elétricas residenciais e comerciais.",
    icon: FaBolt
  },

  {
    title: "Sensores e Alarmes",
    description: "Proteção contra invasões e monitoramento de segurança.",
    icon: PiSirenFill
  }
];

export default services;
