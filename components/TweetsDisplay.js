import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { FaUserAlt, FaEnvelope } from "react-icons/fa";

const TweetsDisplay = () => {

    const router = useRouter()
    const dispatch = useDispatch();
    const { artist } = useSelector((state) => state.albums);
    const { loading, error, tweets } = useSelector((state) => state.tweets);

    return (
        <div>
            {
                loading ?
                    <div className="flex items-center justify-center">
                        <div className="spinner-page"></div>
                    </div> :
                    <div className="">
                        {

                            tweets[0] ?

                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    {
                                        tweets.filter((item) => item.postId === artist.id).map(item => (
                                            <div key={item.id} className="rounded-md border border-chborder hover:border-chgreen p-4">
                                                <p className='text-chtext mb-3'>{item.body}</p>
                                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                                    <div className='flex items-center mb-5 md:mb-0'>
                                                        <FaUserAlt className='h-5 w-5 mr-3' />
                                                        <p className="text-chheader text-sm">{item.name.slice(0, 10)}</p>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <FaEnvelope className='h-5 w-5 mr-3' />
                                                        <p className="text-chheader text-sm">{item.email}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>
                                :

                                <div>
                                    <p className="text-chtext text-center">{error ? error : "No images found"}</p>
                                </div>
                        }
                    </div>
            }
        </div>
    )
}

export default TweetsDisplay
