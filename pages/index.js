import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function Home() {

  return (
    <>
      <Head>
        <title>Choc City</title>
        <meta name="keywords" content="Choc City" />
      </Head>

      <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
        Home
      </div>
    </>
  )
}
