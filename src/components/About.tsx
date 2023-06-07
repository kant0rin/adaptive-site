import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const About: FunctionComponent<Props> = (props) => {

  return (
      <section className='mt-[176px]'>
          <div className="content__container relative">
              <div className="container">
                  <div className='flex justify-center items-center flex-col-reverse xl:justify-normal lg:justify-between lg:flex-row'>
                      <div className='flex flex-col justify-center lg:justify-normal items-center lg:items-start mt-10 lg:mt-0'>
                          <h1 className='h1-50 lg:text-start text-center'>Кто мы - ANESCOM</h1>
                          <p className='h1-16-mont max-w-[438px] mt-[25px]'>Мы являемся поставщиками ПВХ и алюминиевого профиля и комплектующих для производства и установки светопрозрачных конструкций.</p>
                          <p className='h1-16-mont max-w-[438px] mt-5'>Наша цель - комплектация фирм-производителей пластиковых и алюминиевых окон, а также строительных компаний качественной продукцией и развитие оконных технологий, учитывать все требования и пожелания клиента.</p>
                          <p className='h1-16-mont max-w-[438px] mt-5'>Мы ценим Ваше доверие, а наши действия направлены на долгосрочную перспективу.</p>
                      </div>
                      <img src="/public/about/Rectangle 55.png" alt="house" className='ml-[107px] hidden xl:block'/>
                      <img src="/public/about/Rectangle 56.png" alt="house" className='xl:absolute right-0 top-0 w-[456px] h-[380px] object-cover '/>
                  </div>
              </div>

          </div>
          <div className="content__container relative">
              <div className='container mt-[103px]'>
                  <div className='flex xl:items-end xl:justify-end lg:justify-between flex-col lg:flex-row items-center justify-center '>
                      <img src="/public/about/Rectangle 57.png" alt="img" className='xl:absolute xl:w-[696px] xl:h-[443px] left-0 top-0 w-[456px] h-[450px] object-cover'/>
                      <div className='flex flex-col items-end mt-10 lg:mt-0'>
                          <h1 className='h1-40 lg:text-start text-center'>ANESCOM - это надежность.</h1>
                          <p className='h1-16-mont mt-[25px] max-w-[526px]'>Надежность как качество личности Сотрудников нашей Компании включает в себя пунктуальность, обязательность, верность, деловой подход, ответственность и порядочность.</p>
                          <p className='h1-16-mont mt-5 max-w-[526px]'>Надежность Компании же оценивается по ее финансовой стабильности, хорошей репутации, отношениям с партнерами, клиентами и сотрудниками, а также по степени устойчивости.</p>
                          <p className='h1-16-mont mt-5 max-w-[526px]'> За 13 лет присутствия на рынке Казахстана мы открыли 5 филиалов, зарекомендовали себя у 25 ведущих в отрасли поставщиков и 1200 партнеров. Вошли в пятерку лучших поставщиков по ПВХ профилю, открыли собственный цех по ламинации цветными пленками, создали большие складские запасы, что делает нас незаменимым партнером.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default About;
