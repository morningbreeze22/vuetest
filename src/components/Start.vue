<template>
        <div id="play">
                <div class="CircleProgress" v-show="iscountdown">
                    <div id="count">
                        {{number}}
                    </div>
                    <div class="Left">
                       <div id="animation1" class="LeftCircle"></div>
                    </div>
                    <div class="Right">
                        <div id="animation2" class="RightCircle"></div>
                    </div>
                </div>

                <div id="clickarea" v-show="gamestart">
                    <img src="../assets/gameresources/human.png" hidden="hidden" id="humanimg">
                    <img src="../assets/gameresources/hit.png" hidden="hidden" id="boomimg">
                    <canvas id="can1" height="550" width="1200" v-on:click="hit($event)"></canvas>
                </div>
                <div id="score" v-show="gamestart">
                    <h2> SCORED: {{score}} </h2>
                </div>
        </div>
</template>


<script>
var interval;
var interval2;
var humanwidth=70;
var humanheight=100;
var humanscore=100;
var a=new Array();
import { setInterval, clearInterval } from 'timers';
export default {
    name: "Start",
    data () {
        return {
            number: 3,
            iscountdown: true,
            gamestart: false,
            score: 0
        }
    },
    methods:{
        hit ($event) {
            var x=($event).clientX;
            var y=($event).clientY;
            var can1=document.getElementById("can1");
            var ctx=can1.getContext("2d");
            var img_h=document.getElementById("humanimg");
            var img_b=document.getElementById("boomimg");
            var cx=x-can1.getBoundingClientRect().left+40;  //计算canvas内的坐标
            var cy=y-can1.getBoundingClientRect().top+40;
            //ctx.fillRect(cx,cy,humanwidth,humanheight);
            var index=isScored(cx,cy);
            if(index!=-1){
                var m=a[index][0];
                var n=a[index][1];
                ctx.drawImage(img_b,m,n,humanwidth,humanheight);
                this.score=this.score+humanscore;
                var timeout2=window.setTimeout(function() {
                    ctx.clearRect(m,n,humanwidth,humanheight);
                    a.splice(index,1);
                },300);
            }
        }

    },
    mounted () {
        let _this=this;
        var c=document.getElementById("animation1");
        var can1=document.getElementById("can1");
        var ctx=can1.getContext("2d");
        
        c.addEventListener("webkitAnimationStart",function(){
            interval= setInterval(function(){
             if (_this.number==1){
                _this.number="GO";
                clearInterval(interval);
                return;
            }
            _this.number=_this.number-1;
            },1000)
        });
        c.addEventListener("webkitAnimationEnd",function(){
            _this.iscountdown=false;
            _this.gamestart=true;
            var img=document.getElementById("humanimg");
            interval2=setInterval(function(){
                var x=randomNum(35,1000);
                var y=randomNum(50,450);
                if(isnotOverlap(x,y)){
                    ctx.drawImage(img,x,y,humanwidth,humanheight);
                    a.push([x,y]);
                    if(a.length>5){
                        window.setTimeout(function(){
                            var b=a.shift();
                            ctx.clearRect(b[0],b[1],humanwidth,humanheight);
                        },3000);
                    }
                }
            },500);
            
            
        })
    },
    destroyed () {
        if (interval) {
            clearInterval(interval);
        }
        if(interval2){
            clearInterval(interval2);
        }
  }
}

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}

function isnotOverlap(x,y){
    var m,n;
    for(var i=0;i<a.length;i++){
        m=a[i][0];
        n=a[i][1];
        if( Math.abs(m-x)<humanwidth && Math.abs(n-y)<humanheight ){
            return false;
        }
    }
    return true;
}

function isScored(x,y){
    console.log(a);
    var m,n;
    for(var i=0;i<a.length;i++){
        m=a[i][0];
        n=a[i][1];
        if( (x-m)<humanwidth && (x-m)>0 && (y-n)<humanheight && (y-n)>0 ){
            return i;
        }
    }
    return -1;
}

</script>

<style>
#play{
    width:100%;
    height:100%;
    position: relative;
    text-align: center;
}
.CircleProgress{
    z-index: 0;
    height:300px;
    width:300px;
    top:150px;
    text-align: center;
    margin:auto;
    position: relative;
}
#count{
    z-index: 1;
    top:100px;
    text-align: center;
    font-size: 60px;
    position:relative;
}
.Left{
    z-index:0;
    width: 150px;
    height: 300px;
    top:0;
    left:0;
    position: absolute;
    overflow: hidden;
}
.Right{
    z-index: 0;
    width: 150px;
    height: 300px;
    top:0;
    right:0;
    position: absolute;
    overflow: hidden;
}
.RightCircle{
    width:300px;
    height:300px;
    border: 20px solid transparent;
    border-radius: 50%;
    position:absolute;
    top:0;
    right:0;
    border-top:20px solid black;
    border-right:20px solid black;
    -webkit-transform : rotate(-135deg);
    -moz-transform : rotate(-135eg);
    -o-transform : rotate(-135deg);
    transform : rotate(-135deg);
    -webkit-animation-name: circle_right;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: 4;
}
.LeftCircle{
    width:300px;
    height:300px;
    border: 20px solid transparent;
    border-radius: 50%;
    position:absolute;
    bottom:0;
    left:0;
    border-top:20px solid black;
    border-right:20px solid black;
    -webkit-transform : rotate(45deg);
    -moz-transform : rotate(45eg);
    -o-transform : rotate(45deg);
    transform : rotate(45deg);
    -webkit-animation-name: circle_left;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: 4;

}
#clickarea{
    margin-top:30px;
    margin-bottom:30px;
    margin-left: 50px;
    margin-right: 50px;
    border: 2px solid black;
    cursor: url('/static/clickgame/aim.png'),crosshair
}


@-webkit-keyframes circle_right{
    0%{
        transform: rotate(-135deg);
    }
    50%{
        transform: rotate(45deg);
    }
    100%{
        transform: rotate(45deg);
    }
}

@-webkit-keyframes circle_left{
    0%{
        transform: rotate(45deg);
    }
    50%{
        transform: rotate(45deg);
    }
    100%{
        transform: rotate(225deg);
    }
}
</style>
