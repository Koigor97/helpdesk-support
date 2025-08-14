"use client";
import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type Comment } from "@/lib/types";

/**
 * Comment list + form. Uses local state (mock). Wire to Supabase later.
 */
export function TicketComments({ initial }: { initial: Comment[] }) {
  const [comments, setComments] = React.useState<Comment[]>(initial);
  const [text, setText] = React.useState("");

  function addComment() {
    if (!text.trim()) return;
    setComments((prev) => [
      ...prev,
      { author: "You", date: new Date().toISOString().slice(0, 10), content: text.trim() },
    ]);
    setText("");
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold">Comments ({comments.length})</h3>
      <div className="flex flex-col items-start gap-2">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment"
          className="min-h-[80px] pt-3 pl-4"
        />
        <Button onClick={addComment} className="shrink-0">Add</Button>
      </div>
      <ScrollArea className="h-56 rounded  p-3">
        <div className="space-y-3">
          {comments.map((c, i) => (
            <article key={`${c.date}-${i}`} className="rounded-md border p-3 pl-4 bg-muted/40">
              <div className="text-xs text-muted-foreground">
                <strong className="text-foreground">{c.author}</strong>
                <span className="ml-2">{c.date}</span>
              </div>
              <p className="text-sm leading-relaxed mt-1">{c.content}</p>
            </article>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
