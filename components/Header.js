import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex w-full justify-between bg-white py-3 mb-4 border-b border-gray-200"
    >
      <div className="flex flex-col">
        <span className="uppercase text-xs text-gray-500">
          tuesday, october 14th
        </span>
        <span className="text-2xl font-bold">
          Today Foods
        </span>
      </div>
      <div className="self-end">
        <img src="images/avatar.jpg" className="w-8 rounded-full" />
      </div>
    </motion.div>
  )
}

export default Header
