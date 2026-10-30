"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

/** One-line project brief that carries straight into the contact form. */
export default function BriefForm({ className }: { className?: string }) {
  const router = useRouter();
  const [brief, setBrief] = useState("");

  return (
    <form
      className={cn(
        "cel flex flex-col gap-2 rounded-2xl p-2 transition-shadow focus-within:ring-2 focus-within:ring-ring/60 sm:flex-row sm:items-center",
        className
      )}
      onSubmit={(e) => {
        e.preventDefault();
        const q = brief.trim();
        router.push(q ? `/contact?brief=${encodeURIComponent(q)}` : "/contact");
      }}
    >
      <label htmlFor="brief" className="sr-only">
        What do you want to build?
      </label>
      <Input
        id="brief"
        value={brief}
        onChange={(e) => setBrief(e.target.value)}
        placeholder="What do you want to build?"
        autoComplete="off"
        className="h-12 flex-1 border-transparent bg-transparent text-[1.05rem] shadow-none focus-visible:border-transparent focus-visible:ring-0"
      />
      <Button type="submit" variant="lamp" size="lg" className="shrink-0">
        Start a project <ArrowRight />
      </Button>
    </form>
  );
}
