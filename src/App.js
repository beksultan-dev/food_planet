import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main/Main.js';
import New from './components/new/New.js';
import Menu from './components/menu/Menu.js';
import Reasons from './components/reasons/Reasons.js';
import Reviews from './components/reviews/Reviews.js';
import Footer from './components/footer/Footer.js';
import Cart from './components/cart/Cart.js';
import Header from './components/main/header/Header.js';
import NotFound from './components/not_found/NotFound.js';
import Order from './components/order/Order.js';
import Admin from './components/admin/Admin.js';
import AddFoods from './components/admin/add_foods/AddFoods.js';
import './App.css';

const MainPage = () => {
	return (
		<>
			<Main />
			<New />
			<Menu />
			<Reasons />
			<Reviews />
			<Footer />
		</>
	)
}

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={ <MainPage /> } />
				<Route path='/cart' element={ <Cart /> } />
				<Route path='/order' element={ <Order /> } />
				<Route path='/admin' element={ <Admin /> } />
				<Route path='/add_foods' element={ <AddFoods /> } />
				<Route path='/*' element={ <NotFound /> } />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
