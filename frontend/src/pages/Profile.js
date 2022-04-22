import { Link } from "react-router-dom";

export default function Profile() {
  
  return (
    <><div className="max-w-6xl mx-5 p-10 xl:mx-auto h-screen justify-between">
        <div className ="grid grid-cols-4 gap-4">
          <div className="Picture">
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="profile" className=" rounded-full w-36 h-36"/>
            <div className="Name px-4 py-2">
              <h1 className="text-2xl font-bold">John Doe</h1>
              <h2 className="text-lg font-semibold px-4">
                <Link to="/">@johndoe</Link>
              </h2>
              <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="table-auto border-collapse border border-slate-500">
                      <table className="w-full">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 border border-slate-600">Connections</th>
                          </tr>
                        </thead>
                        <tbody >
                          <td className="border border-slate-600">
                            <tr className="px-4 py-2 border border-slate-600">
                              <p className="text-sm font-semibold">Trevor Lawrence</p>
                            </tr>
                            <tr className="px-4 py-2 border border-slate-600">
                              <p className="text-sm font-semibold">Trevor Lawrence</p>
                            </tr>
                          </td>
                        </tbody>

                      </table>
                  </div>

                </div>
            </div>
          </div>
        </div>
         
        <div className ="table px-8 py-2 border-collapse border border-slate-500">
          <table className="table-auto">
            <tbody>
              <tr>
                <td nowrap="nowrap" className= "border border-slate-600">
                  <p className="text-2xl font-semibold">Company</p>
                </td>
                <td className = "px-12 py-2 border border-slate-600" nowrap="nowrap" >
                  <p className="text-2xl font-semibold">Results
                </p>
                </td>
              </tr>
              <tr>
                <td nowrap="nowrap" className= "border border-slate-600">
                  <p className="text-2xl ">Lockheed Martin</p>
                </td>
                <td nowrap="nowrap" className = "px-12 py-2 border border-slate-600">
                  <p className="text-2xl">Accepted  <span className="text-green-500">✓</span></p>
                </td>
              </tr>
              </tbody>
          </table>
        </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className=" px-[460px] py-[320px] bottom-0">
            <Link to="/" className="underline">
            Go back home.
          </Link>
            </div>  
          </div>
        </div>
      </div>
    </>
    
  );
}