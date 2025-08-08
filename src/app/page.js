"use client";

import { toast } from "react-toastify";

export default function Home() {
  return (
    <main className="flex flex-wrap gap-5">
      <div className="h-20 w-20 bg-primary"></div>
      <div className="h-20 w-20 bg-secondary"></div>
      <div className="h-20 w-20 bg-dark"></div>
      <div className="h-20 w-20 bg-blue"></div>
      <div className="h-20 w-20 bg-body"></div>
      <div className="h-20 w-20 bg-base-100"></div>
      <div className="h-20 w-20 bg-uren-border"></div>
      <div className="h-20 w-20 bg-gary-bg"></div>

      <h1 className="text-primary">hello world</h1>
      <h1 className="text-secondary">hello world</h1>
      <h1 className="text-dark">hello world</h1>
      <h1 className="text-blue">hello world</h1>
      <h1 className="text-body">hello world</h1>
      <h1 className="text-base-100">hello world</h1>
      <h1 className="text-uren-border">hello world</h1>
      <h1 className="text-gray-bg">hello world</h1>
      <button className="bg-primary" onClick={() => toast("Hello World!")}>Show Toast</button>
    </main>
  );
}