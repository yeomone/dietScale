let height = document.querySelector('#height')
let weight = document.querySelector('#weight')
let goals_weight = document.querySelector('#goals_weight')
let goals = document.querySelector('#goals')
const result = document.querySelector('#result')

// 적정체중 = (본인신장-100)*0.9

result.addEventListener('click', function(){
    const normal_w = (Number(height.value)-100)*0.9;
    const over_w = weight.value - Number(normal_w);
    console.log(normal_w)
    goals_weight.value = normal_w;
    goals.value = `적정체중은 ${normal_w}kg이며 ${over_w}kg 초과되셨습니다`;
})