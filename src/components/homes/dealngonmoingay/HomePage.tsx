import { Button, Carousel } from 'antd';
import ListSp from './ListSp';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-6 bg-[#f5f5f5]">
      <div>
        <h1 className="font-bold text-2xl text-[#c91d1d]">| DEAL NGON MỖI NGÀY</h1>
      </div>
      <div className="flex flex-col w-full bg-[#0cbee4] p-6 gap-4">
        <div className="flex flex-row items-center gap-1">
          <img src='/flashsales.png' alt='flashSale' className="w-10 h-10" />
          <p className="font-bold text-white text-xl">DEAL NGON MỖI NGÀY</p>
        </div>
        <Carousel autoplay className='pb-8'>
        <ListSp/>
        <ListSp/>

        <ListSp/>


        </Carousel>
        <Button className='w-[8%] mx-auto font-semibold'>Xem tất cả {">>"}</Button>
      </div>
    </div>
  );
};

export default HomePage;
