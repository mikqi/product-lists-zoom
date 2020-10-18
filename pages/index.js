import { motion } from "framer-motion"
import Link from 'next/link'
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import products from './items.json'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 }
}

export default function Index() {
  return (
    <>
      <Header />
      <motion.div
        className="grid grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        { products.map((product, idx) => (
          <ProductCard
            {...product}
            variants={item}
            key={product.image + idx}
          />
        ))}
      </motion.div>
    
    </>
  )
}
