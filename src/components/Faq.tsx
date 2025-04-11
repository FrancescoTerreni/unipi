"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <div>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
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

const faqdata = [
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
  },
];
