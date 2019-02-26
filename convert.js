
console.log('SCRIPT START')
window.addEventListener('load', (event) =>{
console.log('Declare testable functions.....................')

function convert(x) {
return x*0.453592
}

console.log('Defined convert=' + convert)

console.log('Declare event listeners .......................')

document.getElementById('clicker').addEventListener('click', function () {
 const i = parseInt(document.getElementById('weight').value)
 console.log('i=' + i)
 const ans =  'This weight in kilograms is ' + convert(i) + '.'
document.getElementById('result').innerHTML = ans
})

})

console.log('SCRIPT END')
