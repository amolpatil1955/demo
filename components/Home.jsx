import React from "react";

const home = () => {
  return (
    <div>
      {/* User Details Mobile */}
      <div className="border-t pt-4">
        <p className="font-bold text-lg">Amol Rajput</p>
        <p className="text-sm text-gray-500">amol@example.com</p>
        <button className="mt-3 w-full bg-linear-to-r from-purple-500 to-pink-500 text-white py-1.5 rounded-lg hover:scale-105 transition-all">
          logiin and some emo{" "}
        </button>
      </div>
    </div>
  );
};

export default home;
