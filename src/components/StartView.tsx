import React from "react";
import imgURL from "../images/image.svg";

export default function StartView() {
  return (
    <div className="start flex items-center flex-col bg-white shadow-md rounded-xl p-10 font-pop">
      <h2 className="font-medium text-gray-600 text-2xl">Upload your image</h2>
      <p className="text-sm text-gray-400 mt-5">File should be Jpeg, Png, ...</p>
      <div className="mt-5 py-10 w-96 flex flex-col items-center bg-blue-100 rounded-xl bg-opacity-20 hover:bg-opacity-50 border-2 border-dashed border-blue-500">
        <img className="select-none" src={imgURL} alt="" />
        <p className="text-base text-gray-400 mt-10 select-none">Drag & Drop your image here</p>
      </div>
      <p className="text-sm text-gray-400 mt-5">Or</p>
      <button className="font-noto text-sm text-white bg-blue-500 rounded-lg focus:ring-2 hover:bg-blue-700 p-2 mt-5">
        Choose a file
      </button>
    </div>
  );
}