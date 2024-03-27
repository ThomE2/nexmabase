export const useCreateBook = () => {
  const createBook = async ({
    title,
    authorId,
  }: {
    title: string;
    authorId: string;
  }) => {
    await fetch("/api/books", {
      method: "POST",
      body: JSON.stringify({ title, authorId }),
    });
  };

  return createBook;
};
