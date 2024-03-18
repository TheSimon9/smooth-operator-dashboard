'use client'
import {useState} from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    review: '',
    rating: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      nickname: '',
      review: '',
      rating: ''
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <form onSubmit={handleSubmit} className={"w-full max-w-xs mx-auto"}>
        <div className="mt-4">
          <label htmlFor={"name"} className="block mb-2">Name</label>
          <input type="text" name={"name"} placeholder="" className="input input-bordered w-full max-w-xs" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mt-4">
          <label htmlFor={"nickname"}  className="block mb-2">Nickname</label>
          <input type="text" name={"nickname"} placeholder="" className="input input-bordered w-full max-w-xs" value={formData.nickname} onChange={handleChange} />
        </div>
        <div className="mt-4">
          <label htmlFor={"review"} className="block mb-2">Review</label>
          <div>
            <textarea name={"review"} placeholder=""  className="textarea textarea-bordered" value={formData.review} onChange={handleChange} />
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-2">Rating</label>
          <div className="rating">
            <input type="radio" name="value-1" className="mask mask-star-2 bg-orange-400" checked={formData.rating === 'value-1'} onChange={handleChange} />
            <input type="radio" name="value-2" className="mask mask-star-2 bg-orange-400" checked={formData.rating === 'value-2'} onChange={handleChange}  />
            <input type="radio" name="value-3" className="mask mask-star-2 bg-orange-400" checked={formData.rating === 'value-3'} onChange={handleChange} />
            <input type="radio" name="value-4" className="mask mask-star-2 bg-orange-400" checked={formData.rating === 'value-4'} onChange={handleChange} />
            <input type="radio" name="value-5" className="mask mask-star-2 bg-orange-400" checked={formData.rating === 'value-5'} onChange={handleChange} />
          </div>
        </div>
        <div className="mt-8">
          <button className="btn btn-active">Submit review</button>
        </div>
      </form>
    </main>
  );
}
