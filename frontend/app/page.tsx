'use client'
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apolloClient'
import Home from './Home'

const Main = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </main>
  )
}

export default Main
