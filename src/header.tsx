import { Header } from "antd/es/layout/layout";
import { Input } from "antd";
import { PiMapPinLineBold } from "react-icons/pi";
import { FaCartPlus, FaUserAlt } from "react-icons/fa";

import type { GetProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

const HeaderApp = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="flex items-start justify-center bg-[#000000] w-full">
      <div
        style={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}
        className="flex flex-row items-center gap-20 justify-center w-full"
      >
        <div>Wind Store</div>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          className="items-center justify-center w-[40%] flex search-input"
        />
        <div className="flex flex-row">
          <button className="flex flex-row gap-3 items-center p-6">
            <PiMapPinLineBold className="w-5 h-5" />
            <p className="font-mono text-sm">
              Hệ thống <br /> cửa hàng
            </p>
          </button>
          <button className="flex flex-row gap-3 items-center p-6">
            <FaUserAlt className="w-5 h-5" />
            <p className="font-mono text-sm">
              Đăng nhập <br />
              Đăng ký
            </p>
          </button>
          <button className="flex flex-row gap-3 items-center p-6">
            <FaCartPlus className="w-5 h-5" />
            <p className="font-mono text-sm">Giỏ hàng</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderApp;
