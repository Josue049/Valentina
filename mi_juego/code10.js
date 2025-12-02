gdjs.video_321Code = {};
gdjs.video_321Code.localVariables = [];
gdjs.video_321Code.idToCallbackMap = new Map();
gdjs.video_321Code.GDNewVideoObjects1= [];
gdjs.video_321Code.GDNewVideoObjects2= [];
gdjs.video_321Code.GDbot_95243n_9595continuarObjects1= [];
gdjs.video_321Code.GDbot_95243n_9595continuarObjects2= [];
gdjs.video_321Code.GDNewSpriteObjects1= [];
gdjs.video_321Code.GDNewSpriteObjects2= [];


gdjs.video_321Code.userFunc0x105b0e0 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
if (!runtimeScene._videoInitialized) {
    runtimeScene._videoInitialized = true;
    // Aquí recién creas el <video>
    runtimeScene.setBackgroundColor(100,100,240);
// Crear video
var video = document.createElement("video");
video.src = "nivel_1.mp4";
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
    runtimeScene.requestChange(gdjs.RuntimeScene.SCENE_REPLACE, "video_1");
};
}
};
gdjs.video_321Code.mapOfGDgdjs_9546video_9595321Code_9546GDbot_959595243n_95959595continuarObjects1Objects = Hashtable.newFrom({"botón_continuar": gdjs.video_321Code.GDbot_95243n_9595continuarObjects1});
gdjs.video_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


gdjs.video_321Code.userFunc0x105b0e0(runtimeScene);

}


{

gdjs.copyArray(runtimeScene.getObjects("botón_continuar"), gdjs.video_321Code.GDbot_95243n_9595continuarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.video_321Code.mapOfGDgdjs_9546video_9595321Code_9546GDbot_959595243n_95959595continuarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escuela", false);
}
}

}


};

gdjs.video_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.video_321Code.GDNewVideoObjects1.length = 0;
gdjs.video_321Code.GDNewVideoObjects2.length = 0;
gdjs.video_321Code.GDbot_95243n_9595continuarObjects1.length = 0;
gdjs.video_321Code.GDbot_95243n_9595continuarObjects2.length = 0;
gdjs.video_321Code.GDNewSpriteObjects1.length = 0;
gdjs.video_321Code.GDNewSpriteObjects2.length = 0;

gdjs.video_321Code.eventsList0(runtimeScene);
gdjs.video_321Code.GDNewVideoObjects1.length = 0;
gdjs.video_321Code.GDNewVideoObjects2.length = 0;
gdjs.video_321Code.GDbot_95243n_9595continuarObjects1.length = 0;
gdjs.video_321Code.GDbot_95243n_9595continuarObjects2.length = 0;
gdjs.video_321Code.GDNewSpriteObjects1.length = 0;
gdjs.video_321Code.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['video_321Code'] = gdjs.video_321Code;
