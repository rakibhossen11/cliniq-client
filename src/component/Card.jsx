import React from 'react';

const Card = () => {
    return (
        <div className='shadow-2xl bg-white border-2 border-stone-400 rounded-2xl p-10'>
            <div>
                <img src="https://media.istockphoto.com/id/625147262/vector/anatomical-heart-isolated-muscular-organ-in-human.jpg?s=612x612&w=0&k=20&c=BdbuyaP22bVPjJR47zGED_oq_arBfmsSr9pqtKZ2Bwk=" alt="" />
            </div>
            <div>
            <h1 className='font-semibold mb-2 text-3xl text-green-600'>Plediatric Pulmology</h1>
            <p className='font-normal mb-2 text-xl  text-stone-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias repellendus autem, veritatis explicabo asperiores voluptates, ex optio sit vitae sed assumenda corporis impedit a! Pariatur aliquam nesciunt sint officia explicabo.</p>
            </div>
        </div>
    );
};

export default Card;