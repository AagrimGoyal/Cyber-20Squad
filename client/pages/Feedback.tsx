import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Trash2, MessageSquarePlus } from "lucide-react";

interface FeedbackItem {
  id: string;
  name: string;
  message: string;
  createdAt: string; // ISO
}

export default function Feedback() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>(() => {
    try {
      const raw = localStorage.getItem("cs_feedbacks");
      return raw ? (JSON.parse(raw) as FeedbackItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cs_feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const ordered = useMemo(
    () => [...feedbacks].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)),
    [feedbacks],
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const n = name.trim();
    const m = message.trim();
    if (!n || !m) {
      toast({ title: "Please fill all fields" });
      return;
    }
    const item: FeedbackItem = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      name: n,
      message: m,
      createdAt: new Date().toISOString(),
    };
    setFeedbacks((prev) => [item, ...prev]);
    setName("");
    setMessage("");
    toast({ title: "Feedback submitted", description: "Thank you!" });
  }

  const ADMIN_EMAILS = new Set<string>(["s.15.340@slps.one", "s.22.226@slps.one"]);
  const [email, setEmail] = useState<string>(() => {
    try {
      return localStorage.getItem("cs_email") ?? "";
    } catch {
      return "";
    }
  });
  useEffect(() => {
    localStorage.setItem("cs_email", email);
  }, [email]);
  const isAdmin = ADMIN_EMAILS.has(email.trim().toLowerCase());

  const handleDelete = (id: string) => {
    if (!isAdmin) {
      toast({ title: "Only admins can delete feedback" });
      return;
    }
    setFeedbacks((prev) => prev.filter((f) => f.id !== id));
    toast({ title: "Feedback removed" });
  };

  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 min-h-[60vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MessageSquarePlus className="h-6 w-6 text-cyber-blue" />
                  <CardTitle className="text-2xl">Share Your Feedback</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Feedback</label>
                    <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your feedback here..." rows={4} />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-cyber-blue hover:bg-cyber-blue/90 text-white">Submit</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Manage Feedback (Admins)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-[1fr_auto] items-end">
                  <div>
                    <label className="block text-sm font-medium mb-1">Your email</label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter admin email" />
                    <div className="text-xs text-muted-foreground mt-1">
                      Status: {isAdmin ? "Admin" : "Viewer"}
                    </div>
                  </div>
                  <Button type="button" className="bg-cyber-blue text-white" onClick={() => { /* email is auto-saved */ }}>
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {ordered.length === 0 ? (
                <p className="text-center text-muted-foreground">No feedback yet. Be the first to share!</p>
              ) : (
                ordered.map((f) => (
                  <Card key={f.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-semibold text-foreground">{f.name}</div>
                          <div className="text-xs text-muted-foreground mb-2">{new Date(f.createdAt).toLocaleString()}</div>
                          <div className="text-foreground whitespace-pre-wrap">{f.message}</div>
                        </div>
                        <Button
                          variant="outline"
                          className="border-destructive/40 text-destructive hover:bg-destructive/10"
                          onClick={() => handleDelete(f.id)}
                          disabled={!isAdmin}
                          title={isAdmin ? "Delete" : "Admin only"}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
