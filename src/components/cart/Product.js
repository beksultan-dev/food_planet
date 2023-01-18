import styles from './Cart.module.css';
import deletePng from '../../images/delete.png';

const Product = ({ title, title_desc, img_src, price, id, count, deleteData }) => {

	const countTotal = count * price;

	return (
		<>
			<div className={ styles.goods }>
				<div className={ styles.product_item }>
					<img src={ img_src } alt="img" />
					<p>{ title }</p>
				</div>
				<div className={ styles.amount_item }>
					<p>{ count }</p>
				</div>
				<div className={ styles.price_item }>
					<p>{ price } сом</p>
				</div>
				<div className={ styles.price_all_item }>
					<p>{ countTotal } сом</p>
				</div>
				<img onClick={ () => deleteData(title) } className={ styles.delete } src={ deletePng } alt="delete" />
			</div>
		</>
	)
}

export default Product;