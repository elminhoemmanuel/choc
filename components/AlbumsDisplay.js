import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { setAlbum } from '../redux/actions/albums'
import PriBtn from './PriBtn';

const AlbumsDisplay = () => {

    const router = useRouter()
    const dispatch = useDispatch();
    const { albums, artist, loading, error } = useSelector((state) => state.albums);

    const viewPhotos = (value) => {
        dispatch(setAlbum(value));
        router.push(`/albums/photos/${value.id}`);
      }

    return (
        <div>
            {
                loading ?
                    <div className="flex items-center justify-center">
                        <div className="spinner-page"></div>
                    </div> :
                    <div className="">
                        {

                            albums[0] ?

                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                                    {
                                        albums.filter(item => item.userId === artist.id ).map(item => (
                                            <div

                                                className="block p-4 rounded-md bg-chcard border border-chborder hover:border-chgreen" key={item.id}>
                                                <div className='h-28'>
                                                    <h1 className='mb-4 text-lg text-chheader'>{item.title}</h1>
                                                </div>
                                                <div>
                                                    <PriBtn clicked={() => { viewPhotos(item) }} text="View Photos" />
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
    )
}

export default AlbumsDisplay
