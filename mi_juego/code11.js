gdjs.video_322Code = {};
gdjs.video_322Code.localVariables = [];
gdjs.video_322Code.idToCallbackMap = new Map();
gdjs.video_322Code.GDNewSpriteObjects1= [];
gdjs.video_322Code.GDNewSpriteObjects2= [];
gdjs.video_322Code.GDNewSprite2Objects1= [];
gdjs.video_322Code.GDNewSprite2Objects2= [];


gdjs.video_322Code.userFunc0x105a180 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
if (!runtimeScene._videoInitialized) {
    runtimeScene._videoInitialized = true;
    // Aquí recién creas el <video>
    runtimeScene.setBackgroundColor(100,100,240);
// Crear video
var video = document.createElement("video");
video.src = "nivel_2.mp4";
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
    runtimeScene.requestChange(gdjs.RuntimeScene.SCENE_REPLACE, "video_2");
};
}
};
gdjs.video_322Code.mapOfGDgdjs_9546video_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.video_322Code.GDNewSprite2Objects1});
gdjs.video_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.video_322Code.userFunc0x105a180(runtimeScene);

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.video_322Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.video_322Code.mapOfGDgdjs_9546video_9595322Code_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Hospital", false);
}
}

}


};

gdjs.video_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.video_322Code.GDNewSpriteObjects1.length = 0;
gdjs.video_322Code.GDNewSpriteObjects2.length = 0;
gdjs.video_322Code.GDNewSprite2Objects1.length = 0;
gdjs.video_322Code.GDNewSprite2Objects2.length = 0;

gdjs.video_322Code.eventsList0(runtimeScene);
gdjs.video_322Code.GDNewSpriteObjects1.length = 0;
gdjs.video_322Code.GDNewSpriteObjects2.length = 0;
gdjs.video_322Code.GDNewSprite2Objects1.length = 0;
gdjs.video_322Code.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['video_322Code'] = gdjs.video_322Code;
