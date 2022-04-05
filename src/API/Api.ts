import axios from 'axios'

type ImgType = {
  original: string,
  compressed: string,
}

type OtherFileType = {
  original: string
}

type CreatedByType = {
  user_id: number,
  display_name: string,
  public_address: string,
  custom_url: string,
  image: ImgType
}

type AdditionalPhotosType = ImgType[]

type AttributeType = {
  trait_type: string,
  value: string,
}

export type JsonNFTType = {
  attributes: AttributeType[],
  description: string,
  external_url: string,
  image: string,
  name: string,
}


export type ProductType = {
  product_id: number,
  name: string,
  description: string,
  quantity: number,
  initial_price: number,
  type: string,
  avatar: ImgType,
  other_file: OtherFileType,
  additional_photos: AdditionalPhotosType,
  created_by: CreatedByType,
  json_nft_data: JsonNFTType,
  json_nft_link: string,
  tx_status: string,
  created_at: string,
  updated_at: string,
  quantity_nfts_created: number,
  on_main_page: boolean,
  is_wearable: boolean,
  latest_price: string,
  quantity_available: number
}


export type ProductsDataType = {
  products: ProductType[],
  creators: CreatedByType[],
  sortedProducts: ProductType[]
}
type ResponseType = {
  status: boolean,
  data: ProductsDataType
}

const instance = axios.create({
  baseURL: 'https://artisant.io/api/products',
  withCredentials: true,
})

export const API = {
  getProducts() {
    return instance.get<ResponseType>('')
  }
}