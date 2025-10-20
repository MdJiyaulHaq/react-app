import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Love = () => {
  const [red, setRed] = useState(true);

  if (red)
    return <FaHeart size={25} color="red" onClick={() => setRed(false)} />;
  return <FaRegHeart size={25} onClick={() => setRed(true)} />;
};

export default Love;
