import { useCreateAuthor } from "@/hooks/useCreateAuthor";
import { useGetAuthors } from "@/hooks/useGetAuthors";
import { ChangeEvent, FormEvent, useState } from "react";

export const AuthorForm = () => {
  const defaultFormValues = {
    firstName: "",
    lastName: "",
  };

  const [formValue, setFormValue] = useState(defaultFormValues);

  const { mutate: refreshAuthors } = useGetAuthors();
  const createAuthor = useCreateAuthor();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const newFormValue = { ...formValue, [target.name]: target.value };
    setFormValue(newFormValue);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    createAuthor(formValue).then(async () => {
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
      <h2>Create an author:</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          alignItems: "flex-start",
        }}
      >
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          onChange={handleChange}
          value={formValue.firstName}
        />

        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          onChange={handleChange}
          value={formValue.lastName}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};
