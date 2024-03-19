'use client'
import {useEffect, useState} from "react";

interface Site {
  name: string;
  address: string;
  message: string;
}

export default function Page() {

  const [list,setList] = useState<Site[]>([]);

  useEffect(() => {
    fetch('/api/site', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      if (response.ok) {
        response.json().then(data => setList(data as Site[]));
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    })
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Welcome Message</th>
        </tr>
        </thead>
        <tbody>
        {
          list.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.message}</td>
            </tr>))
        }
        </tbody>
      </table>
    </div>
  );
}
