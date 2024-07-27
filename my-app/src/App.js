import styles from './App.module.css';
import { useState } from 'react';
import moment from 'moment';

const getDate = () => moment(new Date()).format('DD.MM.YYYY HH:mm:ss');

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueVaild, setIsValueVaild] = useState(false);

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');

		if (promptValue.length >= 3) {
			setError('');
			setValue(promptValue);
			setIsValueVaild(true);
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
			if (promptValue.length < 3) {
			}
		}
	};
	const onAddButtonClick = () => {
		if (isValueVaild) {
			setList([...list, { id: Date.now(), value: value }]);
			setError('');
			setValue('');
			setIsValueVaild(false);

			console.log(list);
		}
	};

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles.pageHeading}>Ввод значения</h1>
				<p className={styles.noMarginText}>
					Текущее значение <code>value</code>: "
					<output className={styles.currentValue}>{value}</output>"
				</p>
				{error !== '' && <div className={styles.error}>{error}</div>}
				<div className={styles.buttonsContainer}>
					<button className={styles.button} onClick={onInputButtonClick}>
						Ввести новое
					</button>
					<button
						className={styles.button}
						disabled={!isValueVaild}
						onClick={onAddButtonClick}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles.listContainer}>
					<h2 className={styles.listHeading}>Список:</h2>
					{list.length === 0 && (
						<p className={styles.noMarginText}>Нет добавленных элементов</p>
					)}
					<ul className={styles.list}>
						{list.map(({ id, value }) => (
							<li key={id} className={styles.listItem}>
								{value} Создан: {getDate()}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};
