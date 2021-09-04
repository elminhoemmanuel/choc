import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getArtists } from '../redux/actions/list'
import { setArtist } from '../redux/actions/albums'
import { useRouter } from "next/router"
import PriBtn from '../components/PriBtn';


export default function Home() {

  const router = useRouter()
  const dispatch = useDispatch();
  const { loading, artists, error } = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(getArtists());
  }, [])

  const viewMore = (value) => {
    dispatch(setArtist(value));
    router.push(`/albums/${value.id}`);
  }

  return (
    <>
      <Head>
        <title>Choc City</title>
        <meta name="keywords" content="Choc City" />
      </Head>

      <div className={ artists === [] ? 'bg-chblack h-screen pt-20 pb-40 text-chtext px-6 md:px-12' : 'bg-chblack h-auto pt-20 pb-40 text-chtext px-6 md:px-12'}>
        <h1 className='text-2xl md:text-3xl text-center pt-4 pb-8 text-chgreen'>Our Artists</h1>
        <div className=''>
          {
            loading ?
              <div className="flex items-center justify-center">
                <div className="spinner-page"></div>
              </div> :
              <div className="">
                {

                  artists[0] ?

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                      {
                        artists.map(item => (
                          <div

                            className="block p-4 rounded-md bg-chcard border border-chborder hover:border-chgreen" key={item.id}>
                            <div>
                              <h1 className='mb-4 text-lg md:text-xl text-chheader'>{item.name}</h1>
                            </div>
                            <div>
                              <PriBtn clicked={() => { viewMore(item) }} text="View Details" />
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    :
                      
                    <div>
                      <p className="text-chtext text-center">{error ? error : "No items found"}</p>
                    </div>
                }
              </div>
          }
        </div>
      </div>
    </>
  )
}
