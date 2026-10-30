import { cn } from "@/lib/utils";

/**
 * A speech bubble with a curved tail toward the speaker. The tail is drawn in
 * currentColor, so pass the bubble's fill as a text colour via `tailClass`.
 * A drop-shadow filter (not box-shadow) lets body and tail share one shadow.
 */
export default function ChatBubble({
  children,
  tail = "right",
  className,
  tailClass,
}: {
  children: React.ReactNode;
  tail?: "left" | "right";
  className?: string;
  tailClass: string;
}) {
  return (
    <div className={cn("relative rounded-[1.4rem] px-4 py-2.5", tail === "right" ? "rounded-br-md" : "rounded-bl-md", className)}>
      {children}
      <svg
        viewBox="0 0 20 14"
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -bottom-[9px] h-[14px] w-5 overflow-visible",
          tail === "right" ? "-right-[6px]" : "-left-[6px] -scale-x-100",
          tailClass
        )}
      >
        {/* starts 2px inside the body so no seam shows where they meet */}
        <path d="M0 -2 L12 -2 C12 4 15 9 20 13 C12 13 5 10 1 4 Z" fill="currentColor" />
      </svg>
    </div>
  );
}
