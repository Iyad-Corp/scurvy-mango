export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-80 space-y-5">
      <pre className="text-6xl font-serif">Home</pre>

      <a href="/auth">
        <div className="min-w-[26rem] rounded-xl bg-teal-400 p-4 text-center text-2xl font-bold shadow-2xl duration-200 hover:bg-teal-900 hover:text-teal-200">
          Click me to login.
        </div>
      </a>

      <a href="/dashboard">
        <div className="min-w-[26rem] rounded-xl bg-teal-400 p-4 text-center text-2xl font-bold shadow-2xl duration-200 hover:bg-teal-900 hover:text-teal-200">
          Go to dashboard!
        </div>
      </a>

    </div>
  );
}