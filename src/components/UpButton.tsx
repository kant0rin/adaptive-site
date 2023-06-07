import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const UpButton: FunctionComponent<Props> = (props) => {

  return (
      <div className='container flex-center'>
          <button className='h1-16-mont text-[#003062] py-[11px] px-[36px] border border-[#003062] mt-[70px]'>Наверх</button>
      </div>
  );
};

export default UpButton;
