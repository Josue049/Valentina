gdjs.video_323Code = {};
gdjs.video_323Code.localVariables = [];
gdjs.video_323Code.idToCallbackMap = new Map();
gdjs.video_323Code.GDNewSpriteObjects1= [];
gdjs.video_323Code.GDNewSpriteObjects2= [];
gdjs.video_323Code.GDNewSprite2Objects1= [];
gdjs.video_323Code.GDNewSprite2Objects2= [];


gdjs.video_323Code.userFunc0x10fefe0 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
if (!runtimeScene._videoInitialized) {
    runtimeScene._videoInitialized = true;
    // Aquí recién creas el <video>
    runtimeScene.setBackgroundColor(100,100,240);
// Crear video
var video = document.createElement("video");
video.src = "nivel_3.mp4";
video.autoplay = true;
video.muted = false;
video.playsInline = true;
video.controls = true;
video.style.position = "absolute";
video.style.top = "0";
video.style.left = "0";
video.style.width = "100%";
video.style.height = "85%";
video.style.objectFit = "contain";
video.style.zIndex = "9999";
document.body.appendChild(video);
// Cambiar de escena cuando termina
video.onended = () => {
    video.remove();
    runtimeScene.requestChange(gdjs.RuntimeScene.SCENE_REPLACE, "video_4");
};
}
};
gdjs.video_323Code.mapOfGDgdjs_9546video_9595323Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.video_323Code.GDNewSprite2Objects1});
gdjs.video_323Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.video_323Code.userFunc0x10fefe0(runtimeScene);

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.video_323Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.video_323Code.mapOfGDgdjs_9546video_9595323Code_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "barrio - zona 1", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.video_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.video_323Code.GDNewSpriteObjects1.length = 0;
gdjs.video_323Code.GDNewSpriteObjects2.length = 0;
gdjs.video_323Code.GDNewSprite2Objects1.length = 0;
gdjs.video_323Code.GDNewSprite2Objects2.length = 0;

gdjs.video_323Code.eventsList0(runtimeScene);
gdjs.video_323Code.GDNewSpriteObjects1.length = 0;
gdjs.video_323Code.GDNewSpriteObjects2.length = 0;
gdjs.video_323Code.GDNewSprite2Objects1.length = 0;
gdjs.video_323Code.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['video_323Code'] = gdjs.video_323Code;
