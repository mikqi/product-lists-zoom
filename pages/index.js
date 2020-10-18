import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import React, { useEffect } from "react"
import { useRouter } from 'next/router'
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import ProductDetail from './[id]'
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
  show: { opacity: 1, y: 0 },
}

export default function Index() {
  const router = useRouter()

  useEffect(() => {
    console.log(router)
  }, [router])

  return (
    <AnimateSharedLayout type="crossfade">
      <Header />

      <motion.div
        className="grid grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ y: 100, opacity: 0, transition: { duration: 1 } }}
      >
        { products.map((product, idx) => (
          <ProductCard
            {...product}
            variants={item}
            key={product.id}
          />
        ))}
        <AnimatePresence>
          {router.query.id && <ProductDetail id={router.query.id} />}
        </AnimatePresence>
      </motion.div>
    </AnimateSharedLayout>
  )
}
