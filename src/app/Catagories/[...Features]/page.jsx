import React from "react";

const page = ({ params }) => {
  console.log(params.Features);

  return (
    <div>
      <p className="text-center text-3xl font-bold pt-5">Categories Details</p>
    </div>
  );
};

export default page;
