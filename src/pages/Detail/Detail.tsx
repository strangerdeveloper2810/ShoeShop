import React from 'react'
import { Container } from '@mui/material'
import ProductCard from '../../Components/ProductCard/ProductCard'
type Props = {}

export default function Detail(props: Props) {
  return (
   <Container maxWidth="xl">
    <div className="row mt-4">
      <div className="col-4">
        <img src="https://shop.cyberlearn.vn/images/adidas-prophere.png" alt="product" height={350} width={350} style={{objectFit:"cover"}}/>
      </div>
      <div className="col-8">
        <h3 className='text-success'>Product Name</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, sunt.</p>

      </div>
    </div>

    <h3 className="mt-3 text-center text-secondary"> Relate Product </h3>
    <div className="row">
      <div className="col-4">
        <ProductCard/>
      </div>

      <div className="col-4">
        <ProductCard/>
      </div>

      <div className="col-4">
        <ProductCard/>
      </div>
    </div>
   </Container>
   
  )
}