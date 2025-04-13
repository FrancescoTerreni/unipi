'use client';

import React, { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { REACTION_LIKE } from '../../lib/supabase/constants/reaction';
import { INTERACTED_KEY } from '../../lib/localStorage/constants';
import { ReactionType } from '../../lib/supabase/types/reaction';
import { LoadingType } from '@/types';
import { getReactionCount } from '../../lib/supabase/procedures';

type ReactionCounts = Record<ReactionType, number | null>;
type ReactionState = ReactionCounts & LoadingType & {
  interacted: Boolean | string | null;
  setInteracted: Dispatch<Boolean>;
  setReaction: Dispatch<SetStateAction<ReactionState>>;
};

const defaultValues: ReactionState = {
  like: null,
  loading: false,
  interacted: false,
  setInteracted: () => {},
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
      const item = localStorage.getItem(INTERACTED_KEY);
      setReaction((prev) => ({ ...prev, loading: true, interacted: item }));
      const count = await getReactionCount(REACTION_LIKE);
      setReaction((prev) => ({ ...prev, like: count, loading: false }));
    };

    fetchCounts();
  }, []);

  const setInteracted = (value: Boolean) => {
    try {
      localStorage.setItem(INTERACTED_KEY, JSON.stringify(value));
      setReaction((prev) => ({ ...prev, interacted: value }));
    } catch (error) {
      console.warn(`Errore nel salvare ${INTERACTED_KEY} su localStorage`, error);
    }
  }

  return (
    <ReactionContext.Provider value={{ ...reaction, setReaction, setInteracted }}>
      {children}
    </ReactionContext.Provider>
  );
};
