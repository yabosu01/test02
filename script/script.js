 $(function(){

/* 팝업창 */
$("#pop p").click(function(){
	$("#pop").hide();
});
	
 
 /*이미지fadeIn Out*/
var cnt=1;

setInterval(function(){
	$(".theme li").fadeOut();  
	cnt=cnt%4;
	console.log(cnt); 
	$(".theme li").eq(cnt).fadeIn(); 
	cnt++; 
},5000);
 
 /*이미지 슬라이드*/
$("#imgslide ul li").each(function(aa){
	$(this).css({ left : aa*350 });
});

setInterval(function(){
	$("#imgslide ul li").each(function(){
		var nowLeft = parseInt($(this).css('left'));
		console.log($(this).css('left'));
		var newLeft = nowLeft - 350;
		$(this).animate({ left : newLeft }, 1000, function(){
			if(newLeft==-700){
				$(this).css("left",1050);
			};
	   });
   });
}, 4000);

/*이미지 위에 올렸을때 글씨 나오게*/
$("#content1 li").mouseenter(function(){
	$(this).children(".text").show();
	$(this).find("img").css({"opacity":"0.5"},500);
});
$("#content1 li").mouseleave(function(){
	$(this).children(".text").hide();
	$(this).find("img").css({"opacity":"1"},500);
});

/*버튼 슬라이드*/
$(".buttonSlide").mouseenter(function(){
	$(this).children(".Button").stop().animate({
		left:"0"
	},600);
});
$(".buttonSlide").mouseleave(function(){
	$(this).children(".Button").stop().animate({
		left:"-400px"
	}, 600);
});

/*이미지 버튼 클릭시 슬라이드*/
var n=0;
var img_count = $(".Slide li").last().index()+1;
	
	$(".Slide li").each(function(ee){
		$(this).css({left:600*ee});
		console.log(ee);
	});
	$(".left").click(function(){
		n++;
		if(n==img_count){
			$('.Slide').css({left:0});
			n=1;
		}
		$('.Slide').stop(true).animate({left:-600*n},1000);
	});
	$(".right").click(function(){
		n--;
		if(n==-1){
			$('.Slide').css({ left:-600*(img_count-1) });
			n=3;
		}
		$('.Slide').stop(true).animate({left:-600*n},1000);
	});




});