import React from 'react';

const Stats = () => {
  return (
    <section className={"container"}>
      <div className="stats">
        <div className="stats__item">
          <div className="stats__item-num">
            <span>5</span>
            <span>+</span>
          </div>
          <p className="stats__item-name">страны</p>
        </div>
        <div className="stats__item">
          <div className="stats__item-num">
            <span>40</span>
            <span>+</span>
          </div>
          <p className="stats__item-name">больницы</p>
        </div>
        <div className="stats__item">
          <div className="stats__item-num">
            <span>70</span>
            <span>+</span>
          </div>
          <p className="stats__item-name">врачи</p>
        </div>
        <div className="stats__item">
          <div className="stats__item-num">
            <span>10</span>
            <span>+</span>
          </div>
          <p className="stats__item-name">услуги</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
