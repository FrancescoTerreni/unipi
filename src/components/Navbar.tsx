"use client";

import Link from "next/link";
import { isNil } from "lodash";
import { Disclosure } from "@headlessui/react";
import { ClientLink } from "./ClientLink";
import { useReactions } from '@/contexts/ReactionContext';
import { setReactionCount } from "../../lib/supabase/procedures";
import { REACTION_LIKE } from "../../lib/supabase/constants/reaction";
import { LIKE_CLICK, MENU_CLICK } from "../../lib/analytics/events";
import { sendGTMEvent } from '@next/third-parties/google'
import { navigation } from "../../lib/structure/constants";

export const Navbar = () => {

  const reactionsState = useReactions();

  /**
   * Write on database for liked elements, and after sent the event to GA4.
   * The interaction level should check if the user is allowed to do so.
  */

  const likeAction = async () => {
    if (!reactionsState.interacted) {
      const newCount = await setReactionCount(REACTION_LIKE);
      reactionsState.setReaction((prev) => ({...prev, like: newCount }))
      sendGTMEvent({ event: LIKE_CLICK, value: newCount, })
      reactionsState.setInteracted(true)
    }
  }

  const displayGreetings = reactionsState.interacted ? ` 🎉 ${reactionsState.like} Grazie! :) ` : `❤️ ${reactionsState.like} Likes`;

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">

        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-last">
            <div className="mr-3 lg:flex nav__item">
              {(!reactionsState.loading && !isNil(reactionsState.like)) &&
                <ClientLink 
                  href="/"
                  callback={likeAction}
                  className="px-6 py-2 text-white bg-teal-600 rounded-md md:ml-5"
                >
                  {displayGreetings}
                </ClientLink>
              }
            </div>
        </div>
                
        <Disclosure>
          {({ open }) => (
            <div>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-teal-500 focus:text-teal-500 focus:bg-teal-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <div>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.href} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-teal-500 focus:text-teal-500 focus:bg-teal-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item.label}
                      </Link>
                    ))}
                  </div>
                </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center order-first">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <ClientLink 
                    href={menu.href}
                    event={{ event: MENU_CLICK, value: menu.label }}
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-teal-500 focus:text-teal-500 focus:bg-teal-100 focus:outline-none dark:focus:bg-gray-800"
                  >
                    {menu.label}
                </ClientLink>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
}

