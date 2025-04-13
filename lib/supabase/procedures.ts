import { supabaseClient } from "./client";
import { ReactionType } from "./types/reaction";

/**
 * Incrementa il count di una reaction (like/dislike) nello schema `public`
 * @param type 'like' | 'dislike'
 * @returns il nuovo valore del count, o null in caso di errore
 */

export const setReactionCount = async (type: ReactionType): Promise<number | null> => {
    const { data, error } = await supabaseClient.rpc(`increment_${process.env.NEXT_PUBLIC_SUPABASE_ENV}_reaction`, {
      reaction_type: type,
    });
  
    if (error) {
      console.error('[Supabase RPC] Errore setReactionCount:', error.message);
      return null;
    }
  
    return data ?? null;
};

/**
 * Get del count di una reaction (like/dislike) nello schema `public`
 * @param type 'like' | 'dislike'
 * @returns il valore del count, o null in caso di errore
 */

export const getReactionCount = async (type: ReactionType): Promise<number | null> => {
    const { data, error } = await supabaseClient.rpc(`get_${process.env.NEXT_PUBLIC_SUPABASE_ENV}_reaction`, {
      reaction_type: type,
    });
  
    if (error) {
      console.error('[Supabase RPC] Errore getReactionCount:', error.message);
      return null;
    }
  
    return data ?? null;
};