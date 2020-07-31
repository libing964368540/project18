/*
 *选题
 *
 */
function choose1(opt){
	return req({
		url:'/ApiInterface/AnchorTaskSelect',
		data:opt.data,
		apiName:'选题',
		success:function(data){
			opt.success(data);
		},
		error:function(){
			opt.error()
		}
	})
}

/*
 *开始
 *
 */
function start(opt){
	return req({
		url:'/ApiInterface/AnchorTaskStart',
		data:opt.data,
		apiName:'开始',
		success:function(data){
			opt.success(data);
		},
		error:function(){
			opt.error()
		}
	})
}
/*
 *
 *更新
 *
 */
function change(opt){
	return req({
		url:'/ApiInterface/AnchorTask',
		data:opt.data,
		apiName:'创建',
		success:function(data){
			opt.success(data);
		},
		error:function(){
			opt.error()
		}
	})
}
/**
 * 
 *获取在线狱警
 *
 */
function getOnline(opt){
	return req({
		url:'/ApiInterface/PoliceOnLine',
		data:opt.data,
		apiName:'获取在线狱警',
		success:function(data){
			opt.success(data);
		},
		error:function(){
			opt.error()
		}
	})
}
/**
 * 
 *12、主持人单次答题任务结束
 *
 */
function end(opt){
	return req({
		 url:'/ApiInterface/AnchorTaskFinish',
		 data:opt.data,
		 apiName:'主持人单次答题任务结束',
		 success:function(data){
		 	opt.success(data);
		 },
		 error:function(){
		 	opt.error();
		 }
	})
}
/*
 *
 *13、狱警自发结束问答
 *
 */
function PoliceTaskFinish(opt){
	return req({
		url:'',
		data:opt.data,
		 apiName:'狱警自发任务结束',
		success:function(data){
			opt.success(data);
		},
		error:function(){
			opt.error()
		}
	})
}
