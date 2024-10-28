const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const getDropDownList = async () => {
    try {
        const apiRes = await fetch(API_URL)
        const data = await apiRes.json();
        console.log(data.results)
        const option =  document.querySelector('option');
        const optionIdex = document.querySelector('#index')


       data.results?.map((item, index) => {
        const optionVal = optionIdex.innerHTML = item.name
              option.append(optionVal)
                
             
        })
        


    } catch (err) {
        console.log(err)
    }
 
};

getDropDownList()