import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../hooks/useFirebase';


const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useFirebase();


    const onSubmit = data => {
        axios.post('https://enigmatic-garden-06051.herokuapp.com/review', data)
            .then(res => {

                if (res.data.insertedId) {
                    alert('Review Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <form className='addService' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} value={user.displayName} placeholder='Name' />
                <input {...register("email")} value={user.email} placeholder='Email' />

                <input type="number" {...register("rate", { min: 0, max: 5 })} placeholder='Rating Point' />
                <br />
                <textarea {...register("review")} rows="4" cols="50" placeholder='Review Text' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;