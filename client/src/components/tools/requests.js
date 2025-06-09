const requests = {
    baseUrl: 'http://localhost:3000',
    async get(url) {
      
         console.log(url);
        const response = await fetch(`${this.baseUrl}/${url}`);
        if (response.ok) {

            return await response.json();
        }
        else {
            const message = response.json()
            throw message.error;
        }


  
    },

    async post(page, body, method) {
        try {
            const response = await fetch(`${this.baseUrl}/${page}`,
                {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });

            if (!response.ok) {
                const message = await response.json();
                const err = message.error
                throw err 
            }

            return await response.json();
        } 
        catch (error) {
            throw error;
        }
    },

    async deleteData(page) {
        try {
            const response = await fetch(`${this.baseUrl}/${page}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                const message = await response.json();
                const err = message.error
                throw err 
            }
        }
        catch (err){
            throw err
        }
    }

}
export default requests


