gdjs.inicioCode = {};
gdjs.inicioCode.localVariables = [];
gdjs.inicioCode.idToCallbackMap = new Map();
gdjs.inicioCode.GDNewSpriteObjects1_1final = [];

gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1_1final = [];

gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1_1final = [];

gdjs.inicioCode.GDNewSpriteObjects1= [];
gdjs.inicioCode.GDNewSpriteObjects2= [];
gdjs.inicioCode.GDCuadro_9595introductorioObjects1= [];
gdjs.inicioCode.GDCuadro_9595introductorioObjects2= [];
gdjs.inicioCode.GDNewSprite3Objects1= [];
gdjs.inicioCode.GDNewSprite3Objects2= [];
gdjs.inicioCode.GDescuelaObjects1= [];
gdjs.inicioCode.GDescuelaObjects2= [];
gdjs.inicioCode.GDTexto_9595introductorioObjects1= [];
gdjs.inicioCode.GDTexto_9595introductorioObjects2= [];
gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1= [];
gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects2= [];
gdjs.inicioCode.GDCamino_9595recto_9595con_9595pastitoObjects1= [];
gdjs.inicioCode.GDCamino_9595recto_9595con_9595pastitoObjects2= [];
gdjs.inicioCode.GDNewSprite2Objects1= [];
gdjs.inicioCode.GDNewSprite2Objects2= [];
gdjs.inicioCode.GDNewSprite5Objects1= [];
gdjs.inicioCode.GDNewSprite5Objects2= [];
gdjs.inicioCode.GDArbol_9595con_9595manzanasObjects1= [];
gdjs.inicioCode.GDArbol_9595con_9595manzanasObjects2= [];
gdjs.inicioCode.GDarbol_9595largoObjects1= [];
gdjs.inicioCode.GDarbol_9595largoObjects2= [];
gdjs.inicioCode.GDarbol_9595sin_9595manzanasObjects1= [];
gdjs.inicioCode.GDarbol_9595sin_9595manzanasObjects2= [];
gdjs.inicioCode.GDarbusto_9595con_9595manzanasObjects1= [];
gdjs.inicioCode.GDarbusto_9595con_9595manzanasObjects2= [];
gdjs.inicioCode.GDarbustoObjects1= [];
gdjs.inicioCode.GDarbustoObjects2= [];
gdjs.inicioCode.GDpiedraObjects1= [];
gdjs.inicioCode.GDpiedraObjects2= [];
gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1= [];
gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects2= [];
gdjs.inicioCode.GDNewSprite6Objects1= [];
gdjs.inicioCode.GDNewSprite6Objects2= [];
gdjs.inicioCode.GDpastoObjects1= [];
gdjs.inicioCode.GDpastoObjects2= [];


gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.inicioCode.GDNewSpriteObjects1});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDescuelaObjects1Objects = Hashtable.newFrom({"escuela": gdjs.inicioCode.GDescuelaObjects1});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDpasto_95959595cuadrado_95959595derechoObjects1Objects = Hashtable.newFrom({"pasto_cuadrado_derecho": gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDPasto_95959595cuadrado_95959595izquierdoObjects1Objects = Hashtable.newFrom({"Pasto_cuadrado_izquierdo": gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.inicioCode.GDNewSpriteObjects2});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDPasto_95959595cuadrado_95959595izquierdoObjects2Objects = Hashtable.newFrom({"Pasto_cuadrado_izquierdo": gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects2});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.inicioCode.GDNewSpriteObjects2});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDpasto_95959595cuadrado_95959595derechoObjects2Objects = Hashtable.newFrom({"pasto_cuadrado_derecho": gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects2});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.inicioCode.GDNewSpriteObjects2});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDpasto_95959595cuadrado_95959595derechoObjects2Objects = Hashtable.newFrom({"pasto_cuadrado_derecho": gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects2});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.inicioCode.GDNewSpriteObjects2});
gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDPasto_95959595cuadrado_95959595izquierdoObjects2Objects = Hashtable.newFrom({"Pasto_cuadrado_izquierdo": gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects2});
gdjs.inicioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.inicioCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDNewSpriteObjects1[i].setX(gdjs.inicioCode.GDNewSpriteObjects1[i].getX() + (5));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.inicioCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDNewSpriteObjects1[i].setX(gdjs.inicioCode.GDNewSpriteObjects1[i].getX() - (5));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.inicioCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDNewSpriteObjects1[i].setY(gdjs.inicioCode.GDNewSpriteObjects1[i].getY() - (5));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.inicioCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDNewSpriteObjects1[i].setY(gdjs.inicioCode.GDNewSpriteObjects1[i].getY() + (5));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.inicioCode.GDNewSpriteObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.inicioCode.GDNewSpriteObjects1.length !== 0 ? gdjs.inicioCode.GDNewSpriteObjects1[0] : null), true, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.inicioCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("escuela"), gdjs.inicioCode.GDescuelaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDNewSpriteObjects1Objects, gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDescuelaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "video 1", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.inicioCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Texto_introductorio"), gdjs.inicioCode.GDTexto_9595introductorioObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.inicioCode.GDNewSprite5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.inicioCode.GDTexto_9595introductorioObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDTexto_9595introductorioObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.inicioCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pasto_cuadrado_izquierdo"), gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1);
gdjs.copyArray(runtimeScene.getObjects("pasto_cuadrado_derecho"), gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDNewSpriteObjects1[i].separateFromObjectsList(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDpasto_95959595cuadrado_95959595derechoObjects1Objects, false);
}
}
{for(var i = 0, len = gdjs.inicioCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDNewSpriteObjects1[i].separateFromObjectsList(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDPasto_95959595cuadrado_95959595izquierdoObjects1Objects, false);
}
}
}

}


{

gdjs.inicioCode.GDNewSpriteObjects1.length = 0;

gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1.length = 0;

gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.inicioCode.GDNewSpriteObjects1_1final.length = 0;
gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1_1final.length = 0;
gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.inicioCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pasto_cuadrado_izquierdo"), gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDNewSpriteObjects2Objects, gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDPasto_95959595cuadrado_95959595izquierdoObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.inicioCode.GDNewSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.inicioCode.GDNewSpriteObjects1_1final.indexOf(gdjs.inicioCode.GDNewSpriteObjects2[j]) === -1 )
            gdjs.inicioCode.GDNewSpriteObjects1_1final.push(gdjs.inicioCode.GDNewSpriteObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1_1final.indexOf(gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects2[j]) === -1 )
            gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1_1final.push(gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.inicioCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("pasto_cuadrado_derecho"), gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDNewSpriteObjects2Objects, gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDpasto_95959595cuadrado_95959595derechoObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.inicioCode.GDNewSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.inicioCode.GDNewSpriteObjects1_1final.indexOf(gdjs.inicioCode.GDNewSpriteObjects2[j]) === -1 )
            gdjs.inicioCode.GDNewSpriteObjects1_1final.push(gdjs.inicioCode.GDNewSpriteObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1_1final.indexOf(gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects2[j]) === -1 )
            gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1_1final.push(gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.inicioCode.GDNewSpriteObjects1_1final, gdjs.inicioCode.GDNewSpriteObjects1);
gdjs.copyArray(gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1_1final, gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1);
gdjs.copyArray(gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1_1final, gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.inicioCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDNewSpriteObjects1[i].getBehavior("Animation").pauseAnimation();
}
}
}

}


{

gdjs.inicioCode.GDNewSpriteObjects1.length = 0;

gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1.length = 0;

gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.inicioCode.GDNewSpriteObjects1_1final.length = 0;
gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1_1final.length = 0;
gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.inicioCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("pasto_cuadrado_derecho"), gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDNewSpriteObjects2Objects, gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDpasto_95959595cuadrado_95959595derechoObjects2Objects, true, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.inicioCode.GDNewSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.inicioCode.GDNewSpriteObjects1_1final.indexOf(gdjs.inicioCode.GDNewSpriteObjects2[j]) === -1 )
            gdjs.inicioCode.GDNewSpriteObjects1_1final.push(gdjs.inicioCode.GDNewSpriteObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1_1final.indexOf(gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects2[j]) === -1 )
            gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1_1final.push(gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.inicioCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pasto_cuadrado_izquierdo"), gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDNewSpriteObjects2Objects, gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDPasto_95959595cuadrado_95959595izquierdoObjects2Objects, true, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.inicioCode.GDNewSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.inicioCode.GDNewSpriteObjects1_1final.indexOf(gdjs.inicioCode.GDNewSpriteObjects2[j]) === -1 )
            gdjs.inicioCode.GDNewSpriteObjects1_1final.push(gdjs.inicioCode.GDNewSpriteObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1_1final.indexOf(gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects2[j]) === -1 )
            gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1_1final.push(gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.inicioCode.GDNewSpriteObjects1_1final, gdjs.inicioCode.GDNewSpriteObjects1);
gdjs.copyArray(gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1_1final, gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1);
gdjs.copyArray(gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1_1final, gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.inicioCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDNewSpriteObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


};

gdjs.inicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inicioCode.GDNewSpriteObjects1.length = 0;
gdjs.inicioCode.GDNewSpriteObjects2.length = 0;
gdjs.inicioCode.GDCuadro_9595introductorioObjects1.length = 0;
gdjs.inicioCode.GDCuadro_9595introductorioObjects2.length = 0;
gdjs.inicioCode.GDNewSprite3Objects1.length = 0;
gdjs.inicioCode.GDNewSprite3Objects2.length = 0;
gdjs.inicioCode.GDescuelaObjects1.length = 0;
gdjs.inicioCode.GDescuelaObjects2.length = 0;
gdjs.inicioCode.GDTexto_9595introductorioObjects1.length = 0;
gdjs.inicioCode.GDTexto_9595introductorioObjects2.length = 0;
gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1.length = 0;
gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects2.length = 0;
gdjs.inicioCode.GDCamino_9595recto_9595con_9595pastitoObjects1.length = 0;
gdjs.inicioCode.GDCamino_9595recto_9595con_9595pastitoObjects2.length = 0;
gdjs.inicioCode.GDNewSprite2Objects1.length = 0;
gdjs.inicioCode.GDNewSprite2Objects2.length = 0;
gdjs.inicioCode.GDNewSprite5Objects1.length = 0;
gdjs.inicioCode.GDNewSprite5Objects2.length = 0;
gdjs.inicioCode.GDArbol_9595con_9595manzanasObjects1.length = 0;
gdjs.inicioCode.GDArbol_9595con_9595manzanasObjects2.length = 0;
gdjs.inicioCode.GDarbol_9595largoObjects1.length = 0;
gdjs.inicioCode.GDarbol_9595largoObjects2.length = 0;
gdjs.inicioCode.GDarbol_9595sin_9595manzanasObjects1.length = 0;
gdjs.inicioCode.GDarbol_9595sin_9595manzanasObjects2.length = 0;
gdjs.inicioCode.GDarbusto_9595con_9595manzanasObjects1.length = 0;
gdjs.inicioCode.GDarbusto_9595con_9595manzanasObjects2.length = 0;
gdjs.inicioCode.GDarbustoObjects1.length = 0;
gdjs.inicioCode.GDarbustoObjects2.length = 0;
gdjs.inicioCode.GDpiedraObjects1.length = 0;
gdjs.inicioCode.GDpiedraObjects2.length = 0;
gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1.length = 0;
gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects2.length = 0;
gdjs.inicioCode.GDNewSprite6Objects1.length = 0;
gdjs.inicioCode.GDNewSprite6Objects2.length = 0;
gdjs.inicioCode.GDpastoObjects1.length = 0;
gdjs.inicioCode.GDpastoObjects2.length = 0;

gdjs.inicioCode.eventsList0(runtimeScene);
gdjs.inicioCode.GDNewSpriteObjects1.length = 0;
gdjs.inicioCode.GDNewSpriteObjects2.length = 0;
gdjs.inicioCode.GDCuadro_9595introductorioObjects1.length = 0;
gdjs.inicioCode.GDCuadro_9595introductorioObjects2.length = 0;
gdjs.inicioCode.GDNewSprite3Objects1.length = 0;
gdjs.inicioCode.GDNewSprite3Objects2.length = 0;
gdjs.inicioCode.GDescuelaObjects1.length = 0;
gdjs.inicioCode.GDescuelaObjects2.length = 0;
gdjs.inicioCode.GDTexto_9595introductorioObjects1.length = 0;
gdjs.inicioCode.GDTexto_9595introductorioObjects2.length = 0;
gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects1.length = 0;
gdjs.inicioCode.GDPasto_9595cuadrado_9595izquierdoObjects2.length = 0;
gdjs.inicioCode.GDCamino_9595recto_9595con_9595pastitoObjects1.length = 0;
gdjs.inicioCode.GDCamino_9595recto_9595con_9595pastitoObjects2.length = 0;
gdjs.inicioCode.GDNewSprite2Objects1.length = 0;
gdjs.inicioCode.GDNewSprite2Objects2.length = 0;
gdjs.inicioCode.GDNewSprite5Objects1.length = 0;
gdjs.inicioCode.GDNewSprite5Objects2.length = 0;
gdjs.inicioCode.GDArbol_9595con_9595manzanasObjects1.length = 0;
gdjs.inicioCode.GDArbol_9595con_9595manzanasObjects2.length = 0;
gdjs.inicioCode.GDarbol_9595largoObjects1.length = 0;
gdjs.inicioCode.GDarbol_9595largoObjects2.length = 0;
gdjs.inicioCode.GDarbol_9595sin_9595manzanasObjects1.length = 0;
gdjs.inicioCode.GDarbol_9595sin_9595manzanasObjects2.length = 0;
gdjs.inicioCode.GDarbusto_9595con_9595manzanasObjects1.length = 0;
gdjs.inicioCode.GDarbusto_9595con_9595manzanasObjects2.length = 0;
gdjs.inicioCode.GDarbustoObjects1.length = 0;
gdjs.inicioCode.GDarbustoObjects2.length = 0;
gdjs.inicioCode.GDpiedraObjects1.length = 0;
gdjs.inicioCode.GDpiedraObjects2.length = 0;
gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects1.length = 0;
gdjs.inicioCode.GDpasto_9595cuadrado_9595derechoObjects2.length = 0;
gdjs.inicioCode.GDNewSprite6Objects1.length = 0;
gdjs.inicioCode.GDNewSprite6Objects2.length = 0;
gdjs.inicioCode.GDpastoObjects1.length = 0;
gdjs.inicioCode.GDpastoObjects2.length = 0;


return;

}

gdjs['inicioCode'] = gdjs.inicioCode;
