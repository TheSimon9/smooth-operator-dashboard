
const resource = "/apis/intre.com/v1/namespaces/smoothoperator/humans"

export default async function handler(req, res) {
    const token = process.env.KUBE_BEARER_TOKEN;
    const endpoint = process.env.KUBE_ENDPOINT;

    if (req.method === 'POST') {
        const formData = req.body;

        const name = `${formData.name.toLowerCase()}-${crypto.randomUUID().toLowerCase()}`;
        var body = JSON.stringify({
            "apiVersion": "intre.com/v1",
            "kind": "Human",
            "metadata": {
                "name": name.substring(0,62),
                "namespace": "smoothoperator"
            },
            "spec": {
                "username": `${formData.nickname.toLowerCase()}`,
                "name": `${formData.name.toLowerCase()}`,
                "satisfaction": parseInt(formData.rating)
            }
        });

        const response = await fetch(endpoint + resource, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: body
        });

        if(!response.ok) {
            res.status(500).json({message: 'Failed!'});
        }

        res.status(200).json({message: 'Form submitted successfully!'});
    }
    else if(req.method === 'GET') {
        const response = await fetch(endpoint + resource, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok) {
            res.status(500).json({message: 'Failed!'});
        }

        const data = await response.json().then(data => data.items.map(item => item.spec));
        res.status(200).json(data);
    }
    else {
        // Method Not Allowed
        res.status(405).json({message: 'Method Not Allowed'});
    }
}
