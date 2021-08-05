const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeOut


const {w, h} = size










function init(){
	
	const tl = new TimelineMax({onComplete:()=>{
	
	}})

	

	tl.set(".frame1", {opacity:1})


	
	TweenLite.defaultEase = Back.easeOut
	tl.from(".t1", .3, {scale:.3, opacity:0}, .5)
	tl.to(".t1", .1, {opacity:0}, "+=2")

	tl.from(".t2a", .3, {scale:.3, opacity:0}, "+=.2")
	tl.from(".t2b", .3, {scale:.3, opacity:0}, "+=1")






	const total = 6
	for(let i=1; i<=total; i++){
		makeSmoke(".smoke"+i, i/total)	
	}




	


	

	return tl
}





function makeSmoke(id, delay, scale=1) {
	
	const smoke = new TimelineMax({repeat:1})
	const time = 2.5
	smoke.fromTo(id, time, {scale:0, opacity:.8}, {scale:scale, opacity:0}, delay*time)
	
	return smoke
}




export {size, init, makeSmoke}

