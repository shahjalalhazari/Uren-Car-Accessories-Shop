"use client"
import { toast } from "react-toastify";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="bg-primary p-6 rounded-lg">
        <h1 className="text-dark text-2xl font-bold">Welcome to UREN</h1>
        <p className="text-body">Premium Car Accessories</p>
      </div>
      
      <div className="card bg-base-100 border border-uren-border mt-4">
        <div className="card-body">
          <h2 className="card-title text-dark-gray">Featured Products</h2>
          <button className="btn btn-primary" onClick={() => toast('Wow so easy !')}>Shop Now</button>
        </div>
      </div>
    </main>
  );
}
