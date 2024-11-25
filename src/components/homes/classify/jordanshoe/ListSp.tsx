import React from 'react';

const ListSp = () => {
  return (
    <div className="flex justify-center gap-6">
      {/* Sản phẩm 1 */}
      <div className="w-[48%] flex flex-col bg-white rounded overflow-hidden">
        <img src="/jd2.jpg" alt="jd1" className="w-full h-auto object-cover" />
        <div className="p-4">
          <p className="text-[#086779] font-semibold">
            ADI X GHOSTED.3 TF INFLIGHT - EG8199 - 43
          </p>
          <p className="text-[#e70303] font-bold text-sm">4</p>
        </div>
      </div>

      {/* Sản phẩm 2 */}
      <div className="w-[48%] flex flex-col bg-white rounded overflow-hidden">
        <img src="/jd2.jpg" alt="jd1" className="w-full h-auto object-cover" />
        <div className="p-4">
          <p className="text-[#086779] font-semibold">
            ADI X GHOSTED.3 TF INFLIGHT - EG8199 - 43
          </p>
          <p className="text-[#e70303] font-bold text-sm">5</p>
        </div>
      </div>
    </div>
  );
};

export default ListSp;
