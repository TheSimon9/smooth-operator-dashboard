'use client'
import {useState} from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    message: ''
  });

  const handleChange = (e: any ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/site', {
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
          address: '',
          message: ''
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
          <input required type="text" name={"name"} placeholder="" className="input input-bordered w-full max-w-xs"
                 value={formData.name} onChange={handleChange}/>
        </div>
        <div className="mt-4">
          <label htmlFor={"address"} className="block mb-2">URL Address</label>
          <input required type="text" name={"address"} placeholder="" className="input input-bordered w-full max-w-xs"
                 value={formData.address} onChange={handleChange}/>
        </div>
        <div className="mt-4">
          <label htmlFor={"message"} className="block mb-2">Welcome Message</label>
          <input required type="text" name={"message"} placeholder="" className="input input-bordered w-full max-w-xs"
                 value={formData.message} onChange={handleChange}/>
        </div>
        <div className="mt-8">
          <button className="btn btn-active">Create you amazing site</button>
        </div>
      </form>
    </main>
  );
}
