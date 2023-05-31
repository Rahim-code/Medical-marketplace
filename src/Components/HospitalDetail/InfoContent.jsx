import React from 'react';
import {Button, Divider} from "antd";
import infoIcon from '../../assets/Svg/info-green.svg'

const InfoContent = () => {
  return (
    <div className={"hospital__info-content container"}>
      <div className={"info__content-left"}>
        <h4 className={"info__content-left--title"}>Вы можете получить скидку до -40%!</h4>
        <p className={"info__content-left--subtitle"}>Чтобы сэкономить, просто забронируйте клинику.
          ОПИСАНИЕ КЛИНИКИ кроме телефона, сайта и электронной почты.</p>
        <div className={"info__content-left--desc"}>
          <p>You're eligible for a Genius discount at Wierszyki Shelters! To save at this property, all you have to do
            is gn in.</p>
          <p>Located in Zakopane in the Małopolskie region and Tatra National Park reachable within 0.7 miles, Wierszyki
            Shelters has accommodations with free WiFi, a playground, a garden and free private parking.</p>
          <p>
            Each unit has an equipped kitchenette, a living room with a sofa bed and flat-screen TV and private bathroom
            with a hairdryer and a shower. Some units have a terrace and/or a balcony with city or mountain views.
          </p>
          <p>The chalet provides a grill.</p>
          <p>Zakopane Aqua Park is 3.1 km from Wierszyki Shelters, while Zakopane Railway Station is 3.2 km from the
            property. The nearest airport is Poprad-Tatry Airport, 70.8 km from the accommodation.</p>
          <p>This is our guests' favorite part of Zakopane, according to independent reviews.</p>
          <p>Couples in particular like the location – they rated it 10 for a two-person trip.</p>
        </div>
      </div>
      <div className={"info__content-right"}>
          <div className={"info__content-right--benefit"}>
            <h4 className={"info__content-right--benefit-title"}>Преимущества этого варианта</h4>
            <p className={"info__content-right--benefit-subtitle"}>идемьно подходит </p>
            <Divider style={{margin:"0.5rem 0"}}/>
            <ul>
              <li>Отличное раположение</li>
              <li>Понятная экономия</li>
              <li>Бронирование без комисси</li>
              <li>Бронируйте сейчас, платите и на месте</li>
              <li>Бесплатное бронирование</li>
            </ul>
            <Button type={"primary"} style={{backgroundColor:"#5282FF", height:"61px", fontSize:"18px"}} block>Забронировать</Button>
          </div>
          <div className={"info__content-right--info"}>
            <h4 className={"info__content-right--info-title"}>
              <img src={infoIcon} alt=""/>
              Надежная информация</h4>
            <p className={"info__content-right--info-desc"}>Описание и фотографии этого варианта
              noностью соответствуют
              действительности. </p>
          </div>
      </div>
    </div>
  );
};

export default InfoContent;
