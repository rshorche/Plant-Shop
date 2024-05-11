import { FaArrowLeftLong } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
export default function ServiceBox({ title, description, selected }) {
  return (
    <div
      className={`max-w-80 p-8 rounded-3xl ${
        selected ? "bg-green text-white" : "bg-cream text-white "
      }`}>
      <img
        src={`src/assets/images/${selected ? "leaves 1.png" : "leaves 2.png"}`}
        alt=""
        className="w-10 h-10"
      />
      <div>
        <h4
          className={` text-2xl font-bold mt-4 ${
            selected ? "text-white" : "text-black"
          }`}>
          {title}
        </h4>
        <p className={`text-sm my-5 ${selected ? "text-white" : "text-gray"}`}>
          {description}
        </p>
      </div>
      <button
        className={`text-base flex items-end gap-2 ${
          selected ? "text-white" : "text-orange"
        }`}>
        ادامه مطلب
        <FaArrowLeftLong />
      </button>
    </div>
  );
}
