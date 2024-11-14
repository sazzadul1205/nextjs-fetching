import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-3xl font-bold pt-5">About Page</p>

      <div className="flex gap-5 pt-5">
        <Link href={"/About/History"}>
          <button className="px-10 py-2 border border-white font-bold hover:bg-white hover:text-black">
            History
          </button>
        </Link>
        <Link href={"/About/Mission"}>
          <button className="px-10 py-2 border border-white font-bold hover:bg-white hover:text-black">
            Mission
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
