import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from "react"
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
      staggerChildren: 0.14
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
}

export default function Index() {
  const router = useRouter()
  const [id, setId] = useState('')
  const query = router.query

  useEffect(() => {
    setId(query.id)
  }, [query])

  return (
    <AnimateSharedLayout type="crossfade">
      <div className={`min-h-screen ${id && 'overlay-active'}`}>
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
            {id && <ProductDetail id={id} />}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimateSharedLayout>
  )
}
