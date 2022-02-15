import React, {useState} from 'react';
import styles from './Checkbox.module.scss';

const Checkbox = ({isCompleted, title, description}) => {
    const [isChecked, setIsChecked] = useState(isCompleted);

    return (
        <label className={styles.checkbox}>
            <input
                className={styles.checkboxInput}
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
            />

            <span className={styles.checkMarkBox}>
            <span className={styles.checkMark}/>
        </span>

            <div>
                <div className={`${styles.title} ${isChecked ? styles.checkedTitle : ""}`}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </label>
    )
}

export default Checkbox;