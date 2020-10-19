import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import products from './items.json'
import Link from 'next/link'

function getProduct(id) {
  return products.find(product => product.id === id)
}

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(() => getProduct(id))

  useEffect(() => { 
    setProduct(getProduct(id))
  }, [id])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="z-0 fixed w-screen h-screen bg-black opacity-75 top-0 left-0"
      >
        <Link href="/">
          <span className="w-full h-full absolute top-0 left-0">&nbsp;</span>
        </Link>
      </motion.div>
      {product ? (
        <motion.div
          layoutId={`product-card-container-${id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
          className="bg-white rounded-2xl z-10 fixed m-4 right-0 md:right-auto bottom-0 max-w-lg  "
        >
          <motion.img
            className="rounded-t-2xl w-full h-64 object-cover"
            layoutId={`product-card-image-${id}`}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            src={`/images/${product.image}.jpg`}
          />
          <motion.div
            layoutId={`product-card-detail-${id}`}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="p-4"
          >
            <h2 className="text-2xl">{product.name}</h2>
            <h3 className="text-sm text-gray-600">{product.price}</h3>
            <p className="text-sm text-gray-800 mt-2">Lorem ipsum odor amet, consectetuer adipiscing elit. Maximus penatibus vestibulum fermentum tellus nunc. Nec lectus ligula platea; parturient pellentesque senectus.</p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-md bg-red-500 text-white py-2 mt-4"
            >
              Add To Cart
            </motion.button>
          </motion.div>
        </motion.div>
      ): ''}
    </>
  )
}

export default ProductDetail
