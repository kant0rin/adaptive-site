import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Facts: FunctionComponent<Props> = (props) => {

  return (
      <section className='mt-[60px]'>
        <div className="content__container bg-white">
            <div className="container flex flex-col">
                <h1 className='mt-[50px] h1-40 text-center lg:text-start'>Факты</h1>
                <div className='flex mt-[25px] pb-[55px] justify-between flex-wrap'>
                    <div className='flex flex-col mb-10 sm:mb-0'>
                        <h1 className='text-[#BF282E] h1-40'>13</h1>
                        <p className='h1-16-mont'>лет на рынке</p>
                    </div>
                    <div className='flex flex-col mb-10 sm:mb-0'>
                        <h1 className='text-[#BF282E] h1-40'>25</h1>
                        <p className='h1-16-mont'>заводов-поставщиков</p>
                    </div>
                    <div className='flex flex-col mb-10 sm:mb-0'>
                        <h1 className='text-[#BF282E] h1-40'>60</h1>
                        <p className='h1-16-mont'>лет гарантии</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-[#BF282E] h1-40'>1000</h1>
                        <p className='h1-16-mont'>застекленных объектов</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-[#BF282E] h1-40'>1200</h1>
                        <p className='h1-16-mont'>партнеров нам доверяют</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
  );
};

export default Facts;
