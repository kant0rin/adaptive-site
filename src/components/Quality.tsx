import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Quality: FunctionComponent<Props> = (props) => {

  return (
      <section className='mt-[150px] flex-col flex'>
          <div className="container mb-[50px]">
              <h1 className='h1-50 text-center lg:text-start'>Качество продукции</h1>
          </div>
          <div className="content__container w-full">
              <div className='border-t border-b border-[#D9DADF]'>
                <div className="container py-[30px] flex items-center">
                    <p className='h1-20-ubuntu sm:ml-10 ml-0'>Классификация профилей</p>
                    <svg className='ml-auto' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.93464 0V10M9.93464 20V10M9.93464 10H0H20" stroke="#363636"/>
                    </svg>
                </div>
              </div>
              <div className=' border-b border-[#D9DADF]'>
                  <div className="container py-[30px] flex items-center">
                      <p className='h1-20-ubuntu sm:ml-10 ml-0'>Срок службы</p>
                      <svg className='ml-auto' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.93464 0V10M9.93464 20V10M9.93464 10H0H20" stroke="#363636"/>
                      </svg>
                  </div>
              </div>
              <div className=' border-b border-[#D9DADF]'>
                  <div className="container py-[30px] flex items-center">
                      <p className='h1-20-ubuntu sm:ml-10 ml-0'>Климат</p>
                      <svg className='ml-auto' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.93464 0V10M9.93464 20V10M9.93464 10H0H20" stroke="#363636"/>
                      </svg>
                  </div>
              </div>
              <div className=' border-b border-[#D9DADF]'>
                  <div className="container py-[30px] flex items-center">
                      <p className='h1-20-ubuntu sm:ml-10 ml-0'>Стабильность геометрии</p>
                      <svg className='ml-auto' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.93464 0V10M9.93464 20V10M9.93464 10H0H20" stroke="#363636"/>
                      </svg>
                  </div>
              </div>
              <div className=' border-b border-[#D9DADF]'>
                  <div className="container py-[30px] flex items-center">
                      <p className='h1-20-ubuntu sm:ml-10 ml-0'>Стабильность цвета окна</p>
                      <svg className='ml-auto' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.93464 0V10M9.93464 20V10M9.93464 10H0H20" stroke="#363636"/>
                      </svg>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Quality;
