import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface WaitlistModalProps {
  children: React.ReactNode;
  applicationName?: string;
}

export function WaitlistModal({ children, applicationName }: WaitlistModalProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => {
        setOpen(false);
        setSubmitted(false);
      }, 3000);
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-slate-200">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">
            Join the Waitlist
          </DialogTitle>
          <DialogDescription className="text-slate-600">
            {applicationName 
              ? `Register your interest for ${applicationName} and we'll notify you as soon as it's available.`
              : "Register your interest in the RBP Applications Suite and we'll notify you as soon as it's available."}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">You're on the list!</h3>
            <p className="text-slate-600">Thank you for your interest. We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-2">
            <div className="space-y-2 flex flex-col">
              <Label htmlFor="name" className="text-slate-700 font-semibold self-start text-left">Full Name</Label>
              <Input id="name" required placeholder="Jane Doe" className="border-slate-200" />
            </div>
            <div className="space-y-2 flex flex-col">
               <Label htmlFor="company" className="text-slate-700 font-semibold self-start text-left">Company Name</Label>
               <Input id="company" required placeholder="Acme Corp" className="border-slate-200" />
            </div>
            <div className="space-y-2 flex flex-col">
               <Label htmlFor="email" className="text-slate-700 font-semibold self-start text-left">Email Address</Label>
               <Input id="email" type="email" required placeholder="jane@example.com" className="border-slate-200" />
            </div>
            <div className="space-y-2 flex flex-col">
               <Label htmlFor="phone" className="text-slate-700 font-semibold self-start text-left">Phone Number</Label>
               <Input id="phone" type="tel" placeholder="+61 400 000 000" className="border-slate-200" />
            </div>
            <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 mt-4 h-auto rounded-xl">
              Register Interest
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
