const color = document.getElementById('color')
const colorChanger = document.getElementById('color-changer')
const body = document.getElementsByTagName('body')[0]


const colors = ['red', 'green', 'blue', 'yellow']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
colorChanger.addEventListener('click',function(){
    for(let i = 0; i < colors.length; i++){
        if(getRandomInt(4) === 0){
            color.innerText = 'Red'
            body.style.backgroundColor = '#FF0000'
        }else if(getRandomInt(4) === 1){
            color.innerText = 'Green'
            body.style.backgroundColor = '#008000'
        }else if(getRandomInt(4) === 2){
            color.innerText = 'Blue'
            body.style.backgroundColor = '#0000FF'
        }else if(getRandomInt(4) === 3){
            color.innerText = 'Yellow'
            body.style.backgroundColor = '#FFFF00'
        }
    }
})
