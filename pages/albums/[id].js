import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../../redux/actions/albums'
import {useRouter} from 'next/router'
import AlbumsDisplay from '../../components/AlbumsDisplay';

export default function Home() {

  const router = useRouter()
  const dispatch = useDispatch();
  const { albums, artist, loading } = useSelector((state) => state.albums);


  useEffect(() => {
    dispatch(getAlbums());
  }, [])

  return (
    <>
      <Head>
        <title>Choc City | Albums</title>
        <meta name="keywords" content="Choc City" />
      </Head>

      <div className='bg-chblack h-screen pt-20 pb-40 text-chtext px-6 md:px-12'>
        <h1 className='text-2xl md:text-3xl text-center pt-4 pb-8 text-chgreen'>Albums for {artist.name} </h1>
        <div>
          <AlbumsDisplay />
        </div>
      </div>
    </>
  )
}
