import styles from './AddFoods.module.css';

const AddFoods = () => {
	return (
		<div className={ styles.add_foods }>
			<div className={ styles.container }>
				<h1>Добавление нового товара</h1>

				<form className={ styles.form }>
					<input type="text" placeholder="Введите название товара" />
					<input type="text" placeholder="Введите описание товара" />
					<input type="text" placeholder="Введите цену товара" />
					<input type="text" placeholder="Введите ссылку на изображение" />
				</form>
			</div>
		</div>
	);
};

export default AddFoods;