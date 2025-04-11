import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "I vantaggi della diagnostica remota",
  desc: "Anziani, pazienti fragili, comunità isolate o in emergenza: tutti possono ricevere una diagnosi rapida, sicura e non invasiva.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Riduce gli spostamenti del paziente",
      desc: "Perfetto per chi ha difficoltà motorie o vive in aree remote.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Controllo medico in tempo reale",
      desc: "L'operatore sanitario guida il robot da remoto, mantenendo il rigore clinico.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Meno stress, più continuità di cura",
      desc: "Un'esperienza meno invasiva per il paziente, più fluida per il sistema sanitario.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Una tecnologia concreta, pensata per le persone",
  desc: "Vogliamo dimostrare che è già possibile usare la robotica in modo semplice e umano, per migliorare la vita di pazienti e medici, senza allontanare nessuno dal contatto clinico.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Più equità nell’accesso alla salute",
      desc: "Diminuisce il divario tra grandi città e territori marginali.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Riduzione dei tempi diagnostici",
      desc: "Possibilità di eseguire ecografie direttamente in loco, senza attese.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Formazione e collaborazione a distanza",
      desc: "Specialisti e studenti possono operare insieme anche da sedi diverse.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
