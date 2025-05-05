import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
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
  faqdataCopy,
  ctaCopy
} from "@/components/data";

/**
 * Set all types to avoid clash with key.
 * @TODO Still can fix data.js with .ts suffix.
*/
type sectionTitleCopyKey = keyof typeof subHeroSectionCopy;
type heroSectionCopyKey = keyof typeof heroSectionCopy;
type benefitOneKey = keyof typeof benefitOne;
type benefitTwoKey = keyof typeof benefitTwo;
type testimonianzeSectionCopyKey = keyof typeof testimonianzeSectionCopy;
type faqSectionCopyKey = keyof typeof faqSectionCopy;
type faqdataCopyKey = keyof typeof faqdataCopy;
type ctaCopyKey = keyof typeof ctaCopy;

export default async function Home({ searchParams } : any ) {
  const queryParams = await searchParams;
  const version = ['v1', 'v2'].includes(queryParams?.version) ? queryParams.version : 'v2';

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

      <section id="faq">
        <SectionTitle 
          preTitle={faqSectionCopy[version as faqSectionCopyKey].preTitle}
          title={faqSectionCopy[version as faqSectionCopyKey].title}
        >
          {faqSectionCopy[version as faqSectionCopyKey].description}
        </SectionTitle>

        <Faq data={faqdataCopy[version as faqdataCopyKey]}/>
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

      <Cta data={ctaCopy[version as ctaCopyKey]} />

    </Container>
  );
}
