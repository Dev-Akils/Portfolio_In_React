import React from "react";
import university from "../../assets/university.jpg";
function Education() {
  return (
    <>
    <div className="overflow-x-hidden">
  <div className="mx-auto max-w-screen-md text-center py-4">
    <h2 className="font-bold text-3xl">Education</h2>
  </div>
  <div className="flex w-full md:flex-row xs:flex-row flex-col gap-5 items-center justify-center">
    <div className="p-4 m-2 bg-purple-100 flex flex-col items-center justify-center rounded-lg shadow-lg max-w-xs w-full">
      <img
        src={university}
        className="h-20 w-20 xs:h-16 xs:w-16 md:h-20 md:w-20 mb-2"
        alt="University Logo"
      />
      <h2 className="text-lg font-semibold text-center xs:text-base md:text-lg">
        Master of Computer Application
      </h2>
      <p className="text-sm text-gray-700 text-center xs:text-xs md:text-sm">
        Manonmaniam Sundaranar University, Tirunelveli
      </p>
    </div>

    <div className="p-4 m-2 bg-purple-100 flex flex-col items-center justify-center rounded-lg shadow-lg max-w-xs w-full">
      <img
        src={university}
        className="h-20 w-20 xs:h-16 xs:w-16 md:h-20 md:w-20 mb-2"
        alt="University Logo"
      />
      <h2 className="text-lg font-semibold text-center xs:text-base md:text-lg">
        Bachelor of Computer Application
      </h2>
      <p className="text-sm text-gray-700 text-center xs:text-xs md:text-sm">
        Manonmaniam Sundaranar University Constituent College, Kanyakumari
      </p>
    </div>
  </div>
</div>

    </>
  );
}

export default Education;
