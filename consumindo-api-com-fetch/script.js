 // O método get é por padrão
 // Ela é uma requisição assíncrona (não vai esperar a resposta = response)
function fetchApiData(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => response.json())// Depois que ele fazer isso (transformar em json eu faço isso:)
        .then(data => {
            const list = document.querySelector('#fill_list');
            
            data.map((item) => { // Pega cada item do array
                const li = document.createElement('li');

                li.setAttribute('id', item.id)
                li.innerHTML = item.title;
                list.appendChild(li)
            })

        })
        

}


















/*Corpo da Response:
body
bodyUse
haders
ok
redirected
status
statusText
tyoe
url
*/ 


// function fetchApiData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/')
//         .then((response) => response.json())// Depois que ele fazer isso (transformar em json eu faço isso:)
//         .then((data) => console.log(data)); 
//         // Pronto, me comuniquei! Agora preciso fazer algo com esses dados
        
// }