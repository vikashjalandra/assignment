import React, { useState } from 'react'
import { Rnd } from 'react-rnd'

function Card({ text }) {
  const [rnd, setRnd] = useState({ width: "200px", height: "200px", x: 10, y: 10 })
  const [collapsed, setCollapsed] = useState(true)

  const setPositions = (e, direction) => {
    setRnd(
      prevRnd => ({ ...prevRnd, x: direction.x, y: direction.y })
    )
  }

  const setSize = (e, direction, ref, delta, positions) => {
    setRnd(
      prevRnd => ({ ...prevRnd, width: parseInt(ref.style.width), height: parseInt(ref.style.height), ...positions })
    )
  }

  const handleCollapse =()=>{
    if (collapsed==true) {
      setCollapsed(false)
    } else if (collapsed==false) {
      setCollapsed(true)
    }
  }

  return (
    <div>
      <Rnd
        size={{ width: rnd.width, height: rnd.height }}
        position={{ x: rnd.x, y: rnd.y }}
        onDrag={setPositions}
        onResize={setSize}
        className="w-[300px] rounded-md border p-4 bg-white"
      >

          <div className="p-4">
            <p className="mt-3 text-sm text-gray-600 text-wrap">

            {collapsed ? `${text.substring(0, 20)}...` :text}
            </p>
            <button
              type="button"
              onClick={handleCollapse}
              className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read {collapsed ? "More" : "Less"}
            </button>
        </div>
      </Rnd>
    </div>
  )
}

export default Card
