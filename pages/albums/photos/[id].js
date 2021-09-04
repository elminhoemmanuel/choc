import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useRouter} from 'next/router'
import { getPhotos } from '../../../redux/actions/albums';
import PhotosDisplay from '../../../components/PhotosDisplay'

export default function Home() {

  const router = useRouter()
  const dispatch = useDispatch();
  const { photos, artist, loading, album } = useSelector((state) => state.albums);


  useEffect(() => {
    dispatch(getPhotos(album.id));
  }, [])

  return (
    <>
      <Head>
        <title>Choc City | Photos</title>
        <meta name="keywords" content="Choc City" />
      </Head>

      <div className={ photos === [] ? 'bg-chblack h-screen pt-20 pb-40 text-chtext px-6 md:px-12' : 'bg-chblack h-auto pt-20 pb-40 text-chtext px-6 md:px-12'}>
        <h1 className='text-2xl md:text-3xl text-center pt-4 pb-8 text-chgreen'>Album Photos </h1>
        <div>
          <PhotosDisplay />
        </div>
      </div>
    </>
  )
}
