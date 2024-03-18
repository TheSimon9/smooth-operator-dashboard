'use client'
import {useState} from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    rating: '5'
  });

  const handleChange = (e: any ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/human', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submitted successfully!');
        setFormData({
          name: '',
          nickname: '',
          rating: ''
        });
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      // @ts-ignore
      console.error('Form submission failed:', error.message);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <form onSubmit={handleSubmit} className={"w-full max-w-xs mx-auto"}>
        <div className="mt-4">
          <label htmlFor={"name"} className="block mb-2">Name</label>
          <input required type="text" name={"name"} placeholder="" className="input input-bordered w-full max-w-xs" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mt-4">
          <label htmlFor={"nickname"}  className="block mb-2">Nickname</label>
          <input required type="text" name={"nickname"} placeholder="" className="input input-bordered w-full max-w-xs" value={formData.nickname} onChange={handleChange} />
        </div>
        <div className="mt-4">
          <label className="block mb-2">Rating</label>
          <div className="rating">
            <input type="radio" name="rating" value="1" className="mask mask-star-2 bg-orange-400" checked={formData.rating === '1'} onChange={handleChange} />
            <input type="radio" name="rating" value="2" className="mask mask-star-2 bg-orange-400" checked={formData.rating === '2'} onChange={handleChange}  />
            <input type="radio" name="rating" value="3" className="mask mask-star-2 bg-orange-400" checked={formData.rating === '3'} onChange={handleChange} />
            <input type="radio" name="rating" value="4" className="mask mask-star-2 bg-orange-400" checked={formData.rating === '4'} onChange={handleChange} />
            <input type="radio" name="rating" value="5" className="mask mask-star-2 bg-orange-400" checked={formData.rating === '5'} onChange={handleChange} />
          </div>
        </div>
        <div className="mt-8">
          <button className="btn btn-active">Submit review</button>
        </div>
      </form>
    </main>
  );
}
