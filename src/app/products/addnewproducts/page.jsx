'use client';

import React, { useState } from 'react';

const NewproductsAdd = () => {
  const [title, settitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const handelChangeEvent = (e) => {};

  return (
    <div>
      <div className="title mb-5">
        <h2 className="text-2xl">New Products</h2>
      </div>
      <form className="w-1/3" action="">
        <div className="flex flex-col mb-4">
          <label htmlFor="" className=" mb-2 text-xl">
            Name
          </label>
          <input
            name={title}
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className=" border border-blue-700 focus:outline-none rounded-sm px-3 py-2"
            placeholder="Product name"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="" className=" mb-2 text-xl">
            Product Description
          </label>
          <textarea
            name={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className=" border border-blue-700 focus:outline-none rounded-sm px-3 py-2"
            placeholder="Description"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="" className=" mb-2 text-xl">
            Price (in USD)
          </label>
          <input
            name={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            value={price}
            className=" border border-blue-700 focus:outline-none rounded-sm px-3 py-2"
            placeholder="Price"
          />
        </div>

        <button className="bg-blue-950 text-white px-6 rounded-md cursor-pointer py-2">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewproductsAdd;
