import { useState } from "react";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";

const Form = () => {
  const [inputLevel, setInputLevel] = useState(0);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div className="mt-5 flex flex-col gap-6">
      {/* 0.level */}
      <div className="grid grid-cols-5 gap-4 items-center">
        <input
        value={title}
        placeholder="Baslık..."
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded p-1 text-black shadow col-span-4"
          type="text"
        />
        <BiSolidDownArrowCircle
          onClick={() => {
            title 
            ? setInputLevel(1)
            : toast.warning('Kutuyu doldurunuz...');
          }}
          className="text-2xl cursor-pointer hover:text-gray-400"
        />
      </div>

      {/* 1.level */}
      {inputLevel > 0 && (
        <div className="grid grid-cols-5 gap-4 items-center">
          <textarea
          value={content}
          placeholder="Konu İçeriği Giriniz "
            onChange={(e) => setContent(e.target.value)}
            className="w-full min-h-[200px] max-h-[400px] rounded p-1 text-black shadow col-span-4"
            type="text"
          />
          <div className="flex">
            <BiSolidDownArrowCircle
              onClick={() => {
              content &&  setInputLevel(2);
              }}
              className="text-2xl cursor-pointer hover:text-gray-400"
            />
            <AiFillCloseCircle
              onClick={() => {
                setInputLevel(0);
              }}
              className="text-2xl cursor-pointer hover:text-gray-400"
            />
          </div>
        </div>
      )}

      {/* 2.level */}
      {inputLevel > 1 && (
        <div className="grid grid-cols-5 gap-4 items-center">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded p-1 text-black shadow col-span-4"
            type="text"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <div className="flex">
            <AiFillCheckCircle className="text-2xl cursor-pointer hover:text-gray-400" />
            <AiFillCloseCircle
              onClick={() => {
                setInputLevel(1);
              }}
              className="text-2xl cursor-pointer hover:text-gray-400"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;