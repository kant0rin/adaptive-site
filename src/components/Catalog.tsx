import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const Catalog: FunctionComponent<Props> = (props) => {

    return (
        <section className='catalog mt-[150px]'>
            <div className="container flex flex-col items-center justify-center xl:block">
                <h1 className='h1-50 text-center'>Каталог</h1>
                <div className='flex xl:-mt-2 mt-2 items-center justify-center flex-col xl:flex-row'>
                    <div className='flex items-center flex-wrap'>
                        <img src="../catalog/Funke_Gruppe250_1_%20копия%201.png" alt="funke_group"/>
                        <img src="../catalog/image%2010.png" alt="proplex" className='ml-2'/>
                        <img src="../catalog/image 5.png" alt="tatprof" className='ml-2'/>
                        <img src="../catalog/image 6.png" alt="alprof" className='ml-2'/>
                        <img src="../catalog/image 7.png" alt="vitraj" className='ml-2'/>
                        <img src="../catalog/image 8.png" alt="crystalis" className='ml-2'/>
                        <img src="../catalog/image 9.png" alt="kale" className='ml-2'/>
                    </div>

                    <a href="#" className='xl:ml-auto xl:mt-0 mt-2 h1-16-ubuntu text-[#003062]'>Получить каталог</a>

                </div>
                <div className='mt-10 flex flex-wrap w-full justify-between'>
                    <div className='flex-col flex mb-[60px] sm:mx-0 mx-auto'>
                        <img src="../catalog/Rectangle 37.png" alt="img"/>
                        <h1 className='h1-16-mont mt-5'>Профильные системы </h1>
                    </div>
                    <div className='flex flex-col mb-[60px] sm:mx-0 mx-auto'>
                        <img src="../catalog/Rectangle 37-6.png" alt="img"/>
                        <h1 className='h1-16-mont mt-5'>Аллюминиевые системы</h1>
                    </div>
                    <div className='flex flex-col mb-[60px] sm:mx-0 mx-auto'>
                        <img src="../catalog/Rectangle 37-9.png" alt="img"/>
                        <h1 className='h1-16-mont mt-5'>Подоконные доски</h1>
                    </div>
                    <div className='flex flex-col mb-[60px] sm:mx-0 mx-auto'>
                        <img src="../catalog/Rectangle 37-3.png" alt="img"/>
                        <h1 className='h1-16-mont mt-5'>Поворотно-откидные замки</h1>
                    </div>
                    <div className='flex flex-col mb-[60px] sm:mx-0 mx-auto'>
                        <img src="../catalog/Rectangle 37-1.png" alt="img"/>
                        <h1 className='h1-16-mont mt-5'>Оконно-дверная фурнитура</h1>

                    </div>
                    <div className='flex flex-col mb-[60px] sm:mx-0 mx-auto'>
                        <img src="../catalog/Rectangle 37-7.png" alt="img"/>
                        <h1 className='h1-16-mont mt-5'>Москитная группа</h1>

                    </div>
                    <div className='flex flex-col mb-[60px] sm:mx-0 mx-auto'>
                        <img src="../catalog/Rectangle 37-2.png" alt="img"/>
                        <h1 className='h1-16-mont mt-5'>Монтажные пены</h1>

                    </div>
                    <div className='flex flex-col mb-[60px] sm:mx-0 mx-auto'>
                        <img src="../catalog/Rectangle 37-8.png" alt="img"/>
                        <h1 className='h1-16-mont mt-5'>Уплотнительная резина</h1>

                    </div>
                    <div className='flex flex-col mb-[60px] sm:mx-0 mx-auto max-w-[250px]'>
                        <img src="../catalog/Rectangle 37-10.png" alt="img"/>
                        <h1 className='h1-16-mont mt-5'>Откосные системы, сэндвич-панели</h1>

                    </div>
                    <div className='flex flex-col mb-[60px] sm:mx-0 mx-auto max-w-[250px]'>
                        <img src="../catalog/Rectangle 37-4.png" alt="img"/>
                        <h1 className='h1-16-mont mt-5'>Комплектующие для стеклопакетов</h1>

                    </div>
                    <div className='flex flex-col mb-[60px] sm:mx-0 mx-auto'>
                        <img src="../catalog/Rectangle 37-11.png" alt="img"/>
                        <h1 className='h1-16-mont mt-5'>Крепеж и химия</h1>

                    </div>
                    <div className='flex flex-col mb-[60px] sm:mx-0 mx-auto'>
                        <img src="../catalog/Rectangle 37-5.png" alt="img"/>
                        <h1 className='h1-16-mont mt-5'>Оборудование и станки</h1>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Catalog;
