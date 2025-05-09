import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 mb-20">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Esempio concreto di come la telemedicina può essere <Mark>semplice, efficace e umana.</Mark>
            </p>

            <Avatar
              image={userOneImg}
              name="Prof.ssa Chiara Bianchi"
              title="Docente di Tecnologie Mediche"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              La <Mark>qualità dell’immagine e la precisione</Mark> del braccio robotico sono sorprendenti
            </p>

            <Avatar
              image={userTwoImg}
              name="Dr. Luca Serafini"
              title="Radiologo territoriale"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Ho potuto offrire ecografie a pazienti <Mark>che non si sarebbero mai potuti spostare.</Mark>
            </p>

            <Avatar
              image={userThreeImg}
              name="Dr.ssa Elena Rossi"
              title="Medico di medicina generale"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-teal-800 bg-teal-100 rounded-md ring-teal-100 ring-4 dark:ring-teal-900 dark:bg-teal-900 dark:text-teal-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
