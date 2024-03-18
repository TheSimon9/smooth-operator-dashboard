'use client'
import {useEffect, useState} from "react";

interface Human {
  name: string;
  username: string;
  satisfaction: number;
}

export default function Page() {

  const [list,setList] = useState<Human[]>([]);

  useEffect(() => {
    fetch('/api/human', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      if (response.ok) {
        response.json().then(data => setList(data as Human[]));
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
          <th>Nickname</th>
          <th>Rating</th>
        </tr>
        </thead>
        <tbody>
        {
          list.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.satisfaction}</td>
            </tr>))
        }
        </tbody>
      </table>
    </div>
  );
}
