import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const Contacts: FunctionComponent<Props> = (props) => {

    return (
        <section className='mt-[150px]'>
            <div className="container">
                <div className="flex flex-col">
                    <h1 className='h1-50'>Контакты</h1>
                    <div className='flex mt-[50px] justify-between flex-col lg:flex-row'>
                        <div className='flex flex-col'>
                            <h1 className='h1-22'>Актобе</h1>
                            <h1 className='h1-16-mont mt-[10px]'>+7 777 554 84 43</h1>
                            <h1 className='h1-16-mont mt-[2px] text-[#BF282E]'>aktobe@anescom.kz</h1>

                        </div>
                        <div className='flex flex-col lg:mt-0 mt-10'>
                            <h1 className='h1-22'>Астана</h1>
                            <h1 className='h1-16-mont mt-[10px]'>+7 777 554 84 43</h1>
                            <h1 className='h1-16-mont mt-[2px] text-[#BF282E]'>aktobe@anescom.kz</h1>

                        </div>
                        <div className='flex flex-col lg:mt-0 mt-10'>
                            <h1 className='h1-22'>Актау</h1>
                            <h1 className='h1-16-mont mt-[10px]'>+7 777 554 84 43</h1>
                            <h1 className='h1-16-mont mt-[2px] text-[#BF282E]'>aktobe@anescom.kz</h1>

                        </div>
                        <div className='flex flex-col lg:mt-0 mt-10'>
                            <h1 className='h1-22'>Атырау</h1>
                            <h1 className='h1-16-mont mt-[10px]'>+7 777 554 84 43</h1>
                            <h1 className='h1-16-mont mt-[2px] text-[#BF282E]'>aktobe@anescom.kz</h1>

                        </div>
                        <div className='flex flex-col lg:mt-0 mt-10'>
                            <h1 className='h1-22'>Уральск</h1>
                            <h1 className='h1-16-mont mt-[10px]'>+7 777 554 84 43</h1>
                            <h1 className='h1-16-mont mt-[2px] text-[#BF282E]'>aktobe@anescom.kz</h1>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contacts;
