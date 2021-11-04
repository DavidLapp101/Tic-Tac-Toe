$(document).ready(function(){

//Sets global variables
    var thisTurn=1;
    var p1Score=0;
    var p2Score=0;
    var tie=0;
    var totalTurns=0;

//Function to clear board when someone has won
    function clearBoard(){
        $('.x').empty();
        $('.o').empty();
        $('.x').removeClass("x");
        $('.o').removeClass("o");
        $('.turn').text("1")
        totalTurns=0;
    }

//Function to see if player 1 (x) won
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
            thisTurn=1;
            return true;
        }
    }

//Function to see if player 2 (o) won
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
            return true;
        }
    }
    
//Function for the game, when a box is clicked it will add X/O depending on turn and check if there is a win
    $(".child").click(function(){
        if($(this).hasClass('x')||$(this).hasClass('o')){}
        else if(thisTurn==1){
            $(this).text('X');
            thisTurn=2;
            $('.turn').text("2")
            $(this).addClass('x')
            totalTurns=totalTurns+1;
            if(checkWinX()==true){
                $('#p1-score').text(p1Score=p1Score+1);
                clearBoard();
            }
            else if(totalTurns==9){
                $('#tie-score').text(tie=tie+1);
                clearBoard();
                console.log("Tie")
            }
            console.log(totalTurns);
        }
        else if(thisTurn==2) {
            $(this).text('O');
            thisTurn=1
            $('.turn').text("1")
            $(this).addClass('o')
            totalTurns=totalTurns+1;
            if(checkWinO()){
                $('#p2-score').text(p2Score=p2Score+1);
                clearBoard();
            }
            else if(totalTurns==9){
                $('#tie-score').text(tie=tie+1);
                clearBoard();
                console.log("Tie")
            }
            console.log(totalTurns);
        }

    });

});