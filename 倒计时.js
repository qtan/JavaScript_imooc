<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>研究生考试时间</title>
<link rel="stylesheet" href="style.css"  />
<script language="javascript" type="text/javascript">     
  window.onload = function(){
　　var timedate= new Date('2017,6,6');     //自定义结束时间  
　　var now = new Date();    //获取当前时间
　　var date = timedate.getTime() - now.getTime();    //得出的为毫秒
　　var time = Math.ceil(date / (1000 * 60 * 60 * 24))  ;  //1000 * 60 * 60 * 24一天的秒数
    if(time > 0 ){
      document.getElementById('timeShow').innerHTML = time;
	}
    }
</script>
</head>
<body>
   <div class="content2">
    <div class="txtshow">距离设置时间还有<span  id="timeShow"></span>天</div>
   </div>
</body>
</html>