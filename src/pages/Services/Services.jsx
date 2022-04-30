import React, { useState } from 'react';
import styled from 'styled-components';

import { Container } from '../../components/UI/Container';

import img1 from '../../assets/services/bg1.jpg';
import img2 from '../../assets/services/bg2.jpg';
import img3 from '../../assets/services/bg3.jpg';
import img4 from '../../assets/services/bg4.jpg';
import img5 from '../../assets/services/bg5.jpg';
import img6 from '../../assets/services/bg6.jpg';
import img7 from '../../assets/services/bg7.jpg';
import img8 from '../../assets/services/bg8.jpg';

const Section = styled.section`
  padding: 60px 0;
  @media (max-width: 816px) {
    padding: 0;
  }
`;

const Item = styled.li`
  margin-bottom: 40px;
  position: relative;

  #services__item1,
  #services__item2,
  #services__item3,
  #services__item4,
  #services__item5,
  #services__item6,
  #services__item7,
  #services__item8 {
    position: absolute;
    top: -90px;
    left: 0;
  }
`;

const Header = styled.div`
  display: flex;
  cursor: pointer;
  &:hover svg {
    fill: var(--red);
  }
`;

const IconSVG = styled.div`
  margin-right: 30px;
  svg {
    transition: fill var(--trans);
  }
`;

const Name = styled.div`
  font-size: 30px;
  transition: color var(--trans);
  :hover {
    color: var(--red);
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const Info = styled.div`
  margin-left: 55px;
  @media (max-width: 500px) {
    margin-left: 0;
  }
`;

const Img = styled.img`
  margin: 30px 0;
  max-width: 1105px;
  width: 100%;
`;

const Text = styled.p`
  margin-bottom: 12px;
  color: var(--black);
  line-height: 1.2;
  font-weight: 300;
`;

function Services() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Section>
      <Container>
        <h1 className="title">Услуги клуба</h1>
        <ul>
          <Item onClick={() => setActiveTab(1)}>
            <div id="services__item1"></div>
            <a href="#services__item1">
              <Header>
                <IconSVG>
                  <svg
                    fill={activeTab === 1 ? 'var(--red)' : '#000'}
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M18.23.446s-.884 2.575-.369 5.146c.531 2.645 2.139 3.895 2.139 3.895v14.513h-16v-14.513s1.608-1.25 2.139-3.895c.515-2.571-.369-5.146-.369-5.146l2.23-.446.019.023c1.599 1.976 3.466 2.044 3.981 2.044 1.5 0 2.935-.752 4-2.067l2.23.446zm-9.865 1.313c.511 2.241 1.29 4.241 3.635 4.241 2.335 0 3.121-1.997 3.63-4.222-.813.637-2.03 1.286-3.629 1.283-1.317-.003-2.568-.457-3.636-1.302z" />
                  </svg>
                </IconSVG>
                <Name>Тренажёрный зал</Name>
              </Header>
              <Info style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                <Img src={img1} alt="" />
                <Text>
                  Огромный выбор блочных тренажёров на все группы мышц от ведущего производителя
                  фитнес-оборудования FOREMAN. Вам гарантированы эффективные тренировки вне
                  зависимости от возраста и уровня подготовки.
                </Text>
                <Text>
                  Работа со свободными весами – это следующий этап силового прогресса. Широчайший
                  выбор вариантов упражнений со штангой, гантелями и гирями поможет достичь вам
                  впечатляющих результатов.
                </Text>
                <Text>
                  Тренажёрный зал открывает возможности не только для набора мышечной массы, но и
                  для коррекции веса, выработки таких важных качеств как выносливость, сила,
                  функциональность и ловкость.
                </Text>
                <Text>
                  Наши инструкторы всегда подскажут вам ответ на любой интересующий вас вопрос и
                  помогут сделать тренировку эффективнее и увлекательнее. Тренировочный процесс,
                  техника выполнения упражнений, питание – мы знаем все аспекты правильного образа
                  жизни.
                </Text>
              </Info>
            </a>
          </Item>
          <Item onClick={() => setActiveTab(2)}>
            <div id="services__item2"></div>
            <a href="#services__item2">
              <Header>
                <IconSVG>
                  <svg
                    fill={activeTab === 2 ? 'var(--red)' : '#000'}
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M19 24h-14v-16l-2 1.084-3-3.612 6-5.472h12l6 5.505-3 3.647-2-1.152v16zm-11-23h8c-.365 1.846-1.792 3.5-4 3.5s-3.635-1.708-4-3.5z" />
                  </svg>
                </IconSVG>
                <Name>Кардиозона</Name>
              </Header>
              <Info style={{ display: activeTab === 2 ? 'block' : 'none' }}>
                <Img src={img2} alt="" />
                <Text>
                  Мы собрали все самые эффективные кардиотренажёры от ведущих мировых
                  производителей.
                </Text>
                <Text>
                  Любая цель вам по плечу – коррекция веса, тренировка сердечно-сосудистой системы,
                  разминка перед тренировкой или заминка после неё.
                </Text>
                <Text>
                  Кардиозона – это универсальный и эффективный инструмент поддержания хорошей
                  физической формы.
                </Text>
              </Info>
            </a>
          </Item>
          <Item onClick={() => setActiveTab(3)}>
            <div id="services__item3"></div>
            <a href="#services__item3">
              <Header>
                <IconSVG>
                  <svg
                    fill={activeTab === 3 ? 'var(--red)' : '#000'}
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M18 24h-12v-12l-3 10.357-3-.773 4-17.584 3.782-2.002c-.417 1.998.72 4.432 1.516 6.158.804-.703 1.301-1.157 2.7-2.252 1.394 1.093 1.822 1.485 2.7 2.251.83-1.796 1.935-4.186 1.518-6.158l3.784 2.003 4 17.584-3 .731-2.882-10.315-.118 12zm-6-3c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm0-3c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm0-3.001c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm0-2.998c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm0-3.001c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-2.425-2.15c-2.099-4.546-1.049-6.858 2.422-6.846 2.888 0 4.823 1.646 2.422 6.846-.877-.766-2.162-1.76-2.422-1.959-.029-.023-2.389 1.93-2.422 1.959zm2.438-2.226c1.396-.419 3.992-3.633-.013-3.624-4.009.009-1.39 3.228-.003 3.629l.016-.005z" />
                  </svg>
                </IconSVG>
                <Name>Functional zone</Name>
              </Header>
              <Info style={{ display: activeTab === 3 ? 'block' : 'none' }}>
                <Img src={img3} alt="" />
                <Text>
                  Ваша задача быть сильным, быстрым, выносливым и ловким, но совершенно нет времени
                  на долгие ежедневные тренировки? Тогда добро пожаловать в мир функционального
                  тренинга!
                </Text>
                <Text>
                  Здесь Вы можете выполнять различные комплексы интенсивных упражнений на все группы
                  мышц, разнообразив свои тренировки.
                </Text>
                <Text>
                  Оборудование для занятий в зоне функционального тренинга производства компании
                  Yousteel отвечает высоким мировым стандартам и позволит вам не только поддерживать
                  мышцы в тонусе, но и выйти на профессиональный уровень.
                </Text>
              </Info>
            </a>
          </Item>
          <Item onClick={() => setActiveTab(4)}>
            <div id="services__item4"></div>
            <a href="#services__item4">
              <Header>
                <IconSVG>
                  <svg
                    fill={activeTab === 4 ? 'var(--red)' : '#000'}
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M6.496 22.004h10.942v2h-10.942v-2zm-3.744-.35l-2.435-.571-.317 1.35 2.435.571.317-1.35zm18.496 0l2.435-.571.317 1.35-2.435.571-.317-1.35zm-3.253-.432h-12.009v-9.218l-2.664 9-3.019-.721 3.681-16.279 4.003-1.727v-1.242s1.414-1.022 4.004-1.031c2.589-.009 4.003 1.001 4.003 1.001v1.27l4.003 1.729 3.694 16.27-3.003.73-2.693-9v9.218zm-6.004-20.217c1.657 0 3.002.338 3.002.755 0 .416-1.345.754-3.002.754-1.657 0-3.003-.338-3.003-.754 0-.417 1.346-.755 3.003-.755z" />
                  </svg>
                </IconSVG>
                <Name>Зона тяжёлой атлетики</Name>
              </Header>
              <Info style={{ display: activeTab === 4 ? 'block' : 'none' }}>
                <Img src={img4} alt="" />
                <Text>
                  Тяжёлая атлетика — это скоростно-силовой вид спорта, включённый в Олимпийскую
                  программу соревнований. В основе лежит выполнение упражнений по подниманию штанги
                  над головой. Соревнования по тяжёлой атлетике сегодня включают в себя два
                  упражнения: рывок и толчок.
                </Text>
                <Text>
                  Наши инструкторы помогут Вам открыть для себя незабываемый мир тяжёлой атлетики.
                </Text>
                <Text>Будь быстрее, выше, сильнее!</Text>
              </Info>
            </a>
          </Item>
          <Item onClick={() => setActiveTab(5)}>
            <div id="services__item5"></div>
            <a href="#services__item5">
              <Header>
                <IconSVG>
                  <svg
                    fill={activeTab === 5 ? 'var(--red)' : '#000'}
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M11.6 24h-5.619l.019-10-2.983 8.721-3.017-.721 3.981-16 4-1.727c-.888-.944-1.355-2.337 0-3.242 0 0 1.432-1.018 4.019-1.027 2.587-.01 3.981.997 3.981.997 1.326.843.896 2.468 0 3.27l4 1.729 4.019 16-3 .73-3-8.73-.019 10h-5.581v-21.496c1.467-.05 2.6-.366 2.6-.748 0-.417-1.344-.755-3-.755s-3 .338-3 .755c0 .382 1.133.698 2.6.748v21.496zm3.545-7.021l-.645.469 2.355 3.234.645-.469-2.355-3.234zm-6.29 0l.645.469-2.355 3.234-.645-.469 2.355-3.234z" />
                  </svg>
                </IconSVG>
                <Name>Залы групповых программ</Name>
              </Header>
              <Info style={{ display: activeTab === 5 ? 'block' : 'none' }}>
                <Img src={img5} alt="" />
                <Text>
                  В нашем клубе, возможно, самое большое количество залов групповых занятий в
                  городе. Мы уверены, что из более чем 20 программ вы сможете найти именно ту,
                  которая вам нужна.
                </Text>
                <Text>
                  Профессиональные инструкторы и уникальная атмосфера помогут вам получить максимум
                  позитивных эмоций от тренировки.
                </Text>
                <Text>
                  С расписанием групповых занятий Вы можете ознакомиться в разделе ”Расписание”.
                </Text>
              </Info>
            </a>
          </Item>
          <Item onClick={() => setActiveTab(6)}>
            <div id="services__item6"></div>
            <a href="#services__item6">
              <Header>
                <IconSVG>
                  <svg
                    fill={activeTab === 6 ? 'var(--red)' : '#000'}
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M15.968 11l6.032 11.463s-2.112.804-5.554 1.249l-1.446-3.712.432 3.828c-1.062.105-2.228.172-3.479.172-1.219 0-2.352-.063-3.385-.164l.432-3.836-1.45 3.721c-3.458-.443-5.55-1.258-5.55-1.258l6.128-11.463h7.84zm-7.823-1l-1.162-4.09-2.44.794-1.543-2.429 5-4.275s2.039 1 4 1c1.961 0 3.978-1 3.978-1l5.022 4.275-1.543 2.429-2.44-.794-1.076 4.09h-7.796zm.362-8.709s1.497.709 3.493.709c1.996 0 3.546-.707 3.546-.707s-1.028 2.707-3.546 2.707-3.493-2.709-3.493-2.709z" />
                  </svg>
                </IconSVG>
                <Name>Зал единоборств</Name>
              </Header>
              <Info style={{ display: activeTab === 6 ? 'block' : 'none' }}>
                <Img src={img6} alt="" />
                <Text>Единоборства занимают первое место по популярности секций нашего клуба.</Text>
                <Text>
                  Мы предлагаем множество секций и персональных занятий по различным видам
                  единоборств.
                </Text>
                <Text>Занятия рассчитаны на все возрастные группы и уровни подготовки.</Text>
                <Text>Приходите и попробуйте на что вы способны!</Text>
              </Info>
            </a>
          </Item>
          <Item onClick={() => setActiveTab(7)}>
            <div id="services__item7"></div>
            <a href="#services__item7">
              <Header>
                <IconSVG>
                  <svg
                    fill={activeTab === 7 ? 'var(--red)' : '#000'}
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M10 24h-4v-17.61c.604-.093 1.22-.315 1.779-.753.804-.628 1.352-1.627 1.564-2.837h5.321c.212 1.21.76 2.209 1.564 2.837.557.436 1.17.658 1.772.752v17.611h-4l-1.968-15-2.032 15zm-4-21.2h2.529c-.192.951-.626 1.724-1.243 2.207-.364.286-.794.476-1.286.569v-2.776zm9.479 0h2.521v2.775c-.489-.094-.916-.283-1.279-.568-.617-.483-1.05-1.256-1.242-2.207zm2.521-.8h-12v-2h12v2zm-6-1.5c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5z" />
                  </svg>
                </IconSVG>
                <Name>Бассейн 25 метров</Name>
              </Header>
              <Info style={{ display: activeTab === 7 ? 'block' : 'none' }}>
                <Img src={img7} alt="" />
                <Text>
                  Вода — самый естественный природный тренажёр. Пользу занятий плаванием подтвердит
                  любой специалист и врач. Поэтому наш бассейн так популярен среди клиентов, и
                  поэтому мы уделяем занятиям в бассейне особое внимание.
                </Text>
                <Text>
                  Мы проводим групповые занятия и индивидуальные программы по плаванию для всех
                  возрастов и уровней подготовки.
                </Text>
                <Text>
                  Наши профессиональные тренеры помогут вам научиться плавать, делать это легко и
                  безопасно.
                </Text>
              </Info>
            </a>
          </Item>
          <Item onClick={() => setActiveTab(8)}>
            <div id="services__item8"></div>
            <a href="#services__item8">
              <Header>
                <IconSVG>
                  <svg
                    fill={activeTab === 8 ? 'var(--red)' : '#000'}
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M2 5h8.845l-1.961 3.397c-.066.115-.084.251-.05.38.034.128.118.237.233.303.115.066.251.084.379.05s.238-.118.304-.233l2.25-3.897 2.25 3.897c.066.115.176.199.304.233s.264.016.379-.05c.115-.066.199-.175.233-.303.034-.129.016-.265-.05-.38l-1.961-3.397h8.845l2 17-9.972 1-1.969-6.385-2 6.385-10.059-1 2-17zm20-1h-20v-3h20v3z" />
                  </svg>
                </IconSVG>
                <Name>Детский бассейн</Name>
              </Header>
              <Info style={{ display: activeTab === 8 ? 'block' : 'none' }}>
                <Img src={img8} alt="" />
                <Text>
                  Детское здоровье – это основная забота родителей. Обучение плаванию поможет
                  укрепить иммунитет и сделает малышей более устойчивыми к внешним негативным
                  факторам.
                </Text>
                <Text>
                  Обучение в группах превращает это полезное занятие в весёлое развлечение и
                  доставляет радость.
                </Text>
                <Text>
                  Наши инструкторы получили необходимое профильное образование и имеют многолетний
                  опыт работы с детьми различных возрастов, начиная с грудных детей.
                </Text>
                <Text>
                  В работе с детьми наши приоритеты – безопасность, индивидуальный подход и внимание
                  к каждому ребёнку.
                </Text>
              </Info>
            </a>
          </Item>
        </ul>
      </Container>
    </Section>
  );
}

export default Services;
