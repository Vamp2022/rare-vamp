import React from "react";
import { constants } from "../utils/constants";

const Cont = ({ item }) => {
  console.log(item);
  return (
    <div className="w-full bg-gray-400 mt-5 p-3 pl-5 rounded-lg shadow-lg">
      <p className="font-bold text-xl mt-2 mb-2 text-gray-900">
        {item.question}
      </p>
      <p className="pr-4 text-gray-800">{item.answer}</p>
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="mt-7 w-full">
      <p className="text-2xl font-bold text-gray-900">FAQs</p>
      {constants.faqs.map((e, i) => (
        <React.Fragment key={i}>
          <Cont item={e} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Faqs;
