import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { 
  benefitOne,
  benefitTwo,
  heroSectionCopy,
  subHeroSectionCopy,
  testimonianzeSectionCopy,
  faqSectionCopy,
  videoSectionCopy,
  faqdataCopy,
  ctaCopy
} from "@/components/data";

/**
 * Set all types.
 * @TODO move all to types.ts file.
*/
type sectionTitleCopyKey = keyof typeof subHeroSectionCopy;
type heroSectionCopyKey = keyof typeof heroSectionCopy;
type benefitOneKey = keyof typeof benefitOne;
type benefitTwoKey = keyof typeof benefitTwo;
type videoSectionCopyKey = keyof typeof videoSectionCopy;
type testimonianzeSectionCopyKey = keyof typeof testimonianzeSectionCopy;
type faqSectionCopyKey = keyof typeof faqSectionCopy;
type faqdataCopyKey = keyof typeof faqdataCopy;
type ctaCopyKey = keyof typeof ctaCopy;

export default function Home({ searchParams } : any ) {
  const version = ['v1', 'v2'].includes(searchParams?.version) ? searchParams.version : 'v1';

  return (
    <Container>
      <Hero data={heroSectionCopy[version as heroSectionCopyKey]} />
      <SectionTitle
        preTitle={subHeroSectionCopy[version as sectionTitleCopyKey].preTitle}
        title={subHeroSectionCopy[version as sectionTitleCopyKey].title}
      >
        {subHeroSectionCopy[version as sectionTitleCopyKey].description}
      </SectionTitle>

      <section id="vantaggi">
        <Benefits data={benefitOne[version as benefitOneKey]} />
        <Benefits imgPos="right" data={benefitTwo[version as benefitTwoKey]} />
      </section>

      <section id="video">
        <SectionTitle
          preTitle={videoSectionCopy[version as videoSectionCopyKey].preTitle}
          title={videoSectionCopy[version as videoSectionCopyKey].title}
        >
          {videoSectionCopy[version as videoSectionCopyKey].description}
        </SectionTitle>

        <Video videoId="eq0vXSkse7k" />
      </section>

      <section id="testimonianze">
        <SectionTitle
          preTitle={testimonianzeSectionCopy[version as testimonianzeSectionCopyKey].preTitle}
          title={testimonianzeSectionCopy[version as testimonianzeSectionCopyKey].title}
        >
          {testimonianzeSectionCopy[version as testimonianzeSectionCopyKey].description}
        </SectionTitle>

        <Testimonials />
      </section>

      <section id="faq">
        <SectionTitle 
          preTitle={faqSectionCopy[version as faqSectionCopyKey].preTitle}
          title={faqSectionCopy[version as faqSectionCopyKey].title}
        >
          {faqSectionCopy[version as faqSectionCopyKey].description}
        </SectionTitle>

        <Faq data={faqdataCopy[version as faqdataCopyKey]}/>
      </section>

      <Cta data={ctaCopy[version as ctaCopyKey]} />

    </Container>
  );
}
