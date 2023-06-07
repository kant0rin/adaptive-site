import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const Forms: FunctionComponent<Props> = (props) => {

    return (
        <section className='mt-28'>
            <div className="content_container relative xl:block flex flex-col-reverse items-center justify-center bg-white">
                <div className="container flex flex-col justify-center items-center xl:block pt-[37px]">
                    <div className='max-w-[520px]'>
                        <h1 className='h1-40 text-center xl:text-start'>Дни больших скидок
                            <br/> для строительных компаний</h1>
                        <form className='flex-col flex mt-[25px] pb-[38px]'>
                            <input type="text" placeholder='Ваше имя' className='pl-5 py-3 border-[#D9DADF] border h1-16-mont'/>
                            <input type="text" placeholder='Номер телефона' className='pl-5 py-3 border-[#D9DADF] border h1-16-mont mt-4'/>
                            <button className='mt-4 py-3 w-full h1-16-ubuntu text-[#BF282E;] border border-[#BF282E;]'>Получить предложение</button>
                        </form>

                    </div>
                </div>
                <img src="/forms/Rectangle%2087.png" alt="house_pic" className='xl:absolute block top-0 right-0 object-cover'/>
            </div>

            <div className="content_container relative xl:block flex flex-col-reverse items-center justify-center bg-white mt-[150px]">
                <div className="container flex flex-col justify-center items-center xl:block pt-[37px]">
                    <div className='max-w-[520px] xl:ml-auto'>
                        <h1 className='h1-40 text-center xl:text-start'>Ламинированный профиль - высокий стиль в мире оконной моды</h1>
                        <form className='flex-col flex mt-[42px] pb-[57px]'>
                            <input type="text" placeholder='Ваше имя' className='pl-5 py-3 border-[#D9DADF] border h1-16-mont'/>
                            <input type="text" placeholder='Номер телефона' className='pl-5 py-3 border-[#D9DADF] border h1-16-mont mt-4'/>
                            <button className='mt-4 py-3 w-full h1-16-ubuntu text-[#003062] border border-[#003062;]'>Получить предложение</button>
                        </form>

                    </div>
                </div>
                <img src="/forms/Rectangle%2087%20(1).png" alt="house_pic" className='xl:absolute block top-0 left-0 object-cover'/>
            </div>



        </section>
    );
};

export default Forms;
