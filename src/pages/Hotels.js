import React from "react"
import { useLocation } from "react-router-dom"
const Hotels = () => {
    const location = useLocation()
    const { destinationId, checkIn, checkOut, adultsNumber } = location.state
    console.log(destinationId, checkIn, checkOut, adultsNumber)
    return (
        <div>Hotels</div>
    )
}

export default Hotels