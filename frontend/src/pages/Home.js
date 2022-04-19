import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import onLogout from "../utils/onLogout";
import getUserId from '../utils/getUserId';
import hello from "../api/hello";

export default function Home() {
  const [uid, setUid] = useState(null);
  const [message, setMessage] = useState(null);

  // get supertokens user ID if logged in on page load
  useEffect(() => {
    getUserId().then((id) => {
      setUid(id);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <pre className="text-5xl font-serif pt-10">Home</pre>

      <Link to="/auth">
        <div className="min-w-[26rem] rounded-xl bg-teal-400 p-4 text-center text-2xl font-bold shadow-2xl duration-200 hover:bg-teal-900 hover:text-teal-200">
          Click me to login.
        </div>
      </Link>

      <Link to="/dashboard">
        <div className="min-w-[26rem] rounded-xl bg-teal-400 p-4 text-center text-2xl font-bold shadow-2xl duration-200 hover:bg-teal-900 hover:text-teal-200">
          Go to dashboard!
        </div>
      </Link>

      <button onClick={onLogout}>
        <div className="min-w-[26rem] rounded-xl bg-red-400 p-4 text-center text-2xl font-bold shadow-2xl duration-200 hover:bg-red-900 hover:text-red-200">
          Logout!
        </div>
      </button>

      <button onClick={() => {
        hello().then((m) => {
          setMessage(m);
        })
      }}>
        <div className="min-w-[26rem] rounded-xl bg-gray-400 p-2 text-center text-lg font-bold shadow-2xl duration-200 hover:bg-gray-900 hover:text-gray-200">
          Say hello to me.
        </div>
      </button>

      {(uid != null)
        ?
        <pre>You are logged in with UID: {uid}</pre>
        :
        <pre>You are not logged in.</pre>
      }

      {message && <pre className="font-serif italic">{message}</pre>}
    </div>
  );
}