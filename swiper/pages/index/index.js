Page({
	data: {
	imgUrl:['s1','s2','s3'],
		indicatorDots:true,
		vertical:false,
		autoplay:false,
		interval:2000,
		duration:500
	},
changeIndicatorDots:function(e){
this.setData({
	indicatorDots: !this.data.indicatorDots
})
},
changeVertical:function(e){
	this.setData({
		vertical: !this.data.vertical
	})
},
changeAutoplay:function(e){
	this.setData({
		autoplay:!this.data.autoplay
	})
},
intervalChange:function(e){
	this.setData({
		interval:e.detail.value
	})
},
durationChange(e){
this.setData({
	duration:e.detail.value
})
},
})



