var fruits = ['Apple', 'Orange', 'Banana'];

function searchFruit() {
    var input = document.getElementById('searchBox').value.trim(); 
    var found = fruits.some(fruit => fruit.toLowerCase() === input.toLowerCase()); 

    if (found) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
