
const WHITE = 'white'
const BLACK = 'black'
const rand = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min)

function random_square(){
    return "abcdefgh"[rand(0,7)] + rand(1,8)
}

function square_color(square){
    var letter = square[0]
    var number = +square[1]

    var odd_color = WHITE
    var even_color = BLACK

    if("aceg".includes(letter)){
        odd_color = BLACK
        even_color = WHITE
    }

    return number % 2 == 0 ? even_color : odd_color
}

function spiff_and_spam(){
    var r = random_square()
    console.log(r, ':', square_color(r))
}

for(let i = 0; i < 22; i++){
    spiff_and_spam()
}