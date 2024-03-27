import { Author, Book } from "@prisma/client";

type AuthorListProps = {
  authors: (Author & { books: Book[] })[];
};

export const AuthorList = ({ authors }: AuthorListProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h2>Authors:</h2>

      {authors.map((author) => (
        <>
          <h3 key={author.id} style={{ paddingLeft: "50px" }}>
            {author.firstName} {author.lastName}
          </h3>

          {author.books.map((book) => (
            <div key={book.id} style={{ paddingLeft: "100px" }}>
              {book.title}
            </div>
          ))}
        </>
      ))}
    </div>
  );
};
