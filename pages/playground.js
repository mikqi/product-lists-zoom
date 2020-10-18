import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const Playground = () => {
  const x = useMotionValue(0)
  const background = useTransform(
    x,
    [-100, 0, 100],
    ['#ff008c', '#7700ff', 'rgb(230, 255, 0)']
  )

  useEffect(() => {
    console.log(x)
    console.log(background)
  }, [x, background])

  function onTap(event, info) {
    console.log(info.point.x, info.point.y)
  }

  return (
    <motion.div style={{ background }}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x }}
        onTap={onTap}
      >
        <div x={x}>
          Something
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Playground
