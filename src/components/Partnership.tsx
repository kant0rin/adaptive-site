import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Partnership: FunctionComponent<Props> = (props) => {

  return (
      <section className='mt-[128px]'>
        <div className="content__container partnership">
            <div className="container pt-[50px]">
                <div className='flex items-center become-partner'>
                    <h1 className='h1-50'>Станьте нашим партнером</h1>
                    <a href="#" className='lg:ml-auto ml-0 text-[#003062] h1-16-ubuntu  border-[#003062] border py-[11px] px-[60px] leading-[16px]'>Стать партнером</a>
                </div>
                <div className='flex mt-[50px] h1-16-mont pb-[85px] w-full lg:justify-between justify-center lg:flex-row flex-col'>
                    <ul className='flex flex-col max-w-max lg:mt-0 mt-10'>
                        <li className='flex items-center max-w-max'> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='ml-[10px]'>Система скидок (от 20%)</span></li>
                        <li className='flex items-center max-w-max mt-[10px]'> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='ml-[10px]'>Технические каталоги</span></li>
                        <li className='flex items-center max-w-max mt-[10px]'> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='ml-[10px]'>Сертификаты соответствия</span></li>
                        <li className='flex items-center max-w-max mt-[10px]'> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='ml-[10px]'>Высокое качество продукции</span></li>
                    </ul>
                    <ul className='flex flex-col max-w-max lg:mt-0 mt-10'>
                        <li className='flex items-center max-w-max'> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='ml-[10px]'>Минимальный срок поставки</span></li>
                        <li className='flex items-center max-w-max mt-[10px]'> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='ml-[10px]'>Бесплатные образцы продукции</span></li>
                        <li className='flex items-center max-w-max mt-[10px]'> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='ml-[10px]'>Раскрученный и узнаваемый бренд</span></li>
                        <li className='flex items-center max-w-max mt-[10px]'> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='ml-[10px]'>Методические рекламные материалы</span></li>
                    </ul>
                    <ul className='flex flex-col lg:mt-0 mt-10 '>
                        <li className='flex max-w-max '> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='-mt-[7px] ml-[10px] max-w-[307px]'>Широкий ассортимент - от профиля до шурупа</span></li>
                        <li className='flex max-w-max lg:mt-[30px] mt-[10px] '> <span className='w-[11px] h-[11px] bg-[#BF282E]'></span> <span className='-mt-[6px] ml-[10px] max-w-[307px]'>Информационная и техническая поддержка партнеров on-line</span></li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
  );
};

export default Partnership;
