import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import s from './App.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersTC, sortUsers } from './reducers/ProductsReducer';
import { AppRootStateType } from './store/store';
import { ProductsDataType } from './API/Api';
import { Card } from './components/Card';

function App() {
  const dispatch = useDispatch()
  const products = useSelector<AppRootStateType, ProductsDataType | undefined>(state => state.productsReducer)
  const [filter, setFilter] = useState<boolean>(false)
  const items = filter ? products?.sortedProducts : products?.products

  async function setFilterItems(e: boolean) {
    setFilter(e)
    dispatch(sortUsers())
  }
  

  useEffect(() => {
    dispatch(getUsersTC())
  }, [])

  return (
    <div className={s.main}>
      <div className={s.exploreWrapper}>
        <div className={s.header}>
          <h3>Explore</h3>
          <p>Buy and sell digital fashion NFT art</p>
          <p><input type="checkbox" checked={filter} onChange={(e: ChangeEvent<HTMLInputElement>) => setFilterItems(e.currentTarget.checked)} /> filter available</p>
        </div>
        <div className={s.exploreWrapper__explore}>
          {items?.map(e => <Card key={e.product_id} item={e} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
