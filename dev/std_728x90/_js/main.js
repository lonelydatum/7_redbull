import {makeSmoke} from '../../_common/js/common.js'


function init(){
	
	const tl = new TimelineMax({onComplete:()=>{ }})

	tl.set(".frame1", {opacity:1})
	
	TweenLite.defaultEase = Back.easeOut
	tl.from(".t1", .3, {scale:.3, opacity:0}, .5)
	tl.to(".t1", .1, {opacity:0}, "+=2")

	tl.from(".t2a", .3, {scale:.3, opacity:0}, "+=.2")
	tl.to(".t2a", .3, {opacity:0}, "+=2")

	tl.from(".t2b", .3, {scale:.3, opacity:0}, "+=.1")




	const total = 6
	for(let i=1; i<=total; i++){
		makeSmoke(".smoke"+i, i/total, .4)	
	}



	return tl

}


init()
