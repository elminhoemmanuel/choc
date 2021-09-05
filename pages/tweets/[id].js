import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useRouter} from 'next/router'
import { getTweets, showCreate, reset } from '../../redux/actions/tweets'
import TweetsDisplay from '../../components/TweetsDisplay';
import PriBtn from '../../components/PriBtn';
import CreateTweet from '../../components/CreateTweet';

export default function Home() {

  const router = useRouter()
  const dispatch = useDispatch();
  const { artist } = useSelector((state) => state.albums);
  const { tweets, create, tweetResponse } = useSelector((state) => state.tweets);

  const modalShow = () =>{
    dispatch(showCreate(true));
    window.scrollTo(0, 0);
    dispatch(reset());
    // document.body.style.overflowY= 'hidden';
  }


  useEffect(() => {
    dispatch(getTweets());
    dispatch(showCreate(false));
  }, [])

  return (
    <>
      <Head>
        <title>Choc City | Tweets</title>
        <meta name="keywords" content="Choc City" />
      </Head>

      <div className={ tweets === [] ? 'bg-chblack h-screen pt-20 pb-40 text-chtext px-6 md:px-12' : 'bg-chblack h-auto pt-20 pb-40 text-chtext px-6 md:px-12'}>
        <h1 className='text-2xl md:text-3xl text-center pt-4 pb-8 text-chgreen'>Tweets for {artist.name} </h1>
        <div >
          
        </div>
        <TweetsDisplay />
        <div className="px-6 flex justify-center mx-auto md:w-2/5 w-full">
            <PriBtn clicked={()=>{modalShow();}} text="Add a Tweet" />
        </div>
        {
            create && <CreateTweet />
        }
      </div>
    </>
  )
}
