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
        </div>
</template>


<script>
import { setInterval, clearInterval } from 'timers';
export default {
    name: "Start",
    data () {
        return {
            number: 3,
            iscountdown: true
        }
    },
    mounted () {
        let _this=this;
        var c=document.getElementById("animation1");
        c.addEventListener("webkitAnimationStart",function(){
            var interval= setInterval(function(){
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
        })
    }
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