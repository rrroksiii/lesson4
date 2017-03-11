"use strict"
//1 вариант задачи
var user = {
   name: "Tom"
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
var tomFormat = function(func, count){
   func();
}
tomFormat(function () {user.format("<<<", ">>>");}, 3);// user.format is not a function

//2 варинат задачи (решаемый)
var user = {
   name: "Tom",
   format: function(beginMsg, endMsg) {
      console.log(beginMsg + this.name + endMsg);
   }
};
function tomFormat(func, count) {
   func();
}
tomFormat(function () {user.format("<<<", ">>>");}, 3); 























