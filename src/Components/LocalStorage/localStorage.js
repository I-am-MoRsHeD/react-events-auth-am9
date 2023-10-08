

const getStoredItems  = () =>{
    const storedItem = localStorage.getItem('cart');
    if(storedItem){
        return JSON.parse(storedItem);
    }
    return [];
}


const setItems = (id) =>{
    const storedItems = getStoredItems();
    const isExist = storedItems.find(cardId => cardId === id);

    if(!isExist){
        storedItems.push(id);
        localStorage.setItem('cart', JSON.stringify(storedItems));
    }
}

export{ getStoredItems, setItems};


