'use client';

import React from "react";
import { useReactions } from '@/contexts/ReactionContext';
import { Container } from "@/components/Container";
import { setReactionCount } from "../../lib/supabase/procedures";
import { sendGTMEvent } from '@next/third-parties/google'
import { LIKE_CLICK } from "../../lib/analytics/events";
import { REACTION_LIKE } from "../../lib/supabase/constants/reaction";

interface CtaProps {
  data: Cta
}

interface Cta {
  title: string,
  action: string
}

export const Cta = (props: Readonly<CtaProps>) => {

  const reactionsState = useReactions();

  /**
   * Write on database for liked elements, and after sent the event to GA4.
   * The interaction level should check if the user is allowed to do so.
  */
 
  const likeAction = async () => {
    if (!reactionsState.interacted) {
      const newCount = await setReactionCount(REACTION_LIKE);
      reactionsState.setReaction((prev) => ({...prev, like: newCount }))
      sendGTMEvent({ event: LIKE_CLICK, value: newCount })
      reactionsState.setInteracted(true);
    }
  }

  const displayGreetings = reactionsState.interacted ? ` 🎉 ${reactionsState.like} Grazie! :) ` : `❤️ ${reactionsState.like} Likes`;

  const { data } = props;

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-teal-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            {data.title}
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            {data.action}
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
        <button
            onClick={likeAction}
            className={`inline-block py-3 mx-auto text-lg font-medium text-center rounded-md px-7 lg:px-10 lg:py-5 transition-all duration-200
              ${reactionsState.loading ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white text-teal-600 hover:bg-gray-100"}
            `}
          >
            {reactionsState.loading || !reactionsState.like ? (
              <div className="h-6 w-24 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-md mx-auto" />
            ) : (
              `${displayGreetings}`
            )}
          </button>
        </div>
      </div>
    </Container>
  );
};
