import { Author, Book } from "@prisma/client";

type AuthorListProps = {
  authors: (Author & { books: Book[] })[];
};

export const AuthorList = ({ authors }: AuthorListProps) => {
  return (
    <>
      <h2>Authors:</h2>

      {authors.map((author) => (
        <h3 key={author.id}>
          {author.firstName} {author.lastName}
        </h3>
      ))}
    </>
  );
};
