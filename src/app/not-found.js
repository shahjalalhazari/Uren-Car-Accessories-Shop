import Link from "next/link";
import {BiSearchAlt2 } from "react-icons/bi";

export default function NotFound() {
  return (
    <div className="error404">
      <h1>404</h1>
      <h2>PAGE NOT BE FOUND</h2>
      <p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable.</p>
      <form className="error-search-form">
          <input type="text" placeholder="Search..." className="" />
          <button type="submit" className=""><BiSearchAlt2 /></button>
      </form>
      <Link href="/" className="back-to-home-btn">Back To Home Page</Link>
    </div>
  )
}