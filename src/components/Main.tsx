import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Main: FunctionComponent<Props> = (props) => {

  return (
      <section className="main relative z-[1] h-[684px]">
          <img src="/public/main/Rectangle 85.png" alt="building_photo" className='absolute top-[-116px] right-0 w-[1325px] h-[800px] object-cover opacity-30 lg:opacity-100 '/>
          <div className="container relative top-[150px] sm:top-0">
              <div className="sm:top-[72px] left-0  sm:left-5 sm:absolute relative flex-col flex justify-center items-center sm:block">
                  <h1 className='h1-40 sm:!text-[50px] sm:max-w-[540px]  sm:text-start text-center'>
                      Снабжаем производителей окон от профиля до шурупа
                  </h1>
                  <button className='py-4 h1-16-mont pl-[29px] pr-[31px] border-[#363636] border mt-10'>Связаться с нами</button>
                  <div className='xl:absolute xl:top-20 xl:-rotate-90  xl:right-[-800px] xl:flex-row-reverse flex flex-col mt-4'>
                      <p className='h1-16-mont xl:ml-10' >+ 7 777 777 77 77</p>
                      <p className='h1-16-mont mt-2 xl:mt-0'>example@test.com</p>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Main;
