const range=document.getElementById('range');
const discount=document.getElementById('billing');

const rangePrincing={
    1:{
        views:'10K',
       price:8
    },
    2:{
        views:'50K',
        price:12

    },
    3:{
        views:'100K',
      price:16
    },
    4:{
        views:'500K',
        price:24
    },
    5:{
        views:'1M',
        price:36

    },
}
showCurrentPrice(+range.value);
function showCurrentPrice(value){
    const currentPrice=rangePrincing[value];
    const price=discount.checked?currentPrice.price-currentPrice.price*.25:currentPrice.price;
    document.querySelector('.stats_views span').innerHTML=currentPrice.views;
    document.querySelector('.stats_price span').innerHTML=price;

}
range.addEventListener('change',(Event)=>{
    showCurrentPrice(+Event.target.value);

})
discount.addEventListener('change',()=>{
showCurrentPrice(+range.value);
})