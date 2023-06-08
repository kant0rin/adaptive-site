import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Opportunity: FunctionComponent<Props> = (props) => {

  return (
      <section className='mt-[140px]'>
          <div className="container">
              <div className="flex lg:justify-between justify-center items-center lg:items-start flex-col lg:flex-row">
                  <h1 className='max-w-[462px] h1-40 lg:text-start text-center'>Масштаб и возможности наших складов</h1>
                  <img src="../opportunity/Rectangle%2053.png" alt="img    " className='lg:mt-0 mt-10'/>
              </div>
          </div>
      </section>
  );
};

export default Opportunity;
