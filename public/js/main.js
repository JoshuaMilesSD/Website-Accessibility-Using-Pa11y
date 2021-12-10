// Fetch accessibility issues
const testAccessibility = async (e) =>{
    e.preventDefault()

    const url = document.querySelector('#url').value

    if(url === ''){
        alert('Please add a url')
    } else
}
//add issues to DOM

//set loading state

//Escape HTML

document.querySelector('#form').addEventListener('submit', testAccessibility)