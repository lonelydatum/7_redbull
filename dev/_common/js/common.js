const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeOut


const {w, h} = size










function init(){
	
	const tl = new TimelineMax()

	tl.set(".frame1", {opacity:1})


	
	TweenLite.defaultEase = Back.easeOut
	tl.from(".t1", .3, {scale:.3, opacity:0}, .5)
	tl.to(".t1", .1, {opacity:0}, "+=2")

	tl.from(".t2a", .3, {scale:.3, opacity:0}, "+=.2")
	tl.from(".t2b", .3, {scale:.3, opacity:0}, "+=1")


	const total = 5
	for(let i=1; i<=total; i++){		
		makeSmoke(".smoke"+i, (i-1)/total)	
	}	

	return tl
}



function rand(min, max){
	const diff = max - min
	return min + Math.random()*diff
}

function makeSmoke(id, delay, scale=.6) {
	

	const smoke = new TimelineMax({repeat:0})
    const time1 = .7
    const time2 = .1
    
    const d = (delay)*(time1+time2)
    
    const rotate = rand(-20, 20)
    
    const y = rand(0, 30)
    smoke.fromTo(id, time1, { scale:.1, opacity:0}, {y:`-=${y}`, rotation:`+=${rotate}`, scale:`+=${scale}`, opacity:.4, x:"+=70", ease:Back.easeOut}, d)
    smoke.to(id, time2, {opacity:0, ease:Linear.easeNone})
}




export {size, init, makeSmoke}

