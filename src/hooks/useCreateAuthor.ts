export const useCreateAuthor = () => {
  const createAuthor = async ({
    firstName,
    lastName,
  }: {
    firstName: string;
    lastName: string;
  }) => {
    await fetch("/api/authors", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName }),
    });
  };

  return createAuthor;
};
