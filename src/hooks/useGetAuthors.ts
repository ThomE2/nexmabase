import { Author, Book } from "@prisma/client";
import useSWR from "swr";

export const useGetAuthors = () => {
  const { data, error, isLoading, mutate } = useSWR<
    (Author & { books: Book[] })[]
  >(`/api/authors`, (url: string) => fetch(url).then((res) => res.json()));

  return { data, error, isLoading, mutate };
};
