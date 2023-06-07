import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const reviews: FunctionComponent<Props> = (props) => {

    return (
        <section className='mt-[100px]'>
            <div className="container">
                <div className='flex lg:justify-between justify-center flex-col lg:flex-row lg:items-start items-center '>
                    <h1 className='h1-40'>Отзывы</h1>
                    <div className='flex mt-[30px] justify-center lg:w-max w-full flex-wrap '>
                        <img src="/public/reviews/1.png" alt="review" className='lg:mx-0 lg:my-0 mx-auto my-10'/>
                        <img src="/public/reviews/1-1.png" alt="review" className='lg:ml-[50px] lg:my-0 mx-auto my-10'/>
                        <img src="/public/reviews/1-2.png" alt="review"  className='lg:ml-[50px] lg:my-0 mx-auto my-10'/>
                        <img src="/public/reviews/1-3.png" alt="review"  className='lg:ml-[50px] lg:my-0 mx-auto my-10'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default reviews;
