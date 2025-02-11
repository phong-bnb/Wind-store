import { Input } from "antd";
import { PiMapPinLineBold } from "react-icons/pi";
import { FaCartPlus, FaUserAlt } from "react-icons/fa";
import "./header.css"; // Import the CSS file

import type { GetProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

const HeaderApp = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="flex flex-col items-start justify-center bg-[#0cbee2] w-full">
      <div
        style={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}
        className="flex flex-row items-center gap-20 justify-center w-full"
      >
        <div>Wind Store</div>
        <Search
          placeholder=" giày gì nào ? "
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          className="w-[50%] custom-search-button" // Apply the custom class
        />
        <div className="flex flex-row gap-10 ml-10">
          <button className="flex flex-row gap-3 items-center p-6 pl-0">
            <PiMapPinLineBold className="w-5 h-5" />
            <p className="font-roboto text-sm font-medium">
              Hệ thống <br /> cửa hàng
            </p>
          </button>
          <button className="flex flex-row gap-3 items-center p-6">
            <FaUserAlt className="w-5 h-5" />
            <p className="font-roboto text-sm font-medium">
              Đăng nhập <br />
              Đăng ký
            </p>
          </button>
          <button className="flex flex-row gap-3 items-center p-6">
            <FaCartPlus className="w-5 h-5" />
            <p className="font-roboto text-sm font-medium">Giỏ hàng</p>
          </button>
        </div>
      </div>
      <div className=" w-full bg-white text-black text-center p-4 flex flex-row justify-center">
        <div>Thu Mua </div>
        <div>New</div>
        <div> Giày Cũ </div>

        <div>Clothing</div>

      </div>
    </div>
  );
};

export default HeaderApp;
