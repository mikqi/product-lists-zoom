import { motion } from 'framer-motion'
import Link from 'next/link'

const ProductCard = ({ variants, image, name, price, id }) => {
  return (
    <motion.div
      transition={{ duration: 0.7, type: 'spring', stiffness: 200, damping: 30 }}
      variants={variants}
      exit={{ y: 100, opacity: 0 }}
      whileTap={{ scale: 0.94 }}
      layoutId={`product-card-container-${id}`}
      className="bg-white shadow-md rounded-md relative"
    >
      <motion.div layoutId={`product-card-image-${id}`}>
        <img
          src={`images/${image}.jpg`}
          className="rounded-t-md"
        />
      </motion.div>
      <motion.div layoutId={`product-card-detail-${id}`} className="p-2 flex flex-col">
        <span className="text-sm text-gray-800">
          {name}
        </span>
        <span className="text-xs text-gray-700">
          {price}
        </span>
      </motion.div>
      <Link href={`?id=${image}`} >
        <span className="absolute w-full h-full top-0 left-0">
          &nbsp;
        </span>
      </Link>
    </motion.div>
  )
}

export default ProductCard
