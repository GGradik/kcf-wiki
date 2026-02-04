import React from 'react';
import styles from './RecipeCard.module.css';

const RecipeCard = ({ name, image, ingredients, cookingTime, distillation, aging, difficulty, effects }) => {
    return (
        <div className={styles.recipeCard}>
            <div className={styles.header}>
                <h3>{name}</h3>
                <span className={styles.difficulty}>Сложность: {difficulty}</span>
            </div>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img src={image} alt={name} />
                </div>
                <div className={styles.details}>
                    <h4>Ингредиенты:</h4>
                    <ul>
                        {ingredients.map((ing, idx) => (
                            <li key={idx}>{ing.name}: {ing.amount}</li>
                        ))}
                    </ul>
                    <div className={styles.process}>
                        <p><strong>Варка:</strong> {cookingTime}</p>
                        <p><strong>Дистилляция:</strong> {distillation}</p>
                        <p><strong>Выдержка:</strong> {aging}</p>
                    </div>
                    <div className={styles.effects}>
                        <h4>Эффекты:</h4>
                        {effects.map((eff, idx) => (
                            <span key={idx} className={styles.effectTag}>
                                {eff.name} {eff.level} ({eff.duration})
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
