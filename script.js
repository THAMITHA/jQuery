//  without jQuery using plain javascript

//var para1 = document.getElementById('para1');
//para1.innerHTML="Welcome";

// with using jQuery

// $('#para1').html('Welcome');
// $('#para1').hide();


// $('p').html('welcome');

// $('p').css('color','red');
// $('p').css('fontSize','30px');

// setting multiple css properties
$('p').css({
    fontSize: "100px",
    color: "red"
});

$('div').css({
    width: "100px",
    height: "100px",
    backgroundColor: "cyan"
})

// $('div').click(function(){
//     alert('Div is Clicked');
// });

// $('div').on('click',function(){
//     alert('Div is Clicked');
// })

$('div').on('click',function(event){
    var element=$(this);
    element.width(element.width()+ 10 +"px");
    alert('Div Clicked')
})
$('a').on('click',function(event){
    event.preventDefault();
    alert('Anchore tag is Clicked');
})

