import React from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '@pages/layout'

export const PrivateRoute = props => {
  const {
    isAuth,
    history,
    children
  } = props
  if (!isAuth) return <Redirect to='/login' />
  return (
    //eslint-disable-next-line
    <Layout history={history} children={children}/>
  )
}