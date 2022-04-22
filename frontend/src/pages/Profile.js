import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center py-10 space-y-5">
      <pre className="text-6xl font-serif">Profile</pre>
      <pre>If you are on this page, that means you are logged in.</pre>
      <Link to="/" className="underline">
        Go back home.
      </Link>
    </div>
  );
}
