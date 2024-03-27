let ID = new URL(location.href).searchParams.get('id');
let userURL = 'https://jsonplaceholder.typicode.com/users/'+ID;
fetch(userURL).then(res => res.json())
        .then(userData => {
            console.log(userData);
            let infoBlock = document.createElement('div')
            document.body.appendChild(infoBlock);
            for (let userDatum in userData) {
                let p = document.createElement('p')
                    if(userDatum === 'address' || userDatum === 'company'){
                        for (let element in userData[userDatum]) {
                            let p1 = document.createElement('p');
                            if(typeof userData[userDatum][element] === 'object' && userData[userDatum][element] !== null){
                                for(let geo in userData[userDatum][element]){
                                    let p2 = document.createElement('p')
                                    p2.innerText = `${geo}: (${userData[userDatum][element][geo]})`
                                    infoBlock.appendChild(p2)
                                }
                            }else {
                                p1.innerText = `${element}: (${userData[userDatum][element]})`
                                infoBlock.appendChild(p1);
                            }
                        }
                    }else {
                        p.innerText = `${userDatum}: (${userData[userDatum]})`
                        infoBlock.appendChild(p);
                    }
            }
        })