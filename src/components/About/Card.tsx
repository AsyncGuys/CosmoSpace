import React from "react";
import { int } from "three/examples/jsm/nodes/Nodes.js";
interface Props {
  title: string;
  description: string;
}
const Card: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="bg-blend-hard-light p-6 rounded-xl  border-[1px] border-gray-900 shadow-inner hover:shadow-slate-300 apptransition">
      <h3 className="text-xl mb-2 text-yellow-500 font-bold">{title}</h3>
      <p className="text-white tracking-wide  font-semibold">
        {description}
      </p>
    </div>
  );
};

export default Card;
