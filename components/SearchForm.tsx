import React from "react";
import Form from "next/form";
import ResetForm from "./ResetForm";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="search startups"
      />
      <div className="flex gap-2">
        {query && <ResetForm />}
        <Button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </Button>
      </div>
    </Form>
  );
}
