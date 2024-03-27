import { Author, Book } from "@prisma/client";
import useSWR from "swr";

export const useGetBooks = () => {
  const { data, error, isLoading, mutate } = useSWR<
    (Book & { author: Author })[]
  >(`/api/books`, (url: string) => fetch(url).then((res) => res.json()));

  return { data, error, isLoading, mutate };
};
