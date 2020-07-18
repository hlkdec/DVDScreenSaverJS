$(document).ready(function(){

	let square= $('.square');
	let element= square.position();
	let docWi= $(document).width();
	let docHe= $(document).height();
	let sqWi= square.width();
	let sqHe= square.height();
	let sqBott= docHe-sqHe;
	let sqRight= docWi-sqWi;
	let speed= 0.1;


	function changeColor(){
		var r=Math.round(Math.random()*255);
		var g=Math.round(Math.random()*255);
		var b=Math.round(Math.random()*255);
		square.css('background-color',"rgb(" + r + "," + g + ","+ b + ")");
		// console.log(r,g,b);
	}

	const top = parseInt(square.css('top'));
	const left= parseInt(square.css('left'));
//````````
	function bottomLeft(){
		let topRightInterval = setInterval(()=>{
			const top = parseInt(square.css('top'));
			const left= parseInt(square.css('left'));
			if (top===sqBott){
				topRight();
				clearInterval(topRightInterval);
				changeColor()
			}
			else if (left===0){
				rightBottom();
				clearInterval(topRightInterval);
				changeColor()
			}
			else{
				square.css({
					top:top+1+'px',
					left:left-1+'px'
				})
			}
		},speed)
	}

//``````
	function topRight(){
		let topRightInterval = setInterval(()=>{
			const top = parseInt(square.css('top'));
			const left= parseInt(square.css('left'));
			if (top===0){
				bottomLeft();
				clearInterval(topRightInterval);
				changeColor()
			}
			else if (left===0){
				topLeft();
				clearInterval(topRightInterval);
				changeColor()
			}
			else{
				square.css({
					top:top-1+'px',
					left:left-1+'px'
				})
			}
		},speed)
	}

//````````
	function rightBottom(){
		let rightBottomInterval = setInterval(()=>{
			const top = parseInt(square.css('top'));
			const left= parseInt(square.css('left'));
			if (top===sqBott){
				topLeft();
				clearInterval(rightBottomInterval);
				changeColor();
			}
			else if (left===sqRight){
				bottomLeft();
				clearInterval(rightBottomInterval);
				changeColor();
			}
			else{
				square.css({
					top:top+1+'px',
					left:left+1+'px'
				})
			}
		},speed)
	}

//````````````
	function topLeft(){
		let topLeftInterval = setInterval(()=>{
			const top = parseInt(square.css('top'));
			const left= parseInt(square.css('left'));
			if (left===sqRight){
				topRight();
				clearInterval(topLeftInterval);
				changeColor();
			}
			else if (top===0){
				rightBottom();
				clearInterval(topLeftInterval);
				changeColor();
			}
			else{
				square.css({
					top:top-1+'px',
					left:left+1+'px'
				})
			}
		},speed)
	}

//````````````
 let startLoop =setInterval(()=>{
 	const top = parseInt(square.css('top'));
	const left= parseInt(square.css('left'));

	if (top=== sqBott){
		topLeft();
		clearInterval(startLoop);
	}
	else{
		rightBottom();
		clearInterval(startLoop);
	}
 },speed);


});


