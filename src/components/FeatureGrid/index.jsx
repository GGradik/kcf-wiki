import React from 'react';
import styles from './FeatureGrid.module.css';

const features = [
    {
        title: 'Города и Нации',
        description: 'Создавайте свои города, объединяйтесь в нации и стройте империи в защищенных приватах.',
        icon: '🏰',
    },
    {
        title: 'Уникальная Экономика',
        description: 'Зарабатывайте монеты, продавая ресурсы Скупщику. Аукцион и магазины — скоро!',
        icon: '💰',
    },
    {
        title: 'Пивоварение',
        description: 'Создавайте собственные рецепты алкоголя и выдерживайте их в бочках для лучшего качества.',
        icon: '🍺',
    },
    {
        title: 'Кровавая Луна',
        description: 'Раз в несколько ночей мир становится опаснее, а награды — ценнее.',
        icon: '🌙',
    },
];

const FeatureGrid = () => {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {features.map((props, idx) => (
                        <div key={idx} className="col col--6">
                            <div className="text--center">
                                <span className={styles.featureIcon}>{props.icon}</span>
                            </div>
                            <div className="text--center padding-horiz--md">
                                <h3>{props.title}</h3>
                                <p>{props.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
