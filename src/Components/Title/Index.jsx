import React from "react";

const Title = ({
  title,
  about,
  style = "",
  titlestyle = "",
  aboutstyle = "",
}) => {
  return (
    <div className={`text-center px-4 md:px-6 py-10 ${style}`}>
      <h2
        className={`text-2xl md:text-4xl font-bold uppercase oswald-Bold mb-4  ${titlestyle}`}
      >
        {/* text-[#4b2e2e]*/}
        {title}
      </h2>
      <p className={`max-w-2xl mx-auto text-sm md:text-base ${aboutstyle}`}>
        {/* text-gray-600*/}
        {about}
      </p>
    </div>
  );
};

export default Title;
