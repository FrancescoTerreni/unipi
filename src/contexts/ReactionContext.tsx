'use client';

import React, { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { REACTION_LIKE } from '../../lib/supabase/constants/reaction';
import { ReactionType } from '../../lib/supabase/types/reaction';
import { LoadingType } from '@/types';
import { getReactionCount } from '../../lib/supabase/procedures';

type ReactionCounts = Record<ReactionType, number | null>;
type ReactionState = ReactionCounts & LoadingType & {
  setReaction: Dispatch<SetStateAction<ReactionState>>;
};

const defaultValues: ReactionState = {
  like: null,
  loading: false,
  setReaction: () => {},
};

const ReactionContext = createContext<ReactionState>(defaultValues);

export const useReactions = () => useContext(ReactionContext);

export const ReactionProvider = ({ children }: { children: React.ReactNode }) => {
  const [reaction, setReaction] = useState<ReactionState>(defaultValues);

  /**
   * @CHECK | ${REACTION_DISLIKE} to be implemented.
   * At the moment we are only checking for
  */

  useEffect(() => {
    const fetchCounts = async () => {
      setReaction((prev) => ({ ...prev, loading: true }));
      const count = await getReactionCount(REACTION_LIKE);
      setReaction((prev) => ({ ...prev, like: count, loading: false }));
    };

    fetchCounts();
  }, []);

  return (
    <ReactionContext.Provider value={{ ...reaction, setReaction }}>
      {children}
    </ReactionContext.Provider>
  );
};
