/* * Create a list that holds all of your cards */

let cardsItems=['fa-diamond','fa-diamond','fa-paper-plane-o','fa-paper-plane-o','fa-anchor','fa-anchor','fa-bolt','fa-bolt','fa-cube','fa-cube','fa-bicycle','fa-bicycle','fa-leaf','fa-leaf','fa-bomb','fa-bomb'];

let open=[];
let match=0;
let moves=0;
let stars=3
let timer=0;
let min=0;
let sec=0;


let startInterval=setInterval(function(){
	sec=sec+1;	
	if(sec==59){
		min=min+1;
		sec=00;
	}

		$(".timer").text(min+":"+sec+" time")
},1000);


// Shuffle function
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function updateCards() {
    cardsItems = shuffle(cardsItems);
    var m= 0;
    $.each($(".card i"), function(){
      $(this).attr("class", "fa " + cardsItems[m]);
      m++;
    });
};
updateCards();





function ratings(){
	$('.fa-star').last().attr('class',"fa fa-star-o").css("color","red");
}




$('.card').click(function(){
	$(this).addClass("open show");
	$(this).addClass("pointer-event");

	if(open.length===0){		
		open.push($(this).children().attr('class'));
	}else if(open.length===1){		
		open.push($(this).children().attr('class'));


		if(open[0]===open[1]){
			matched();
			
			open.pop();
			open.pop();
		}

		else if(open[0]!==open[1]){			
			$(this).addClass('open show');
			var first='.'+open[0].slice(3);
			var second='.'+open[1].slice(3);
       
			setTimeout(function(){
				$(first).parent('.card').attr('class','card');
				$(second).parent('.card').attr('class','card');
				moves+=1;
				if((moves===16 || moves===20)){
					stars++;
					ratings();
				}
				$(".moves").text(moves);
				open.pop();
				open.pop();				
			},300)
		}
	}
});


 function matched(){

 	var first='.'+open[0];
			var second='.'+open[1];
			alert(first+' - '+second);
			$(first).parent('.card').attr('class','card match pointer-event');
			$(second).parent('.card').attr('class','card match pointer-event');
			match+=1;
			matchcondition();
			
 }

function matchcondition() {

	if(match===8){
				$('#myModal').modal('show');
				$('.moves').text(moves);
				$("#matches").text(match);
				$(".star").text(stars);
				$("#scoreTime").text(timer);

				let stopInterval=setInterval(function(){
					clearInterval(startInterval);
				});
			}
}

















































// //$(".card").each(function(){
// 	$('.card').click(function(){		
// 		var cn=$(this).children().attr('class');
// 		open.push(cn);
// 		if(open.length==2){
// 			if(open[0]===open[1]){
// 				$(one).attr('class','card open show');
// 				$(two).attr('class','card open show');
// 				alert(open);
// 				console.log(open[0],open[1]);
// 			}else if(open[0]!==open[1]){
// 				$(this).attr('class','card');
// 			}			
// 		}



// 		if(open.length>=2){
// 			open.pop();
// 			open.pop();
// 			alert(open);
// 		}else{
// 			$(this).addClass('open show');
// 			$(this).addClass('open show');
// 		}


// 	})
// //});


// $(".card").click(function(){
// 	var c1=$(this).addClass('open show');
// 	var c2=$(this).addClass('open show');
// 	alert(c1.className,c2.className);
// 	if($('li i')===$('li i')){
// 		$(".deck").c1.addClass('match');
// 		$(".deck").c2.addClass('match');
// 	}
// })





// $(".card").click(function(){
// 	var cn=$(this,'i').className;
// 	alert(cn);
// })

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
