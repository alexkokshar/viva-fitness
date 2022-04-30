import React, { useState } from 'react';

import ScheduleGroupName from '../ScheduleGroupName/SheduleGroupName';
import ScheduleTabs from '../ScheduleTabs/ScheduleTabs';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import DescriptionContainer from '../DescriptionContainer/DescriptionContainer';
import { groupSchedule } from '../../../data/scheduleData';

import './ScheduleGroup.scss';

function ScheduleGroup() {
  const [activeTab, setActiveTab] = useState('schedule');

  return (
    <div className="schedule__group">
      <ScheduleGroupName name="Расписание групповых программ" descr="Посещение от 14 лет" />
      <ScheduleTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'schedule' && <ScheduleTable schedule={groupSchedule} />}
      {activeTab === 'description' && (
        <DescriptionContainer>
          <ul>
            <li>
              <small className="descr-bold">Hot Iron 1, Hot Iron 2 </small>(Хот Айрон) - это
              программа силовых тренировок, в которых используются штанги. Данная фитнес-программа
              позволяет избавиться от подкожного жира, приобрести силовую выносливость, сформировать
              красивую фигуру и улучшить здоровье (50 мин.)
            </li>
            <li>
              <small className="descr-bold">Body training </small> - тренировка с использованием
              самого различного оборудования направленная на развитие всех мышечных групп. Позволяет
              достигать комплексного развития физических способностей и успешно содействует
              повышению общей работоспособности организма (50 мин.)
            </li>
            <li>
              <small className="descr-bold">Cross Training </small> – интенсивная интервальная
              тренировка, включающая в себя упражнения cross fit, направленных на развитие: силы,
              координации, баланса, тренировку мышечной выносливости, кардио-системы и улучшения
              рельефа мышц. (50 мин)
            </li>
            <li>
              <small className="descr-bold">Legs&Butt </small> - Тренировки по этой программе
              позволяют повысить силу и выносливость мышц ног и ягодиц, делают ноги более стройными,
              подтягивают и укрепляют ягодицы, сжигают лишние калории, улучшают кардиовыносливость.
              Оборудование на усмотрение тренера. (45-50 мин)
            </li>
            <li>
              <small className="descr-bold">Fit ball / Fit ball-Power </small> силовая тренировка с
              использование фитнес мячей / различного оборудования на усмотрение тренера (45-50 мин)
            </li>
            <li>
              <small className="descr-bold">Torso </small> - урок направлен на укрепление мышц
              верхнего плечевого пояса (мышцы спины, груди и плеч) (45-50 мин)
            </li>
            <li>
              <small className="descr-bold">Core&Butt </small> - силовая тренировка для укрепления
              мышц кора а также мышцами ягодиц, (45-50мин)
            </li>
            <li>
              <small className="descr-bold">ABS </small> - силовой класс, направленный на укрепление
              мышц живота+растяжка (45-50 мин)
            </li>
            <li>
              <small className="descr-bold">Step&Legs </small> - тренировка на укрепление всех мышц
              тела, развитие координации и повышение выносливости с использованием степ платформы+
              силовая тренировка мышц ног (50 мин.)
            </li>
            <li>
              <small className="descr-bold">Step Dance </small> - кардиотренировка c элементами
              танцевальных движений и использованием специальных степ платформ развивает координацию
              и эффективно сжигает калории (50мин)
            </li>
            <li>
              <small className="descr-bold">Step&ABS </small> - комбинированная тренировка на степ
              платформах в первой части и комплексом упражнений на пресс во второй части занятия (50
              мин)
            </li>
            <li>
              <small className="descr-bold">Zumba </small> - зажигательная танцевальная тренировка,
              на основе латинских ритмов. С ней вы обретёте великолепную форму и зарядиться
              позитивом.
            </li>
            <li>
              <small className="descr-bold">Core&Stretch </small> - тренировка средней интенсивности
              для укрепления мышц кора (низ спины, мышцы ягодиц, мышц пресcа)+ растяжка (45-50 мин)
            </li>
            <li>
              <small className="descr-bold">Stretch </small> - тренировки по программе улучшают
              гибкость и подвижность суставов, способствует снятию стресса и глубокому расслаблению
              (50 мин)
            </li>
            <li>
              <small className="descr-bold">Port De Bras </small> - восстановительное и
              реабилитационное занятие, основанное на функциональном и динамическом вытяжении.
              Развивает навыки и технику движения, способность гармонично и полноценно использовать
              возможности своего тела (50 мин.)
            </li>
            <li>
              <small className="descr-bold">Balance </small> - тренировки по данной программе
              улучшают гибкость и подвижность в суставах, силу мышечного корсета и осанку,
              успокаивают и понижают уровень стресса, сжигают калории (45-50 мин)
            </li>
            <li>
              <small className="descr-bold">Fitness+ </small> - занятие для людей пожилого возраста,
              включающее в себя силовые упражнения с легкими весами, упражнения на развитие
              координации движения, улучшение гибкости и дыхательные упражнения (45 мин)
            </li>
            <li>
              <small className="descr-bold">Fitness yoga </small> - урок направленный на достижение
              гармонии тела и духа. Поможет развить гибкость, укрепить мышцы и исправить осанку (50
              мин)
            </li>
            <li>
              <small className="descr-bold">Hatha Yoga </small> – Проверенная тысячелетиями практика
              развития личности, через физическое совершенствование тела и внутренней гармонии.
              Тренировка способствует нормализации психоэмоционального состояния, повышению силы и
              развитию гибкости. (90 мин.)
            </li>
          </ul>
        </DescriptionContainer>
      )}
    </div>
  );
}

export default ScheduleGroup;
