"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function CreateTicketPage() {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrate with Supabase RPC/insert
    console.log({ title, desc });
    alert("Ticket creation wired! Replace with Supabase insert.");
    setTitle("");
    setDesc("");
  }

  return (
      <div className="space-y-4 px-5 mt-5">
        <Card className="border-none shadow-none ">
          <CardHeader>
            <CardTitle>Create New Ticket</CardTitle>
          </CardHeader>
          <CardContent >
            <form
                onSubmit={onSubmit}
                className="space-y-4  lg:w-[30rem]"
            >
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="desc">Description</Label>
                <Textarea id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} required />
              </div>
              <div className="flex gap-2">
                <Button type="submit">Create ticket</Button>
                <Button type="reset" variant="secondary" onClick={() => { setTitle(""); setDesc(""); }}>Reset</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
  );
}
