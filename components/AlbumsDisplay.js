import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'

const AlbumsDisplay = () => {

    const router = useRouter()
    const dispatch = useDispatch();
    const { albums, artist, loading } = useSelector((state) => state.albums);

    return (
        <div>
            {
                loading ?
                    <div className="flex items-center justify-center">
                        <div className="spinner-page"></div>
                    </div> :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            albums.filter(item => item.userId === artist.id ).map(item => (
                                <div
                                    className="block p-4 rounded-md bg-chcard border border-chborder hover:border-chgreen" key={item.id}>
                                    <div>
                                        <h1 className='text-lg md:text-xl text-chheader'>{item.title}</h1>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default AlbumsDisplay
