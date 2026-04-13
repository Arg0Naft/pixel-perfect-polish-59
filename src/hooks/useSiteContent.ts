import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useSiteContent = () => {
  return useQuery({
    queryKey: ["site-content"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_content")
        .select("key, value");
      if (error) throw error;
      const map: Record<string, string> = {};
      data?.forEach((item) => { map[item.key] = item.value; });
      return map;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useContentCards = (section: string) => {
  return useQuery({
    queryKey: ["content-cards", section],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("content_cards")
        .select("*")
        .eq("section", section)
        .order("sort_order");
      if (error) throw error;
      return data ?? [];
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useFaqItems = () => {
  return useQuery({
    queryKey: ["faq-items"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("faq_items")
        .select("*")
        .order("sort_order");
      if (error) throw error;
      return data ?? [];
    },
    staleTime: 1000 * 60 * 5,
  });
};
