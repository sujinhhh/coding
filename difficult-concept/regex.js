const song = 'Smooth 993-99 like butter Like a criminal undercover Gon\' pop like trouble Breakin\' into your heart like that Cool shade stunner Yeah I owe it all to my mother Hot like summer'

const newSong = (s) => {
    let bts = ''
    bts += s.match(/g|l/gm)
    console.log(bts);

}
newSong(song)

// ^  : 제외시킴,  빈공간, 기호까지 나옴 , ^/시작하는
// g : 있는거 다 선택, g가 없으면 첫번째 거만 선택
// \w : 글자선택, 기호빼버림  \W : 글자가 
// \d : 숫자만  \D : 숫자만 빼고
// \s : 빈공간
//  점 . : 모두 선택
// ?=er : er 앞에
// [A-Z]\w+ : [A-Z] 시작하는 단어
// \d{3} : 숫자 3개
// (hear)?t : 옵션널 있으면 표시하고 없으면 t만
// h\w+ : h 로 시작하는 모든 단어 

document.getElementById('phoneNum').addEventListener('input', (event) => {
    const regax = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
    const input = document.getElementById('phoneNum');
    const format = document.querySelector('.phoneFormat')
    const phone = input.value;
    const found = regax.test(phone)
    if (!found && phone.length) {

    }
})