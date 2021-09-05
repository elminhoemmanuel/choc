import React, { useState} from 'react'
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup";
import PriBtn from './PriBtn';
import { createTweet, showCreate } from '../redux/actions/tweets'
import { FaWindowClose } from "react-icons/fa";


const schema = yup.object().shape({
    name: yup.string("Name must be a string").min(5, "Name must not be less than 5 characters").required("Name is reuired"),
    email: yup.string("Email must be a string").email("Must be a valid email").required("Email is required"),
    body: yup.string("Tweet must be a string").min( 10, "Tweet must not be less than 10 characters").required("Tweet is required"),
});

const CreateTweet = () => {

    const dispatch = useDispatch()
    const { artist } = useSelector((state) => state.albums);
    const { loading, error, tweetResponse } = useSelector((state) => state.tweets);
    const { register, handleSubmit, trigger , formState:{errors} } = useForm({
        resolver: yupResolver(schema), defaultValues: { name: "" , email:"", body:""}
    });


    const onSubmit = data => {
        // console.log(data)
        data.postId = artist.id
        dispatch(createTweet(data))   
    };


    return (
        <div className="absolute top-0 left-0 pt-6 px-6  w-full h-full bg-black bg-opacity-90 
         z-50 ">
            <div className='relative rounded-md bg-chmodal p-4 md:p-10 mx-auto w-full md:w-4/5 lg:w-3/5 modal-box overflow-y-auto'>
                <button
                onClick={()=>{dispatch(showCreate(false))}} 
                className='block focus:outline-none absolute right-0 top-0'>
                    <FaWindowClose className='text-chgreen h-8 w-8' />
                </button>
                <div className="py-6">
                    <h1 className="text-chgreen text-lg md:text-2xl text-center">Create Tweet</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='py-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-7'>
                        <div >
                            <input
                            onKeyPress={() => {trigger("name");}}
                            autoComplete="off" 
                            {...register("name")}
                            placeholder="Name"
                            className='bg-chinput w-full focus:outline-none block rounded-md p-3 border border-chinput hover:border-chgreen text-white' 
                            />
                            <p className='text-red-400 text-xs'>{ errors.name?.message}</p>
                        </div>
                        <div>
                            <input 
                            onKeyPress={() => {trigger("email");}}
                            autoComplete="off"
                            {...register("email")}
                            placeholder="Email"
                            className='bg-chinput w-full focus:outline-none block rounded-md p-3 border border-chinput hover:border-chgreen text-white' 
                            />
                            <p className='text-red-400 text-xs'>{ errors.email?.message}</p>
                        </div>

                    </div>
                    <div className='mb-3'>
                        <textarea
                        onKeyPress={() => {trigger("body");}}
                        autoComplete="off"
                        {...register("body")}
                        rows="3"
                        placeholder="Tweet"
                        className='bg-chinput w-full focus:outline-none block rounded-md p-3 border border-chinput hover:border-chgreen text-white'
                        >
                        </textarea>
                        <p className='text-red-400 text-xs'>{ errors.body?.message}</p>
                    </div>

                    <div>
                        <PriBtn clicked={()=>{}} btnType="submit" 
                        text={loading ? <div className="flex items-center justify-center"><div className="spinner-white"></div></div> : "Tweet" } 
                        />
                    </div>
                    <p className='text-red-400 text-xs mt-4'>{ error !== '' && error}</p>
                    <p className='text-green-400 text-xs mt-4'>{ tweetResponse.name === undefined ? "" : "Tweeted Successfully !!"}</p>

                </form>
            </div>
        </div>
    )
}

export default CreateTweet
