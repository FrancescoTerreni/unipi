import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Telemedicina & Robotica"
        title="Perché credere nell'ecografia a distanza"
      >
        È una tecnologia che non sostituisce, ma avvicina.
        Una mano robotica guidata da competenze umane. 
        Una risposta concreta per aree rurali, strutture isolate, pazienti fragili o impossibilitati a spostarsi.
      </SectionTitle>

      <section id="vantaggi">
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </section>

      <section id="video">
        <SectionTitle
          preTitle="Guarda il video"
          title="Scopri come funziona l’ecografia a distanza"
        >
          In questo breve video ti mostriamo come la robotica e la telemedicina possono collaborare per eseguire un’ecografia remota in tempo reale.
        </SectionTitle>

        <Video videoId="eq0vXSkse7k" />
      </section>

      <section id="testimonianze">
        <SectionTitle
          preTitle="Testimonianze"
          title="Cosa dicono della Tele-ecografia"
        >
          Ecco cosa raccontano medici, pazienti e professionisti della salute che hanno provato la tele-ecografia guidata da remoto.
          Una tecnologia che convince, perché funziona.
        </SectionTitle>

        <Testimonials />
      </section>

      <section id="faq">
        <SectionTitle preTitle="FAQ" title="Domande frequenti">
          Dalla sicurezza al funzionamento: tutto quello che c’è da sapere sull’ecografia remota guidata da robot, spiegato in modo chiaro.
        </SectionTitle>

        <Faq />
      </section>

      <Cta />

    </Container>
  );
}
