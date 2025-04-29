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

const heroSectionCopy = {
  v1: {
    title: `Diagnostica a Distanza con Robot`,
    description: `
      Diagnosi ecografiche a distanza, rese possibili grazie alla robotica. 
      Perché la cura deve arrivare ovunque.
    `,
    cta: 'Scopri di più'
  },
  v2: {
    title: `Tele-ecografia robotica per il tuo centro`,
    description: `
      Amplia l'offerta clinica e raggiungi nuovi pazienti. 
      Integra l’ecografia a distanza nel tuo centro medico in modo sicuro e scalabile.
    `,
    cta: 'Contattaci'
  }
};

const subHeroSectionCopy = {
  v1: {
    preTitle: `Telemedicina & Robotica`,
    title: `Perché credere nell'ecografia a distanza`,
    description: `
      È una tecnologia che non sostituisce, ma avvicina.
      Una mano robotica guidata da competenze umane. 
      Una risposta concreta per aree rurali, strutture isolate, pazienti fragili o impossibilitati a spostarsi.
    `
  },
  v2: {
    preTitle: `Innovazione per la tua struttura`,
    title: `Nuove opportunità per la diagnostica`,
    description: `
      L’ecografia remota consente di estendere i servizi anche dove prima era impossibile. 
      Una soluzione concreta per ridurre le liste d’attesa e migliorare la copertura territoriale.
    `
  }
};

const benefitOne = {
  v1: {
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
  },
  v2: {
    title: "Perché adottare la tele-ecografia nel tuo centro",
    desc: "Uno strumento strategico per migliorare i servizi offerti, contenere i costi e ottimizzare le risorse.",
    image: benefitOneImg,
    bullets: [
      {
        title: "Espandi la copertura diagnostica",
        desc: "Offri servizi anche in sedi periferiche senza la presenza fissa di uno specialista.",
        icon: <FaceSmileIcon />,
      },
      {
        title: "Ottimizza le risorse umane",
        desc: "Gli specialisti possono operare da remoto, anche su più sedi contemporaneamente.",
        icon: <ChartBarSquareIcon />,
      },
      {
        title: "Valore competitivo immediato",
        desc: "Una soluzione innovativa che differenzia la tua struttura e la rende attrattiva.",
        icon: <CursorArrowRaysIcon />,
      },
    ],
  }
};

const benefitTwo = {
  v1: {
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
  },
  v2: {
    title: "Innovazione già disponibile",
    desc: "Non si tratta di futuro: la tele-ecografia è già una realtà. Integrala nella tua struttura e offri un servizio d'eccellenza.",
    image: benefitTwoImg,
    bullets: [
      {
        title: "Migliora l’efficienza operativa",
        desc: "Riduci trasferte e tempi morti per medici e pazienti.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Aumenta la soddisfazione del paziente",
        desc: "Tempi più brevi, meno spostamenti, più accessibilità.",
        icon: <AdjustmentsHorizontalIcon />,
      },
      {
        title: "Tecnologia pronta all’uso",
        desc: "Non servono grandi investimenti o stravolgimenti. Bastano connessione e formazione iniziale.",
        icon: <SunIcon />,
      },
    ],
  }
};

const videoSectionCopy = {
  v1: {
    preTitle: `Guarda il video`,
    title: `Scopri come funziona l’ecografia a distanza`,
    description: `
      In questo breve video ti mostriamo come la robotica e la telemedicina possono collaborare per eseguire un’ecografia remota in tempo reale.
    `
  },
  v2: {
    preTitle: `In pratica`,
    title: `Come integrare la tele-ecografia nella tua struttura`,
    description: `
      Un'introduzione chiara e operativa alla tecnologia. Guarda il video e scopri quanto sia semplice adottare la diagnostica remota nella tua offerta.
    `
  }
};

const testimonianzeSectionCopy = {
  v1: {
    preTitle: `Testimonianze`,
    title: `Cosa dicono della Tele-ecografia`,
    description: `
      Ecco cosa raccontano medici, pazienti e professionisti della salute che hanno provato la tele-ecografia guidata da remoto.
      Una tecnologia che convince, perché funziona.
    `
  },
  v2: {
    preTitle: `Casi reali`,
    title: `Chi ha già adottato la tele-ecografia`,
    description: `
      Esperienze da centri che l’hanno implementata con successo. Una dimostrazione concreta del valore aggiunto per l’organizzazione sanitaria.
    `
  }
};

const faqSectionCopy = {
  v1: {
    preTitle: `FAQ`,
    title: `Domande frequenti`,
    description: `
      Dalla sicurezza al funzionamento: tutto quello che c’è da sapere sull’ecografia remota guidata da robot, spiegato in modo chiaro.
    `
  },
  v2: {
    preTitle: `FAQ per centri medici`,
    title: `Dubbi sull’adozione?`,
    description: `
      Tutto ciò che serve sapere per integrare in modo efficace la tele-ecografia nella tua struttura: sicurezza, logistica, costi e formazione.
    `
  }
};

const faqdataCopy = {
  v1: [
    {
      question: "Come funziona un’ecografia a distanza?",
      answer: "Un braccio robotico esegue i movimenti dell’ecografo, controllato in tempo reale da un medico specialista collegato da remoto. L’esame è identico a quello tradizionale.",
    },
    {
      question: "È sicura come un’ecografia normale?",
      answer: "Sì, l’ecografia a distanza usa le stesse tecnologie e standard di sicurezza. Il medico ha pieno controllo dello strumento e interagisce con il paziente durante l’esame.",
    },
    {
      question: "Dove può essere utilizzata?",
      answer: "In ambulatori locali, strutture sanitarie periferiche, ospedali di comunità o anche in ambienti mobili. Serve solo una connessione stabile e il dispositivo robotico installato.",
    },
    {
      question: "Serve personale specializzato in loco?",
      answer: "Solo un operatore di supporto: il controllo completo è affidato al medico a distanza. Questo rende la tecnologia perfetta per aree con carenza di specialisti.",
    }
  ],
  v2: [
    {
      question: "Quali requisiti servono per attivare la tele-ecografia?",
      answer: "Basta una connessione stabile, un robot ecografico e un PC con software di controllo. Nessun vincolo su dimensioni o layout della struttura.",
    },
    {
      question: "Serve formazione specifica per il personale?",
      answer: "È previsto un breve percorso di affiancamento iniziale. L’uso del sistema è semplice e intuitivo per gli operatori di supporto.",
    },
    {
      question: "È compatibile con i protocolli clinici esistenti?",
      answer: "Sì, la tecnologia è pensata per integrarsi nei flussi sanitari senza sostituirli. Gli esami sono refertabili e validi come quelli in presenza.",
    },
    {
      question: "Quali sono i vantaggi economici per il centro?",
      answer: "Riduci costi di trasferta per specialisti, ottimizzi i tempi, aumenti l’accesso ai servizi in sedi decentrate. Il ritorno sull’investimento è rapido.",
    }
  ]
};

const ctaCopy = {
  v1: {
    title: 'Ti è stato utile questo contenuto?',
    action: 'Faccelo sapere con un clic.'
  },
  v2: {
    title: 'Vuoi portare l’ecografia a distanza nel tuo centro?',
    action: 'Contattaci per una demo o maggiori informazioni.'
  }
};


export { 
  benefitOne, 
  benefitTwo,
  heroSectionCopy, 
  subHeroSectionCopy,
  testimonianzeSectionCopy,
  faqSectionCopy,
  videoSectionCopy,
  faqdataCopy,
  ctaCopy
};
