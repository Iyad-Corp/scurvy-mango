export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center h-80 space-y-5">
      <pre className="text-6xl font-serif">Dashboard</pre>

      <pre>If you are on this page, it means that you are logged in.</pre>

      <a href='/' className="underline">
        Go back home.
      </a>
    </div>
  );
}