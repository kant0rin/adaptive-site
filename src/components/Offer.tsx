import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Offer: FunctionComponent<Props> = (props) => {

  return (
      <section className='mt-[110px] offer'>
            <div className="content__container">
                <div className="container flex flex-between lg:flex-row flex-col">
                    <div className='pt-[22px] flex flex-col pb-[48px]'>
                        <h1 className='h1-40 max-w-[437px]'>Алюминиевые профиля ТАТПРОФ №1 в России</h1>
                        <h1 className='h1-16-mont max-w-[522px] mt-6'>Система «ТАТПРОФ» делает любой архитектурный замысел реальным, поможет создать облик здания любой сложности.</h1>
                        <a href="#" className='h1-16-ubuntu text-[#BF282E] border border-[#BF282E] max-w-max py-4 px-[34px] mt-[55px]'>Получить предложение</a>

                    </div>
                    <ul className='flex-col flex h1-16-mont'>
                        <li className='flex items-center max-w-max'> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='ml-[10px]'>Гарантия 80 лет</span></li>
                        <li className='flex items-center mt-5 max-w-max '> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='ml-[10px]'>Заводская покраска</span></li>
                        <li className='flex items-center mt-5 max-w-max'> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='ml-[10px]'>Лидер в обработке алюминия</span></li>
                        <li className='flex items-center mt-5 max-w-max'> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='ml-[10px]'>Выгодная цена на рынке</span></li>
                        <li className='flex items-center mt-5 max-w-max'> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='ml-[10px]'>Простота изготовления и монтажа конструкций</span></li>
                        <li className='flex items-center mt-5 max-w-max'> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='ml-[10px]'>Бесплатная программа для расчета конструкций</span></li>
                    </ul>

                </div>
            </div>
      </section>
  );
};

export default Offer;
