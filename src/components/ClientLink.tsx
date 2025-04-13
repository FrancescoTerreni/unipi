'use client'

import React from "react";
import Link from "next/link";
import { sendGTMEvent } from '@next/third-parties/google'

interface LinkProps {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  event?: EventType;
  children: React.ReactNode;
  callback?: Function;
}

interface EventType {
    event: string;
    value?: number | string 
}

export const ClientLink = (props: Readonly<LinkProps>) => {
    
    const executeLink = async () => {
        await props.callback?.();

        if (props.event) {
            sendGTMEvent({ ...props.event });
        }
    }

    return (
        <Link 
            onClick={() => executeLink()}
            href={props.href}
            rel={props.rel}
            className={props.className}
            target={props.target}
        >
            {props.children}
        </Link>
    )
}