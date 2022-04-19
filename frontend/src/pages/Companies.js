import { Link } from "react-router-dom";

export default function Companies() {
  return (
    <div className="flex flex-col justify-center items-center h-80 space-y-5">
      <pre className="text-6xl font-serif">Companies</pre>
      <pre>If you are on this page, well, I guess you're on this page.</pre>
      <Link to="/" className="underline">
        Go back home.
      </Link>
    </div>
  );
}
