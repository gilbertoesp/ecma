const promesa = () => {
    return new Promise((resolve, reject) => {
        if(false){ // cahnge value to provoke different behavior
            resolve('Hey!! Promesa cumplida');
        }else{
            reject('Oops!! Promesa incumplida');
        }
    })
}

promesa()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => {
        console.log("finally!!!")
    })