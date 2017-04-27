$(function(){
	
	$(".banner_img").on("touchstart",function(e){
    	 pos=e.originalEvent.changedTouches[0].clientX;
    })
	var now=0;
    $(".banner_list").css("display","none").eq(0).css("display","block");
	$(".banner_yuan li").css("background","#999").eq(0).css("background","red");
	var tt=setInterval(	function banner_time(){
		now++
  	 	if(now>=$(".banner_list").length){
  	 		now=0;
 	 	}
		
 	 	$(".banner_list").css("display","none").eq(now).css("display","block"); 
		$(".banner_yuan li").css("background","#999").eq(now).css("background","red");
	},3000)
	$(".banner_list").on("touchend",function(e){
  	 var y=e.originalEvent.changedTouches[0].clientX
 	 var index=$(this).index()
  	 if(y-pos<=-30){
 	 	now++
  	 	if(now>=$(".banner_list").length){
  	 		return;
 	 	}
 	 	$(".banner_list").css("display","none").eq(now).css("display","block"); 
		$(".banner_yuan li").css("background","#999").eq(now).css("background","red");	
 	 }
	 if(y-pos>=30){
		 now--
	 	if(now<0){
 	 		now=0;
			return;
 	    }else{
			console.log(now)
			$(".banner_list").css("display","none").eq(now).css("display","block");
			$(".banner_yuan li").css("background","#999").eq(now).css("background","red");
		}
     }
	})
	
	
	//首页轮播
	$("#hd_referrer").val(document.referrer);
	$('.foot_fixed_list').on('touchend',function(){
		$(this).children('div').css('color','#FF4200')
//		var index=$(this).index();
//    $('.foot_fixed_list div').eq(index)
	})
	
	//首页底部
	
	$('.classify_con').css('display','none').eq(0).css('display','block');
	$('.classify_l li').on('touchend',function(){
		var index=$(this).index();
		$('.classify_l li').css({'background':'#F4F4F4','border-right':'1px solid #e8e8e9'});
		$(this).css({'background':'white','border-right':'1px solid white'})
		$('.classify_con').css('display','none').eq(index).css('display','block');
	})
//	产品分类
  	$('.fixed_title a').eq(0).css('border-bottom','1px solid #FF4200');
	$('.details-con').css('display','none').eq(0).css('display','block');
	$('.fixed_title a').on('touchend',function(){
		var index=$(this).index();
		$('.fixed_title a').css('border-bottom','1px solid white');
		$(this).css('border-bottom','1px solid #FF4200');
		$('.details-con').css('display','none').eq(index).css('display','block');
	})
	
//详情介绍
	
	$('.nav-tab-top li').eq(0).css({'border-bottom':'1px solid #FF4200'});
	$('.nav-list').css('display','none').eq(0).css('display','block');
	$('.nav-tab-top li').on('touchend',function(){
		var index=$(this).index();
		$('.nav-tab-top li').css({'border-bottom':'1px solid #fff'});
		$(this).css({'border-bottom':'1px solid #FF4200'});
		$('.nav-list').css('display','none').eq(index).css('display','block');
	})


	//订单中心
	$('.coupon-list li').eq(0).css({'border-bottom':'1px solid #FF4200'});
	$('.coupon-con-list').css('display','none').eq(0).css('display','block');
	$('.coupon-list li').on('touchend',function(){
		var index=$(this).index();
		$('.coupon-list li').css({'border-bottom':'1px solid #fff'});
		$(this).css({'border-bottom':'1px solid #FF4200'});
		$('.coupon-con-list').css('display','none').eq(index).css('display','block');
	})
	
	//我的优惠券
	
	
    var val=parseInt($('.mui-num').html());
	$('.mui-input-num').val(val);
	var price=parseInt($('.shop-pr').html());
	var total_price=val*price;
	$('.total-price').html(total_price);
	
	$('.mui-down').on('touchend',function(){
		if(val==1){
			return
		}else{
			val--;
			$('.mui-num').html(val);
			$('.mui-input-num').val(val);
			render();
		}
	})
	//数量减少
	$('.mui-up').on('touchend',function(){
		val++;
		$('.mui-num').html(val);
		$('.mui-input-num').val(val);
		render();
	})
	//数量增加
	$('.mui-input-num').on('keyup',function(){
		var val=$(this).val();
		$('.mui-num').html(val);
		render();
	})
	//数量改变
    function render(){
		var total_price=val*price;
		$('.total-price').html(total_price)
	}
   
	//商品总价渲染
	
	//购物车页面
	
	var num=parseInt($('.g-price').html())*1.3
	$('.r-price').html(num.toFixed(2));
	
	
	$(".swiper-container").on("touchstart",function(e){
    	 pos=e.originalEvent.changedTouches[0].clientX;
    })
	var now=0
    $(".swiper-container img").css("display","none").eq(0).css("display","block");
	$(".details-yuan li").css("background","#999").eq(0).css("background","red");
	$(".swiper-container img").on("touchend",function(e){
  	 var y=e.originalEvent.changedTouches[0].clientX
 	 var index=$(this).index()
  	 if(y-pos<=-30){
 	 	now++
  	 	if(now>=$(".swiper-container img").length){
  	 		return;
 	 	}
 	 	$(".swiper-container img").css("display","none").eq(now).css("display","block"); 
		$(".details-yuan li").css("background","#999").eq(now).css("background","red");	 	
 	 }
	 if(y-pos>=30){
		 now--
	 	if(now<0){
 	 		now==0;
			return;
 	    }else{
			console.log(now)
			$(".swiper-container img").css("display","none").eq(now).css("display","block");
			$(".details-yuan li").css("background","#999").eq(now).css("background","red");
		}
     }
	})
	
	//详情页面
	
	
	//提交订单
	
})

function referurl() {
     var ref = $("#hd_referrer").val();
     if (ref != "" && ref != "undefined") {
       location.href = ref;
      }
      else {
       location.href = history.back(-1); 
        }
   }
