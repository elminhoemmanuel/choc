import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import Image from 'next/image'

const AlbumsDisplay = () => {

    const router = useRouter()
    const dispatch = useDispatch();
    const { album , artist, loading, error, photos } = useSelector((state) => state.albums);

    const displayPhotos = (value) => {
        for (let i = 0; i < 11; i++) {
            return <div

                className="rounded-md bg-chcard border border-chborder hover:border-chgreen">
                <Image layout="fill" src={value[i].url} className='w-full h-28 rounded' alt="album photo" />

            </div>

        }
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

                            photos[0] ?

                                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                                    {
                                        photos.filter((item, i) => i <= 9).map(item => (
                                            <div key={item.id} className="rounded-md border border-chborder hover:border-chgreen h-40 w-full">
                                                <Image width="" height="" src={item.url} className='rounded images block' alt="album photo" />

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

export default AlbumsDisplay
