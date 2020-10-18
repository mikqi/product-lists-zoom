import React from 'react'
import { motion } from 'framer-motion'

const ProductCard = ({ variants, image, name, price }) => {
  return (
    <motion.div
      transition={{ duration: 0.7, type: 'spring', stiffness: 200, damping: 30 }}
      variants={variants}
      whileTap={{ scale: 0.94 }}
      className="bg-white shadow-md rounded-md"
    >
      <img src={`images/${image}.jpg`} className="rounded-t-md" />
      <div className="p-2 flex flex-col">
        <span className="text-sm text-gray-800">
          {name}
        </span>
        <span className="text-xs text-gray-700">
          {price}
        </span>
      </div>
    </motion.div>
  )
}

export default ProductCard
