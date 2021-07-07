
export const sendRequest = async (url) => {
   const reasponse = await fetch(url);
   return await reasponse.json()
};

export const sendPostRequest = async (url, data) => {
    // const reasponse = await fetch('https://localhost:5001/api/Users/Authenticate', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json, text/plain',
    //         'Content-Type': 'application/json;charset=UTF-8'
    //     },
    //     mode: 'no-cors',
    //     cache: 'no-cache',
    //     body: JSON.stringify(data)
    // });
    // return await reasponse.json()
   const response = await fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Accept': 'application/json text/plain',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            if(data?.Data?.Status === 500){
               // console.error('Error:', data?.Data);
                throw new Error(JSON.stringify(data.Data));
            }
            else {
                return data;
            }

        });
    return response;
//     return new Promise((resolve,reject) => {
//         fetch(url, {
//             method: 'POST',
//             headers: {
//
//             },
//             body: JSON.stringify(data)
//         }).then(response => {
//             debugger;
//             response.json()
//         })
//             .then((res) => {
//                 if(res?.Data?.Status === 500){
//                     reject(res.Data)
//                 }
//                resolve(res);
//             } )
// })

};
