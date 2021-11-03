$(document).ready(function(){

//Figures out what area is clicked and adds x or o to it
    var thisTurn=1;
    var p1Score=0;
    var p2Score=0;
    var tie=0;
    var won=false;

    function checkWinX(){
        if($('.row-1 .child.x').length===3 
        || $('.row-2 .child.x').length===3 
        || $('.row-3 .child.x').length===3
        || $('.col-1.x').length===3
        || $('.col-2.x').length===3
        || $('.col-3.x').length===3
        ||$('#1').hasClass('x')&&$('#5').hasClass('x')&&$('#9').hasClass('x')
        ||$('#3').hasClass('x')&&$('#5').hasClass('x')&&$('#7').hasClass('x')){
            console.log("x won");
            $('#p1-score').text(p1Score=p1Score+1);
        }
    }

    function checkWinO(){
        if($('.row-1 .child.o').length===3 
        || $('.row-2 .child.o').length===3 
        || $('.row-3 .child.o').length===3
        || $('.col-1.o').length===3
        || $('.col-2.o').length===3
        || $('.col-3.o').length===3
        ||$('#1').hasClass('o')&&$('#5').hasClass('o')&&$('#9').hasClass('o')
        ||$('#3').hasClass('o')&&$('#5').hasClass('o')&&$('#7').hasClass('o')){
            console.log("o won");
        }
    }
    
    $(".child").click(function(){
        if($(this).hasClass('x')||$(this).hasClass('o')){}
        else if(thisTurn==1){
            $(this).text('X');
            thisTurn=2;
            $('.turn').text("2")
            $(this).addClass('x')
            checkWinX();
            checkWinO();
        }
        else {
            $(this).text('O');
            thisTurn=1
            $('.turn').text("1")
            $(this).addClass('o')
            checkWinX();
            checkWinO();
        }

    });

});