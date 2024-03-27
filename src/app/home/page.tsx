"use client";

import { AuthorForm } from "@/components/homepage/AuthorForm/AuthorForm";
import { AuthorList } from "@/components/homepage/AuthorsList/AuthorsList";
import { useGetAuthors } from "@/hooks/useGetAuthors";

export default function HomePage() {
  const { data: authors, isLoading } = useGetAuthors();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
      }}
    >
      <h1>Welcome to your library!</h1>

      <AuthorForm />

      {isLoading && <span>Loading authors...</span>}
      {authors !== undefined && <AuthorList authors={authors} />}
    </div>
  );
}
