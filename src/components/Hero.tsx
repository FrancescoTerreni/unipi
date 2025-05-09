import Image from "next/image";
import heroImg from "../../public/img/hero.jpeg";
import { ClientLink } from "./ClientLink";
import { Container } from "@/components/Container";
import { CONTACT_CLICK } from "../../lib/analytics/events";

interface HeroProps {
  data: {
    title: string,
    description: string,
    cta: string
  }
}

export const Hero = (props: Readonly<HeroProps>) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {data.title}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {data.description}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <ClientLink
                href="#vantaggi"
                event={{ event: CONTACT_CLICK, value: data.cta }}
                className="px-8 py-4 text-lg font-medium text-center text-white bg-teal-600 rounded-md cursor-pointer">
                {data.cta}
              </ClientLink>
            </div>
            
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
