import { Outlet, useLocation } from "react-router-dom";

export default function Card() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Cube Wizard.
        </h5>
        <Outlet />
        <div className="mt-5 flex justify-evenly">
          <button className="bg-rose-500 hover:bg-rose-600">Prev</button>
          <button className="bg-emerald-500 hover:bg-emerald-600">Next</button>
        </div>
        <p className="text-sm text-gray-500 font-medium text-center mt-5">
          step { pathname === "/" ? "1" : "2" } of 2 
        </p>
      </div>
    </>
  );
}
