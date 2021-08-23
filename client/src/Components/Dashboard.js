import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import { currentUser, logout } from "../JS/actions/user"

const Dashboard = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.userReducer.user)
    const loading = useSelector(state => state.userReducer.loading)
    
    useEffect(() => {
        dispatch(currentUser())
    }, [])
    
    return (
        <div>
            {loading ? <h1>loading...</h1> : <h1>hello {user && user.name}</h1>}
        </div>
    )
}

export default Dashboard
