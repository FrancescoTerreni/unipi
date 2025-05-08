"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { sendGTMEvent } from '@next/third-parties/google'
import { FAQ_CLICK } from "../../lib/analytics/events";

interface FaqProps {
  data: Faq[]
}

interface Faq {
  question: string,
  answer: string
}

export const Faq = (props: Readonly<FaqProps>) => {
  const { data } = props;

  const faqAction = async (item: Faq, open: boolean) => {
    if (!open) {
      sendGTMEvent({ event: FAQ_CLICK, value: item.question })
    }
  }

  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mb-20 mx-auto rounded-2xl">
        {data.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <div onClick={() => faqAction(item, open)}>
                  <DisclosureButton
                      className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-teal-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200"
                    >
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-teal-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}
