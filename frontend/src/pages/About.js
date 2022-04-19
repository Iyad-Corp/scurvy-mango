import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center py-10 space-y-5">
      <pre className="text-6xl font-serif">About</pre>
      <pre>If you are on this page, well, I guess you're on this page.</pre>
      <Link to="/" className="underline">
        Go back home.
      </Link>
    </div>
  );
}
