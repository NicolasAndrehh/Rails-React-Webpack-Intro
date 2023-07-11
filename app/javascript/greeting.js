import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchGreeting } from "./greetingSlice"

function Greeting() {
    const dispatch = useDispatch()
    const greeting = useSelector(state => state.greeting)

    useEffect(() => {
        dispatch(fetchGreeting())
    }, [dispatch])

    return (
        <>
            <Link to="/">Home</Link>
            <p>{greeting}</p>
        </>
    )
}

export default Greeting