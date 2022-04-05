import React from "react";
import { FC } from "react";
import { ProductType } from "../API/Api";
import s from './Card.module.scss'
import NFTImage from '../assets/images/NFTImage.png'
type CartType = {
  item: ProductType
}
export const Card: FC<CartType> = React.memo(function ({ item }) {

  return (
    <div className={s.card}>
      <div className={s.card__cover}>
        <img src={NFTImage} alt="" className={s.card__img} />
        <p className={s.card__created_by}>
          <span>created by</span>
          <span>{item.created_by.display_name}</span>
        </p>
        <p className={s.card__addiction}>
          <span>Digital addiction</span>
          <span>Number Seven</span>
        </p>
      </div>
      <div className={s.card__description}>
        <div className={s.card__description__column}>
          <span className={s.card__description__column__spanLeft}>available</span>
          <p>{item.quantity_available} of {item.quantity}</p>
        </div>
        <div className={s.card__description__column}>
          <span className={s.card__description__column__spanRight}>price</span>
          <p className={s.card__description__column__price}>{item.initial_price} ETH</p>
        </div>
      </div>
    </div>
  )
})