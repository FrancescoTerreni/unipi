'use client'

import React from "react";
import Link from "next/link";
import { sendGTMEvent } from '@next/third-parties/google'

interface LinkProps {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  eventName?: string;
  children: React.ReactNode;
}

export const ClientLink = (props: Readonly<LinkProps>) => {
    return (
        <Link 
            onClick={() => sendGTMEvent({ event: props.eventName })}
            href={props.href}
            rel={props.rel}
            className={props.className}
            target={props.target}
        >
            {props.children}
        </Link>
    )
}