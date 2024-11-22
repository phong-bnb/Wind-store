import { Button } from 'antd';
import './index.css'
const HomePageNew = () => {
    return (
        <div className='flex flex-col gap-6 pt-10'>
           <div className='flex flex-row justify-between'> <p className='font-bold text-[#086779] text-xl '>| GIÀY SNEAKER</p>
            <div className='flex flex-row gap-2 pr-4'>
                <Button className='button-classify'>JORDAN</Button>
                <Button className='button-classify'>CASUAL</Button>
                <Button className='button-classify'>HYPEBEAT</Button>
                <Button className='button-classify'>MLB</Button>
                <Button className='button-classify'>AF1</Button>
                <Button className='button-classify'>VANS & CONVERSE</Button>

            </div></div>
            <table className='w-full'>
                <tr className='flex w-full gap-4 pt-4' >
                    <td>
                        <div className=" div-td">
                            <img src="/jd1.jpg" alt="jd1" />
                            <div className="flex flex-col gap-6">
                                <p className="text-[#086779] font-semibold">ADI X GHOSTED.3 TF INFLIGHT - EG8199 - 43</p>
                                <p className="text-[#e70303] font-bold text-sm">5</p>
                            </div>
                        </div></td>
                    <td><div className=" div-td">
                        <img src="/jd1.jpg" alt="jd1" />
                        <div className="flex flex-col gap-6">
                            <p className="text-[#086779] font-semibold">ADI X GHOSTED.3 TF INFLIGHT - EG8199 - 43</p>
                            <p className="text-[#e70303] font-bold text-sm">5</p>
                        </div>
                    </div>
                    </td>
                    <td><div className=" div-td">
                        <img src="/jd1.jpg" alt="jd1" />
                        <div className="flex flex-col gap-6">
                            <p className="text-[#086779] font-semibold">ADI X GHOSTED.3 TF INFLIGHT - EG8199 - 43</p>
                            <p className="text-[#e70303] font-bold text-sm">5</p>
                        </div>
                    </div></td>
                    <td><div className=" div-td">
                        <img src="/jd1.jpg" alt="jd1" />
                        <div className="flex flex-col gap-6">
                            <p className="text-[#086779] font-semibold">ADI X GHOSTED.3 TF INFLIGHT - EG8199 - 43</p>
                            <p className="text-[#e70303] font-bold text-sm">5</p>
                        </div>
                    </div></td>
                    <td><div className=" div-td">
                        <img src="/jd1.jpg" alt="jd1" />
                        <div className="flex flex-col gap-6">
                            <p className="text-[#086779] font-semibold">ADI X GHOSTED.3 TF INFLIGHT - EG8199 - 43</p>
                            <p className="text-[#e70303] font-bold text-sm">5</p>
                        </div>
                    </div></td>
                </tr>
                <tr className='flex w-full gap-4 py-4' >
                    <td>
                        <div className=" div-td">
                            <img src="/jd1.jpg" alt="jd1" />
                            <div className="flex flex-col gap-6">
                                <p className="text-[#086779] font-semibold">ADI X GHOSTED.3 TF INFLIGHT - EG8199 - 43</p>
                                <p className="text-[#e70303] font-bold text-sm">5</p>
                            </div>
                        </div></td>
                    <td><div className=" div-td">
                        <img src="/jd1.jpg" alt="jd1" />
                        <div className="flex flex-col gap-6">
                            <p className="text-[#086779] font-semibold">ADI X GHOSTED.3 TF INFLIGHT - EG8199 - 43</p>
                            <p className="text-[#e70303] font-bold text-sm">5</p>
                        </div>
                    </div>
                    </td>
                    <td><div className=" div-td">
                        <img src="/jd1.jpg" alt="jd1" />
                        <div className="flex flex-col gap-6">
                            <p className="text-[#086779] font-semibold">ADI X GHOSTED.3 TF INFLIGHT - EG8199 - 43</p>
                            <p className="text-[#e70303] font-bold text-sm">5</p>
                        </div>
                    </div></td>
                    <td><div className=" div-td">
                        <img src="/jd1.jpg" alt="jd1" />
                        <div className="flex flex-col gap-6">
                            <p className="text-[#086779] font-semibold">ADI X GHOSTED.3 TF INFLIGHT - EG8199 - 43</p>
                            <p className="text-[#e70303] font-bold text-sm">5</p>
                        </div>
                    </div></td>
                    <td><div className=" div-td">
                        <img src="/jd1.jpg" alt="jd1" />
                        <div className="flex flex-col gap-6">
                            <p className="text-[#086779] font-semibold">ADI X GHOSTED.3 TF INFLIGHT - EG8199 - 43</p>
                            <p className="text-[#e70303] font-bold text-sm">5</p>
                        </div>
                    </div></td>
                </tr>
                
            </table>
            <Button className='w-[10%]  mx-auto font-semibold bg-[#0cbee2] text-[#e1e1e1]'>Xem tất cả {">>"}</Button>
        </div>
    )
}

export default HomePageNew;