fetch('tux.json')
    .then(reponse =>reponse.json())
    .then(data => {
        console.log(data)
        return new Promise (function(resolve,reject)
        {
            if (typeof data !== Array)
            {
                reject('data must be an array');
            }
            else
            {
                resolve(data);
            }
        });
    })
    .catch(error => console.log(error));