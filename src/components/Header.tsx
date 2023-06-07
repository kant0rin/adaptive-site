import React, {FunctionComponent, useState} from 'react';
import {RxCross2, RxHamburgerMenu} from "react-icons/rx";
interface OwnProps {}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {

    const [isActive, setActive] = useState<boolean>(false)

    return (
        <header className="header flex-center bg-none z-10 relative">
            <div className='absolute top-[38px] left-[26px]'>
                <svg width="61" height="25" viewBox="0 0 61 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.2381 3.88566C33.5213 1.49745 36.7285 0.00728432 40.2799 0.00728432H60.9402L57.794 5.49342H40.2726C37.5171 5.49342 35.1244 7.08036 33.9595 9.39261C33.4655 10.3656 33.1916 11.4624 33.1916 12.6216C33.1916 15.5895 32.1704 18.3221 30.4701 20.4752C30.2303 20.779 29.9699 21.0756 29.7022 21.3587C27.42 23.7531 24.2118 25.237 20.6614 25.237H8.03406C5.49764 25.237 3.22892 24.0362 1.75503 22.1797C1.48733 21.8488 1.24754 21.4898 1.04185 21.1172C0.38346 19.9445 0 18.5917 0 17.1494C0 12.6976 3.61962 9.06169 8.03406 9.06169H20.6614C22.9642 9.06169 25.0479 10.0482 26.5146 11.6216L26.6252 11.7454C26.6045 12.0358 26.5973 12.3324 26.5973 12.6289C26.5973 15.065 25.1513 17.1556 23.0738 18.088C23.1833 17.7977 23.2454 17.4803 23.2454 17.1494C23.2454 15.7133 22.0795 14.5405 20.6542 14.5405H8.03406C6.60875 14.5405 5.44286 15.7133 5.44286 17.1494C5.44286 17.6874 5.6072 18.1848 5.88214 18.5979C6.34725 19.2951 7.13588 19.7509 8.02683 19.7509H20.6614C23.4169 19.7509 25.8086 18.164 26.9745 15.8517C27.3714 15.065 27.6257 14.1961 27.7146 13.2772C27.7352 13.0639 27.7425 12.8433 27.7425 12.6154C27.7425 9.64756 28.7637 6.9149 30.4639 4.76186C30.7037 4.458 30.9642 4.16143 31.2308 3.87838L31.2381 3.88566ZM20.6676 0.00728432C24.219 0.00728432 27.4262 1.49745 29.7094 3.88566C28.4205 5.46532 27.4748 7.33635 26.9807 9.38533C25.8086 7.07412 23.4231 5.48613 20.6676 5.48613H3.14624L0 0L20.6676 0.00728432ZM40.2799 19.7509H57.794L60.9402 25.237H40.2726C36.7223 25.237 33.514 23.7469 31.2308 21.3587C32.5197 19.778 33.4655 17.908 33.9595 15.859C35.1316 18.1702 37.5171 19.7582 40.2726 19.7582" fill="#363636"/>
                </svg>
            </div>
            <div className="container hidden lg:block">
                <nav className='w-full flex-end py-9'>
                    <ul className='flex-center'>
                        <li className='h1-16-mont mr-10 nav-link__active cursor-pointer'>Главная</li>
                        <li className='h1-16-mont mr-10 cursor-pointer' >Каталог </li>
                        <li className='h1-16-mont mr-10 cursor-pointer'>Качество продукции</li>
                        <li className='h1-16-mont mr-10 cursor-pointer'>Партнерам </li>
                        <li className='h1-16-mont mr-10 cursor-pointer'>О компании </li>
                        <li className='h1-16-mont cursor-pointer'>Контакты </li>

                    </ul>
                </nav>
            </div>

            <div className='flex items-center justify-end lg:hidden w-full py-[36px]'>
                <button className='burger-button pr-[15px]' onClick={() => setActive(true)}><RxHamburgerMenu className='text-[30px]'/></button>
            </div>
            <div className="flex items-center justify-end lg:hidden">
                <nav className=' burger-menu fixed top-0 right-0 w-[300px] bg-[#fafafa] h-full burger-menu z-20'
                     style={isActive === false ? {transform:'translateX(300px)'} : {transform: 'translateX(0)'}}
                >

                    <ul className='flex-col flex-center mt-10'>
                        <RxCross2 className='absolute top-6 right-6 text-[20px] cursor-pointer' onClick={() => setActive(false)}/>
                        <li className='h1-16-mont mt-8 nav-link__active cursor-pointer'>Главная</li>
                        <li className='h1-16-mont mt-8 cursor-pointer' >Каталог </li>
                        <li className='h1-16-mont mt-8 cursor-pointer' >Качество продукции </li>
                        <li className='h1-16-mont mt-8 cursor-pointer' >Партнерам </li>
                        <li className='h1-16-mont mt-8 cursor-pointer' >О компании </li>
                        <li className='h1-16-mont mt-8 cursor-pointer' >Контакты </li>

                    </ul>
                </nav>
            </div>


        </header>
    );
};

export default Header;
