import { useCreateBook } from "@/hooks/useCreateBook";
import { useGetAuthors } from "@/hooks/useGetAuthors";
import { Author } from "@prisma/client";
import { ChangeEvent, FormEvent, useState } from "react";

type BookFormProps = {
  authors: Author[];
};

export const BookForm = ({ authors }: BookFormProps) => {
  const defaultFormValues = {
    title: "",
    authorId: "",
  };

  const [formValue, setFormValue] = useState(defaultFormValues);

  const { mutate: refreshAuthors } = useGetAuthors();
  const createBook = useCreateBook();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const newFormValue = { ...formValue, [target.name]: target.value };
    setFormValue(newFormValue);
  };

  const handleSelectChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const newFormValue = { ...formValue, [target.name]: target.value };
    setFormValue(newFormValue);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    createBook(formValue).then(async () => {
      setFormValue(defaultFormValues);
      await refreshAuthors();
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "50%",
      }}
    >
      <h2>Create a book:</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          alignItems: "flex-start",
        }}
      >
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={handleChange}
          value={formValue.title}
        />

        <label htmlFor="authorId">Author:</label>
        <select
          name="authorId"
          id="authorId"
          required
          onChange={handleSelectChange}
          value={formValue.authorId}
        >
          <option disabled selected value="" style={{ display: "none" }}>
            -- select an option --
          </option>
          {authors.map((author) => (
            <option value={author.id} key={author.id}>
              {author.firstName} {author.lastName}
            </option>
          ))}
        </select>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};
