export const API_URL = 'http://localhost:4040';


const POST_OPTIONS = {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
}


const updateUser = async (endpoint, data) => {

    try{

        const url = `${API_URL}${endpoint}`;

        const options = {
            ...POST_OPTIONS,
            body: JSON.stringify(data)
        }

        const response = await fetch(url, options);

        // as fetch doesn't explicitly throws an error we need to 
        // check for the ok flag in response. and throw error incase we encountered
        if (!response.ok) throw await response.json();

        const responseData = await response.json();        
        return responseData;
    } catch (error) {
        throw error;
    }
}

export const api = {
    updateUser
}