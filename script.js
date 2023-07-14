let button  = document.querySelector('.lightsaber__part-2__button');
let lightsaber = document.querySelector('.lightsaber__part-4');
let lightsaber_color = 'color_red';
let colors_box = [...document.querySelector('.colors_box').children];
let choosen_color = 'red';

colors_box.forEach(element => {
    element.addEventListener('click', ()=>{
        choosen_color = element.classList[1].split('_')[1];
    })
});

button.addEventListener('click', ()=>{
    document.querySelector('.panel_description').style.visibility = 'hidden'; 
    let audio = new Audio();

    if (button.classList.contains('off')){
        audio.src = './sounds/on.mp3';
        audio.play();
        button.classList.remove('off');
        button.classList.add('on');
        lightsaber.classList.remove('lightsaber_off');
        lightsaber.classList.add('lightsaber_on');
        document.querySelector('.lightsaber_on').style.animationName = 'lightsaber_light_'+choosen_color;
    }
    else{
        audio.src = './sounds/off.mp3';
        audio.play();
        button.classList.remove('on');
        button.classList.add('off');
        lightsaber.classList.remove('lightsaber_on');
        lightsaber.classList.add('lightsaber_off');
    }
})

