import Head from 'next/head'
import React, { useState } from 'react'
import DashHomeInvestments from '../../components/DashHomeInvestments'
import DashNav from '../../components/DashNav'


export default function Home() {
  return (
    <>
        <Head>
            <title>Cropshares | Dashboard</title>
            <meta name="keywords" content="Cropshares, agri-bussiness investment made easy"/>
        </Head>

        <div className='2xl:max-w-screen-2xl 2xl:mx-auto pt-20 relative'>
          <DashNav />
          <DashHomeInvestments />
        </div>
    </>
  )
}
