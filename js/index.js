$(function(){
	$('.foot_fixed_list').on('touchend',function(){
		$(this).children('div').css('color','#FF4200')
//		var index=$(this).index();
//    $('.foot_fixed_list div').eq(index)
	})
	
	//首页底部
	
	$('.classify_con').css('display','none').eq(0).css('display','block');
	$('.classify_l li').on('touchend',function(){
		var index=$(this).index();
		$('.classify_l li').css({'background':'#F4F4F4','border-right':'1px solid #e8e8e9'})
		$(this).css({'background':'white','border-right':'1px solid white'})
		$('.classify_con').css('display','none').eq(index).css('display','block');
	})
//	产品分类
  	$('.fixed_title a').eq(0).css('border-bottom','1px solid #FF4200')
	$('.details-con').css('display','none').eq(0).css('display','block');
	$('.fixed_title a').on('touchend',function(){
		var index=$(this).index();
		$('.fixed_title a').css('border-bottom','1px solid white')
		$(this).css('border-bottom','1px solid #FF4200')
		$('.details-con').css('display','none').eq(index).css('display','block');
	})
	
//详情介绍
	$('.nav-tab-top li').eq(0).css({'border-bottom':'1px solid #FF4200'})
	$('.nav-list').css('display','none').eq(0).css('display','block');
	$('.nav-tab-top li').on('touchend',function(){
		var index=$(this).index();
		$('.nav-tab-top li').css({'border-bottom':'1px solid #fff'})
		$(this).css({'border-bottom':'1px solid #FF4200'})
		$('.nav-list').css('display','none').eq(index).css('display','block');
	})


//订单中心
	$('.coupon-list li').eq(0).css({'border-bottom':'1px solid #FF4200'})
	$('.coupon-con-list').css('display','none').eq(0).css('display','block');
	$('.coupon-list li').on('touchend',function(){
		var index=$(this).index();
		$('.coupon-list li').css({'border-bottom':'1px solid #fff'})
		$(this).css({'border-bottom':'1px solid #FF4200'})
		$('.coupon-con-list').css('display','none').eq(index).css('display','block');
	})
	
	//我的优惠券


})
