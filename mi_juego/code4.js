gdjs.InternetCode = {};
gdjs.InternetCode.localVariables = [];
gdjs.InternetCode.idToCallbackMap = new Map();
gdjs.InternetCode.GDnave_9595espacialObjects1= [];
gdjs.InternetCode.GDnave_9595espacialObjects2= [];
gdjs.InternetCode.GDnave_9595espacialObjects3= [];
gdjs.InternetCode.GDnave_9595espacialObjects4= [];
gdjs.InternetCode.GDbalaObjects1= [];
gdjs.InternetCode.GDbalaObjects2= [];
gdjs.InternetCode.GDbalaObjects3= [];
gdjs.InternetCode.GDbalaObjects4= [];
gdjs.InternetCode.GDenemigo_95951Objects1= [];
gdjs.InternetCode.GDenemigo_95951Objects2= [];
gdjs.InternetCode.GDenemigo_95951Objects3= [];
gdjs.InternetCode.GDenemigo_95951Objects4= [];
gdjs.InternetCode.GDfondoObjects1= [];
gdjs.InternetCode.GDfondoObjects2= [];
gdjs.InternetCode.GDfondoObjects3= [];
gdjs.InternetCode.GDfondoObjects4= [];
gdjs.InternetCode.GDenemigo_95952Objects1= [];
gdjs.InternetCode.GDenemigo_95952Objects2= [];
gdjs.InternetCode.GDenemigo_95952Objects3= [];
gdjs.InternetCode.GDenemigo_95952Objects4= [];
gdjs.InternetCode.GDenemigo_95953Objects1= [];
gdjs.InternetCode.GDenemigo_95953Objects2= [];
gdjs.InternetCode.GDenemigo_95953Objects3= [];
gdjs.InternetCode.GDenemigo_95953Objects4= [];
gdjs.InternetCode.GDbala_9595enemigaObjects1= [];
gdjs.InternetCode.GDbala_9595enemigaObjects2= [];
gdjs.InternetCode.GDbala_9595enemigaObjects3= [];
gdjs.InternetCode.GDbala_9595enemigaObjects4= [];
gdjs.InternetCode.GDsaludObjects1= [];
gdjs.InternetCode.GDsaludObjects2= [];
gdjs.InternetCode.GDsaludObjects3= [];
gdjs.InternetCode.GDsaludObjects4= [];
gdjs.InternetCode.GDescudoObjects1= [];
gdjs.InternetCode.GDescudoObjects2= [];
gdjs.InternetCode.GDescudoObjects3= [];
gdjs.InternetCode.GDescudoObjects4= [];
gdjs.InternetCode.GDDisparo_9595tripleObjects1= [];
gdjs.InternetCode.GDDisparo_9595tripleObjects2= [];
gdjs.InternetCode.GDDisparo_9595tripleObjects3= [];
gdjs.InternetCode.GDDisparo_9595tripleObjects4= [];
gdjs.InternetCode.GDNewSpriteObjects1= [];
gdjs.InternetCode.GDNewSpriteObjects2= [];
gdjs.InternetCode.GDNewSpriteObjects3= [];
gdjs.InternetCode.GDNewSpriteObjects4= [];
gdjs.InternetCode.GDenemigo_95954Objects1= [];
gdjs.InternetCode.GDenemigo_95954Objects2= [];
gdjs.InternetCode.GDenemigo_95954Objects3= [];
gdjs.InternetCode.GDenemigo_95954Objects4= [];
gdjs.InternetCode.GDenemigo_95955Objects1= [];
gdjs.InternetCode.GDenemigo_95955Objects2= [];
gdjs.InternetCode.GDenemigo_95955Objects3= [];
gdjs.InternetCode.GDenemigo_95955Objects4= [];
gdjs.InternetCode.GDenemigo_95956Objects1= [];
gdjs.InternetCode.GDenemigo_95956Objects2= [];
gdjs.InternetCode.GDenemigo_95956Objects3= [];
gdjs.InternetCode.GDenemigo_95956Objects4= [];
gdjs.InternetCode.GDenemigo_95957Objects1= [];
gdjs.InternetCode.GDenemigo_95957Objects2= [];
gdjs.InternetCode.GDenemigo_95957Objects3= [];
gdjs.InternetCode.GDenemigo_95957Objects4= [];
gdjs.InternetCode.GDGanasteObjects1= [];
gdjs.InternetCode.GDGanasteObjects2= [];
gdjs.InternetCode.GDGanasteObjects3= [];
gdjs.InternetCode.GDGanasteObjects4= [];
gdjs.InternetCode.GDPuntuaci_95243nObjects1= [];
gdjs.InternetCode.GDPuntuaci_95243nObjects2= [];
gdjs.InternetCode.GDPuntuaci_95243nObjects3= [];
gdjs.InternetCode.GDPuntuaci_95243nObjects4= [];


gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbalaObjects2Objects = Hashtable.newFrom({"bala": gdjs.InternetCode.GDbalaObjects2});
gdjs.InternetCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects2);
{for(var i = 0, len = gdjs.InternetCode.GDnave_9595espacialObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDnave_9595espacialObjects2[i].addPolarForce(0, 400, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects2);
{for(var i = 0, len = gdjs.InternetCode.GDnave_9595espacialObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDnave_9595espacialObjects2[i].addPolarForce(180, 400, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects2);
{for(var i = 0, len = gdjs.InternetCode.GDnave_9595espacialObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDnave_9595espacialObjects2[i].addPolarForce(270, 400, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects2);
{for(var i = 0, len = gdjs.InternetCode.GDnave_9595espacialObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDnave_9595espacialObjects2[i].addPolarForce(90, 400, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects2);
gdjs.InternetCode.GDbalaObjects2.length = 0;

{for(var i = 0, len = gdjs.InternetCode.GDnave_9595espacialObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDnave_9595espacialObjects2[i].getBehavior("FireBullet").Fire((gdjs.InternetCode.GDnave_9595espacialObjects2[i].getPointX("")) + 30, (gdjs.InternetCode.GDnave_9595espacialObjects2[i].getPointY("")) + 50, gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbalaObjects2Objects, 270, 1000, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.InternetCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.InternetCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}
{for(var i = 0, len = gdjs.InternetCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.InternetCode.GDfondoObjects1[i].setYOffset(gdjs.InternetCode.GDfondoObjects1[i].getYOffset() - (40 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.InternetCode.GDnave_9595espacialObjects1.length ;i < len;++i) {
    gdjs.InternetCode.GDnave_9595espacialObjects1[i].addForce(0, 150, 0);
}
}
}

}


};gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbalaObjects2Objects = Hashtable.newFrom({"bala": gdjs.InternetCode.GDbalaObjects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDenemigo_959595951Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595952Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595953Objects2Objects = Hashtable.newFrom({"enemigo_1": gdjs.InternetCode.GDenemigo_95951Objects2, "enemigo_2": gdjs.InternetCode.GDenemigo_95952Objects2, "enemigo_3": gdjs.InternetCode.GDenemigo_95953Objects2});
gdjs.InternetCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.InternetCode.GDenemigo_95953Objects2, gdjs.InternetCode.GDenemigo_95953Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95953Objects3.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95953Objects3[i].getCenterXInScene() >= 300 ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95953Objects3[k] = gdjs.InternetCode.GDenemigo_95953Objects3[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95953Objects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95953Objects3.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95953Objects3[i].getCenterXInScene() < 400 ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95953Objects3[k] = gdjs.InternetCode.GDenemigo_95953Objects3[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95953Objects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDenemigo_95953Objects3 */
{for(var i = 0, len = gdjs.InternetCode.GDenemigo_95953Objects3.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95953Objects3[i].addPolarForce(-(180), 300, 0);
}
}
}

}


{

/* Reuse gdjs.InternetCode.GDenemigo_95953Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95953Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95953Objects2[i].getCenterXInScene() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95953Objects2[k] = gdjs.InternetCode.GDenemigo_95953Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95953Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95953Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95953Objects2[i].getCenterXInScene() <= 250 ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95953Objects2[k] = gdjs.InternetCode.GDenemigo_95953Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95953Objects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDenemigo_95953Objects2 */
{for(var i = 0, len = gdjs.InternetCode.GDenemigo_95953Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95953Objects2[i].addPolarForce(180, 300, 0);
}
}
}

}


};gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDenemigo_959595952Objects2Objects = Hashtable.newFrom({"enemigo_2": gdjs.InternetCode.GDenemigo_95952Objects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDnave_95959595espacialObjects2Objects = Hashtable.newFrom({"nave_espacial": gdjs.InternetCode.GDnave_9595espacialObjects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbala_95959595enemigaObjects2Objects = Hashtable.newFrom({"bala_enemiga": gdjs.InternetCode.GDbala_9595enemigaObjects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbalaObjects2Objects = Hashtable.newFrom({"bala": gdjs.InternetCode.GDbalaObjects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDenemigo_959595954Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595955Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595956Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595957Objects2Objects = Hashtable.newFrom({"enemigo_4": gdjs.InternetCode.GDenemigo_95954Objects2, "enemigo_5": gdjs.InternetCode.GDenemigo_95955Objects2, "enemigo_6": gdjs.InternetCode.GDenemigo_95956Objects2, "enemigo_7": gdjs.InternetCode.GDenemigo_95957Objects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbalaObjects2Objects = Hashtable.newFrom({"bala": gdjs.InternetCode.GDbalaObjects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDenemigo_959595954Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595955Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595956Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595957Objects2Objects = Hashtable.newFrom({"enemigo_4": gdjs.InternetCode.GDenemigo_95954Objects2, "enemigo_5": gdjs.InternetCode.GDenemigo_95955Objects2, "enemigo_6": gdjs.InternetCode.GDenemigo_95956Objects2, "enemigo_7": gdjs.InternetCode.GDenemigo_95957Objects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDnave_95959595espacialObjects2Objects = Hashtable.newFrom({"nave_espacial": gdjs.InternetCode.GDnave_9595espacialObjects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDenemigo_959595951Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595952Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595953Objects2Objects = Hashtable.newFrom({"enemigo_1": gdjs.InternetCode.GDenemigo_95951Objects2, "enemigo_2": gdjs.InternetCode.GDenemigo_95952Objects2, "enemigo_3": gdjs.InternetCode.GDenemigo_95953Objects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDnave_95959595espacialObjects2Objects = Hashtable.newFrom({"nave_espacial": gdjs.InternetCode.GDnave_9595espacialObjects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbala_95959595enemigaObjects2Objects = Hashtable.newFrom({"bala_enemiga": gdjs.InternetCode.GDbala_9595enemigaObjects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDnave_95959595espacialObjects2Objects = Hashtable.newFrom({"nave_espacial": gdjs.InternetCode.GDnave_9595espacialObjects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDenemigo_959595954Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595955Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595956Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595957Objects2Objects = Hashtable.newFrom({"enemigo_4": gdjs.InternetCode.GDenemigo_95954Objects2, "enemigo_5": gdjs.InternetCode.GDenemigo_95955Objects2, "enemigo_6": gdjs.InternetCode.GDenemigo_95956Objects2, "enemigo_7": gdjs.InternetCode.GDenemigo_95957Objects2});
gdjs.InternetCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("enemigo_1"), gdjs.InternetCode.GDenemigo_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_2"), gdjs.InternetCode.GDenemigo_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_3"), gdjs.InternetCode.GDenemigo_95953Objects2);
gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDnave_95959595espacialObjects2Objects, gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDenemigo_959595951Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595952Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595953Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDenemigo_95951Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95952Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95953Objects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(40);
}
{for(var i = 0, len = gdjs.InternetCode.GDenemigo_95951Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95951Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95952Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95952Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95953Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95953Objects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bala_enemiga"), gdjs.InternetCode.GDbala_9595enemigaObjects2);
gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDnave_95959595espacialObjects2Objects, gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbala_95959595enemigaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDbala_9595enemigaObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(30);
}
{for(var i = 0, len = gdjs.InternetCode.GDbala_9595enemigaObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDbala_9595enemigaObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects2);
{for(var i = 0, len = gdjs.InternetCode.GDnave_9595espacialObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDnave_9595espacialObjects2[i].getBehavior("Health").Hit(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), true, true, null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDnave_9595espacialObjects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDnave_9595espacialObjects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDnave_9595espacialObjects2[k] = gdjs.InternetCode.GDnave_9595espacialObjects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDnave_9595espacialObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Internet", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemigo_4"), gdjs.InternetCode.GDenemigo_95954Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_5"), gdjs.InternetCode.GDenemigo_95955Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_6"), gdjs.InternetCode.GDenemigo_95956Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_7"), gdjs.InternetCode.GDenemigo_95957Objects2);
gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDnave_95959595espacialObjects2Objects, gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDenemigo_959595954Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595955Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595956Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595957Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDenemigo_95954Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95955Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95956Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95957Objects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(40);
}
{for(var i = 0, len = gdjs.InternetCode.GDenemigo_95954Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95954Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95955Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95955Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95956Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95956Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95957Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95957Objects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.InternetCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bala"), gdjs.InternetCode.GDbalaObjects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_1"), gdjs.InternetCode.GDenemigo_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_2"), gdjs.InternetCode.GDenemigo_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_3"), gdjs.InternetCode.GDenemigo_95953Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbalaObjects2Objects, gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDenemigo_959595951Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595952Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595953Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDbalaObjects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95951Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95952Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95953Objects2 */
{for(var i = 0, len = gdjs.InternetCode.GDbalaObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDbalaObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.InternetCode.GDenemigo_95951Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95951Objects2[i].getBehavior("Health").Hit(50, false, false, null);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95952Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95952Objects2[i].getBehavior("Health").Hit(50, false, false, null);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95953Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95953Objects2[i].getBehavior("Health").Hit(50, false, false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemigo_1"), gdjs.InternetCode.GDenemigo_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_2"), gdjs.InternetCode.GDenemigo_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_3"), gdjs.InternetCode.GDenemigo_95953Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95951Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95951Objects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95951Objects2[k] = gdjs.InternetCode.GDenemigo_95951Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95951Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95952Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95952Objects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95952Objects2[k] = gdjs.InternetCode.GDenemigo_95952Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95952Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95953Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95953Objects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95953Objects2[k] = gdjs.InternetCode.GDenemigo_95953Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95953Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDenemigo_95951Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95952Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95953Objects2 */
{for(var i = 0, len = gdjs.InternetCode.GDenemigo_95951Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95951Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95952Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95952Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95953Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95953Objects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemigo_1"), gdjs.InternetCode.GDenemigo_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_2"), gdjs.InternetCode.GDenemigo_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_3"), gdjs.InternetCode.GDenemigo_95953Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95951Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95951Objects2[i].getX() <= gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 450 ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95951Objects2[k] = gdjs.InternetCode.GDenemigo_95951Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95951Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95952Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95952Objects2[i].getX() <= gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 450 ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95952Objects2[k] = gdjs.InternetCode.GDenemigo_95952Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95952Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95953Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95953Objects2[i].getX() <= gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 450 ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95953Objects2[k] = gdjs.InternetCode.GDenemigo_95953Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95953Objects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.InternetCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemigo_2"), gdjs.InternetCode.GDenemigo_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDenemigo_959595952Objects2Objects, gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDnave_95959595espacialObjects2Objects, 500, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "shootTimer") > 1.5;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDenemigo_95952Objects2 */
gdjs.InternetCode.GDbala_9595enemigaObjects2.length = 0;

{for(var i = 0, len = gdjs.InternetCode.GDenemigo_95952Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95952Objects2[i].getBehavior("FireBullet").Fire((gdjs.InternetCode.GDenemigo_95952Objects2[i].getPointX("")) - 30, (gdjs.InternetCode.GDenemigo_95952Objects2[i].getPointY("")) + 75, gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbala_95959595enemigaObjects2Objects, 90, 300, null);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "shootTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bala"), gdjs.InternetCode.GDbalaObjects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_4"), gdjs.InternetCode.GDenemigo_95954Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_5"), gdjs.InternetCode.GDenemigo_95955Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_6"), gdjs.InternetCode.GDenemigo_95956Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_7"), gdjs.InternetCode.GDenemigo_95957Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbalaObjects2Objects, gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDenemigo_959595954Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595955Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595956Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595957Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDbalaObjects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95954Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95955Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95956Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95957Objects2 */
{for(var i = 0, len = gdjs.InternetCode.GDbalaObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDbalaObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.InternetCode.GDenemigo_95954Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95954Objects2[i].getBehavior("Health").Hit(50, false, false, null);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95955Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95955Objects2[i].getBehavior("Health").Hit(50, false, false, null);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95956Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95956Objects2[i].getBehavior("Health").Hit(50, false, false, null);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95957Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95957Objects2[i].getBehavior("Health").Hit(50, false, false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemigo_4"), gdjs.InternetCode.GDenemigo_95954Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_5"), gdjs.InternetCode.GDenemigo_95955Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_6"), gdjs.InternetCode.GDenemigo_95956Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_7"), gdjs.InternetCode.GDenemigo_95957Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95954Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95954Objects2[i].getX() <= gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 450 ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95954Objects2[k] = gdjs.InternetCode.GDenemigo_95954Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95954Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95955Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95955Objects2[i].getX() <= gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 450 ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95955Objects2[k] = gdjs.InternetCode.GDenemigo_95955Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95955Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95956Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95956Objects2[i].getX() <= gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 450 ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95956Objects2[k] = gdjs.InternetCode.GDenemigo_95956Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95956Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95957Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95957Objects2[i].getX() <= gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 450 ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95957Objects2[k] = gdjs.InternetCode.GDenemigo_95957Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95957Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDenemigo_95954Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95955Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95956Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95957Objects2 */
{for(var i = 0, len = gdjs.InternetCode.GDenemigo_95954Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95954Objects2[i].addPolarForce(270, 30, 0);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95955Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95955Objects2[i].addPolarForce(270, 30, 0);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95956Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95956Objects2[i].addPolarForce(270, 30, 0);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95957Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95957Objects2[i].addPolarForce(270, 30, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bala"), gdjs.InternetCode.GDbalaObjects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_4"), gdjs.InternetCode.GDenemigo_95954Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_5"), gdjs.InternetCode.GDenemigo_95955Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_6"), gdjs.InternetCode.GDenemigo_95956Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_7"), gdjs.InternetCode.GDenemigo_95957Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbalaObjects2Objects, gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDenemigo_959595954Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595955Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595956Objects2ObjectsGDgdjs_9546InternetCode_9546GDenemigo_959595957Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDbalaObjects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95954Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95955Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95956Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95957Objects2 */
{for(var i = 0, len = gdjs.InternetCode.GDbalaObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDbalaObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.InternetCode.GDenemigo_95954Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95954Objects2[i].getBehavior("Health").Hit(50, false, false, null);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95955Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95955Objects2[i].getBehavior("Health").Hit(50, false, false, null);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95956Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95956Objects2[i].getBehavior("Health").Hit(50, false, false, null);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95957Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95957Objects2[i].getBehavior("Health").Hit(50, false, false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemigo_4"), gdjs.InternetCode.GDenemigo_95954Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_5"), gdjs.InternetCode.GDenemigo_95955Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_6"), gdjs.InternetCode.GDenemigo_95956Objects2);
gdjs.copyArray(runtimeScene.getObjects("enemigo_7"), gdjs.InternetCode.GDenemigo_95957Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95954Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95954Objects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95954Objects2[k] = gdjs.InternetCode.GDenemigo_95954Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95954Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95955Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95955Objects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95955Objects2[k] = gdjs.InternetCode.GDenemigo_95955Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95955Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95956Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95956Objects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95956Objects2[k] = gdjs.InternetCode.GDenemigo_95956Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95956Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95957Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95957Objects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95957Objects2[k] = gdjs.InternetCode.GDenemigo_95957Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95957Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDenemigo_95954Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95955Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95956Objects2 */
/* Reuse gdjs.InternetCode.GDenemigo_95957Objects2 */
{for(var i = 0, len = gdjs.InternetCode.GDenemigo_95954Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95954Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95955Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95955Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95956Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95956Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.InternetCode.GDenemigo_95957Objects2.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95957Objects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.InternetCode.eventsList3(runtimeScene);
}


};gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDnave_95959595espacialObjects2Objects = Hashtable.newFrom({"nave_espacial": gdjs.InternetCode.GDnave_9595espacialObjects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDsaludObjects2Objects = Hashtable.newFrom({"salud": gdjs.InternetCode.GDsaludObjects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDnave_95959595espacialObjects2Objects = Hashtable.newFrom({"nave_espacial": gdjs.InternetCode.GDnave_9595espacialObjects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDescudoObjects2Objects = Hashtable.newFrom({"escudo": gdjs.InternetCode.GDescudoObjects2});
gdjs.InternetCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "escudo") > 8;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "escudo");
}
}

}


};gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDnave_95959595espacialObjects2Objects = Hashtable.newFrom({"nave_espacial": gdjs.InternetCode.GDnave_9595espacialObjects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDDisparo_95959595tripleObjects2Objects = Hashtable.newFrom({"Disparo_triple": gdjs.InternetCode.GDDisparo_9595tripleObjects2});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbalaObjects1Objects = Hashtable.newFrom({"bala": gdjs.InternetCode.GDbalaObjects1});
gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbalaObjects1Objects = Hashtable.newFrom({"bala": gdjs.InternetCode.GDbalaObjects1});
gdjs.InternetCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "triple disparo") > 11;
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDnave_9595espacialObjects1 */
{for(var i = 0, len = gdjs.InternetCode.GDnave_9595espacialObjects1.length ;i < len;++i) {
    gdjs.InternetCode.GDnave_9595espacialObjects1[i].returnVariable(gdjs.InternetCode.GDnave_9595espacialObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.InternetCode.GDnave_9595espacialObjects1.length ;i < len;++i) {
    gdjs.InternetCode.GDnave_9595espacialObjects1[i].pauseTimer("triple disparo");
}
}
}

}


};gdjs.InternetCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects2);
gdjs.copyArray(runtimeScene.getObjects("salud"), gdjs.InternetCode.GDsaludObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDnave_95959595espacialObjects2Objects, gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDsaludObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDnave_9595espacialObjects2 */
/* Reuse gdjs.InternetCode.GDsaludObjects2 */
{for(var i = 0, len = gdjs.InternetCode.GDnave_9595espacialObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDnave_9595espacialObjects2[i].getBehavior("Health").Heal(30, null);
}
}
{for(var i = 0, len = gdjs.InternetCode.GDsaludObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDsaludObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("escudo"), gdjs.InternetCode.GDescudoObjects2);
gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDnave_95959595espacialObjects2Objects, gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDescudoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDescudoObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{for(var i = 0, len = gdjs.InternetCode.GDescudoObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDescudoObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "escudo");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.InternetCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Disparo_triple"), gdjs.InternetCode.GDDisparo_9595tripleObjects2);
gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDnave_95959595espacialObjects2Objects, gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDDisparo_95959595tripleObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDDisparo_9595tripleObjects2 */
/* Reuse gdjs.InternetCode.GDnave_9595espacialObjects2 */
{for(var i = 0, len = gdjs.InternetCode.GDnave_9595espacialObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDnave_9595espacialObjects2[i].returnVariable(gdjs.InternetCode.GDnave_9595espacialObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.InternetCode.GDDisparo_9595tripleObjects2.length ;i < len;++i) {
    gdjs.InternetCode.GDDisparo_9595tripleObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "triple disparo");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("nave_espacial"), gdjs.InternetCode.GDnave_9595espacialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDnave_9595espacialObjects1.length;i<l;++i) {
    if ( gdjs.InternetCode.GDnave_9595espacialObjects1[i].getVariableNumber(gdjs.InternetCode.GDnave_9595espacialObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_1 = true;
        gdjs.InternetCode.GDnave_9595espacialObjects1[k] = gdjs.InternetCode.GDnave_9595espacialObjects1[i];
        ++k;
    }
}
gdjs.InternetCode.GDnave_9595espacialObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.InternetCode.GDnave_9595espacialObjects1 */
gdjs.InternetCode.GDbalaObjects1.length = 0;

{for(var i = 0, len = gdjs.InternetCode.GDnave_9595espacialObjects1.length ;i < len;++i) {
    gdjs.InternetCode.GDnave_9595espacialObjects1[i].getBehavior("FireBullet").Fire((gdjs.InternetCode.GDnave_9595espacialObjects1[i].getPointX("")), (gdjs.InternetCode.GDnave_9595espacialObjects1[i].getPointY("")) + 50, gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbalaObjects1Objects, 270, 1000, null);
}
}
{for(var i = 0, len = gdjs.InternetCode.GDnave_9595espacialObjects1.length ;i < len;++i) {
    gdjs.InternetCode.GDnave_9595espacialObjects1[i].getBehavior("FireBullet").Fire((gdjs.InternetCode.GDnave_9595espacialObjects1[i].getPointX("")) + 60, (gdjs.InternetCode.GDnave_9595espacialObjects1[i].getPointY("")) + 50, gdjs.InternetCode.mapOfGDgdjs_9546InternetCode_9546GDbalaObjects1Objects, 270, 1000, null);
}
}

{ //Subevents
gdjs.InternetCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.InternetCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("enemigo_1"), gdjs.InternetCode.GDenemigo_95951Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95951Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95951Objects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95951Objects2[k] = gdjs.InternetCode.GDenemigo_95951Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95951Objects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(5);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemigo_2"), gdjs.InternetCode.GDenemigo_95952Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95952Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95952Objects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95952Objects2[k] = gdjs.InternetCode.GDenemigo_95952Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95952Objects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(10);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemigo_4"), gdjs.InternetCode.GDenemigo_95954Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95954Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95954Objects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95954Objects2[k] = gdjs.InternetCode.GDenemigo_95954Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95954Objects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(20);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemigo_5"), gdjs.InternetCode.GDenemigo_95955Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95955Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95955Objects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95955Objects2[k] = gdjs.InternetCode.GDenemigo_95955Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95955Objects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(25);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemigo_6"), gdjs.InternetCode.GDenemigo_95956Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95956Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95956Objects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95956Objects2[k] = gdjs.InternetCode.GDenemigo_95956Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95956Objects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(30);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemigo_7"), gdjs.InternetCode.GDenemigo_95957Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InternetCode.GDenemigo_95957Objects2.length;i<l;++i) {
    if ( gdjs.InternetCode.GDenemigo_95957Objects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.InternetCode.GDenemigo_95957Objects2[k] = gdjs.InternetCode.GDenemigo_95957Objects2[i];
        ++k;
    }
}
gdjs.InternetCode.GDenemigo_95957Objects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(40);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.InternetCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.InternetCode.userFunc0xd52d00 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
// Limpiar todos los videos del DOM al iniciar la escena
(function cleanupVideos() {
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.pause();       // Detener reproducción
        video.remove();      // Eliminar del DOM
    });
})();
};
gdjs.InternetCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "shootTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "triple disparo");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Puntuación"), gdjs.InternetCode.GDPuntuaci_95243nObjects1);
{for(var i = 0, len = gdjs.InternetCode.GDPuntuaci_95243nObjects1.length ;i < len;++i) {
    gdjs.InternetCode.GDPuntuaci_95243nObjects1[i].getBehavior("Text").setText("Puntuación: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}
}

}


{


gdjs.InternetCode.eventsList0(runtimeScene);
}


{


gdjs.InternetCode.eventsList1(runtimeScene);
}


{


gdjs.InternetCode.eventsList4(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("enemigo_1"), gdjs.InternetCode.GDenemigo_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("enemigo_2"), gdjs.InternetCode.GDenemigo_95952Objects1);
{for(var i = 0, len = gdjs.InternetCode.GDenemigo_95951Objects1.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95951Objects1[i].getBehavior("Scale").setScale(0.4);
}
}
{for(var i = 0, len = gdjs.InternetCode.GDenemigo_95952Objects1.length ;i < len;++i) {
    gdjs.InternetCode.GDenemigo_95952Objects1[i].getBehavior("Scale").setScale(0.3);
}
}
}

}


{


gdjs.InternetCode.eventsList7(runtimeScene);
}


{


gdjs.InternetCode.eventsList8(runtimeScene);
}


{


gdjs.InternetCode.eventsList9(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.InternetCode.userFunc0xd52d00(runtimeScene);

}


};

gdjs.InternetCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InternetCode.GDnave_9595espacialObjects1.length = 0;
gdjs.InternetCode.GDnave_9595espacialObjects2.length = 0;
gdjs.InternetCode.GDnave_9595espacialObjects3.length = 0;
gdjs.InternetCode.GDnave_9595espacialObjects4.length = 0;
gdjs.InternetCode.GDbalaObjects1.length = 0;
gdjs.InternetCode.GDbalaObjects2.length = 0;
gdjs.InternetCode.GDbalaObjects3.length = 0;
gdjs.InternetCode.GDbalaObjects4.length = 0;
gdjs.InternetCode.GDenemigo_95951Objects1.length = 0;
gdjs.InternetCode.GDenemigo_95951Objects2.length = 0;
gdjs.InternetCode.GDenemigo_95951Objects3.length = 0;
gdjs.InternetCode.GDenemigo_95951Objects4.length = 0;
gdjs.InternetCode.GDfondoObjects1.length = 0;
gdjs.InternetCode.GDfondoObjects2.length = 0;
gdjs.InternetCode.GDfondoObjects3.length = 0;
gdjs.InternetCode.GDfondoObjects4.length = 0;
gdjs.InternetCode.GDenemigo_95952Objects1.length = 0;
gdjs.InternetCode.GDenemigo_95952Objects2.length = 0;
gdjs.InternetCode.GDenemigo_95952Objects3.length = 0;
gdjs.InternetCode.GDenemigo_95952Objects4.length = 0;
gdjs.InternetCode.GDenemigo_95953Objects1.length = 0;
gdjs.InternetCode.GDenemigo_95953Objects2.length = 0;
gdjs.InternetCode.GDenemigo_95953Objects3.length = 0;
gdjs.InternetCode.GDenemigo_95953Objects4.length = 0;
gdjs.InternetCode.GDbala_9595enemigaObjects1.length = 0;
gdjs.InternetCode.GDbala_9595enemigaObjects2.length = 0;
gdjs.InternetCode.GDbala_9595enemigaObjects3.length = 0;
gdjs.InternetCode.GDbala_9595enemigaObjects4.length = 0;
gdjs.InternetCode.GDsaludObjects1.length = 0;
gdjs.InternetCode.GDsaludObjects2.length = 0;
gdjs.InternetCode.GDsaludObjects3.length = 0;
gdjs.InternetCode.GDsaludObjects4.length = 0;
gdjs.InternetCode.GDescudoObjects1.length = 0;
gdjs.InternetCode.GDescudoObjects2.length = 0;
gdjs.InternetCode.GDescudoObjects3.length = 0;
gdjs.InternetCode.GDescudoObjects4.length = 0;
gdjs.InternetCode.GDDisparo_9595tripleObjects1.length = 0;
gdjs.InternetCode.GDDisparo_9595tripleObjects2.length = 0;
gdjs.InternetCode.GDDisparo_9595tripleObjects3.length = 0;
gdjs.InternetCode.GDDisparo_9595tripleObjects4.length = 0;
gdjs.InternetCode.GDNewSpriteObjects1.length = 0;
gdjs.InternetCode.GDNewSpriteObjects2.length = 0;
gdjs.InternetCode.GDNewSpriteObjects3.length = 0;
gdjs.InternetCode.GDNewSpriteObjects4.length = 0;
gdjs.InternetCode.GDenemigo_95954Objects1.length = 0;
gdjs.InternetCode.GDenemigo_95954Objects2.length = 0;
gdjs.InternetCode.GDenemigo_95954Objects3.length = 0;
gdjs.InternetCode.GDenemigo_95954Objects4.length = 0;
gdjs.InternetCode.GDenemigo_95955Objects1.length = 0;
gdjs.InternetCode.GDenemigo_95955Objects2.length = 0;
gdjs.InternetCode.GDenemigo_95955Objects3.length = 0;
gdjs.InternetCode.GDenemigo_95955Objects4.length = 0;
gdjs.InternetCode.GDenemigo_95956Objects1.length = 0;
gdjs.InternetCode.GDenemigo_95956Objects2.length = 0;
gdjs.InternetCode.GDenemigo_95956Objects3.length = 0;
gdjs.InternetCode.GDenemigo_95956Objects4.length = 0;
gdjs.InternetCode.GDenemigo_95957Objects1.length = 0;
gdjs.InternetCode.GDenemigo_95957Objects2.length = 0;
gdjs.InternetCode.GDenemigo_95957Objects3.length = 0;
gdjs.InternetCode.GDenemigo_95957Objects4.length = 0;
gdjs.InternetCode.GDGanasteObjects1.length = 0;
gdjs.InternetCode.GDGanasteObjects2.length = 0;
gdjs.InternetCode.GDGanasteObjects3.length = 0;
gdjs.InternetCode.GDGanasteObjects4.length = 0;
gdjs.InternetCode.GDPuntuaci_95243nObjects1.length = 0;
gdjs.InternetCode.GDPuntuaci_95243nObjects2.length = 0;
gdjs.InternetCode.GDPuntuaci_95243nObjects3.length = 0;
gdjs.InternetCode.GDPuntuaci_95243nObjects4.length = 0;

gdjs.InternetCode.eventsList10(runtimeScene);
gdjs.InternetCode.GDnave_9595espacialObjects1.length = 0;
gdjs.InternetCode.GDnave_9595espacialObjects2.length = 0;
gdjs.InternetCode.GDnave_9595espacialObjects3.length = 0;
gdjs.InternetCode.GDnave_9595espacialObjects4.length = 0;
gdjs.InternetCode.GDbalaObjects1.length = 0;
gdjs.InternetCode.GDbalaObjects2.length = 0;
gdjs.InternetCode.GDbalaObjects3.length = 0;
gdjs.InternetCode.GDbalaObjects4.length = 0;
gdjs.InternetCode.GDenemigo_95951Objects1.length = 0;
gdjs.InternetCode.GDenemigo_95951Objects2.length = 0;
gdjs.InternetCode.GDenemigo_95951Objects3.length = 0;
gdjs.InternetCode.GDenemigo_95951Objects4.length = 0;
gdjs.InternetCode.GDfondoObjects1.length = 0;
gdjs.InternetCode.GDfondoObjects2.length = 0;
gdjs.InternetCode.GDfondoObjects3.length = 0;
gdjs.InternetCode.GDfondoObjects4.length = 0;
gdjs.InternetCode.GDenemigo_95952Objects1.length = 0;
gdjs.InternetCode.GDenemigo_95952Objects2.length = 0;
gdjs.InternetCode.GDenemigo_95952Objects3.length = 0;
gdjs.InternetCode.GDenemigo_95952Objects4.length = 0;
gdjs.InternetCode.GDenemigo_95953Objects1.length = 0;
gdjs.InternetCode.GDenemigo_95953Objects2.length = 0;
gdjs.InternetCode.GDenemigo_95953Objects3.length = 0;
gdjs.InternetCode.GDenemigo_95953Objects4.length = 0;
gdjs.InternetCode.GDbala_9595enemigaObjects1.length = 0;
gdjs.InternetCode.GDbala_9595enemigaObjects2.length = 0;
gdjs.InternetCode.GDbala_9595enemigaObjects3.length = 0;
gdjs.InternetCode.GDbala_9595enemigaObjects4.length = 0;
gdjs.InternetCode.GDsaludObjects1.length = 0;
gdjs.InternetCode.GDsaludObjects2.length = 0;
gdjs.InternetCode.GDsaludObjects3.length = 0;
gdjs.InternetCode.GDsaludObjects4.length = 0;
gdjs.InternetCode.GDescudoObjects1.length = 0;
gdjs.InternetCode.GDescudoObjects2.length = 0;
gdjs.InternetCode.GDescudoObjects3.length = 0;
gdjs.InternetCode.GDescudoObjects4.length = 0;
gdjs.InternetCode.GDDisparo_9595tripleObjects1.length = 0;
gdjs.InternetCode.GDDisparo_9595tripleObjects2.length = 0;
gdjs.InternetCode.GDDisparo_9595tripleObjects3.length = 0;
gdjs.InternetCode.GDDisparo_9595tripleObjects4.length = 0;
gdjs.InternetCode.GDNewSpriteObjects1.length = 0;
gdjs.InternetCode.GDNewSpriteObjects2.length = 0;
gdjs.InternetCode.GDNewSpriteObjects3.length = 0;
gdjs.InternetCode.GDNewSpriteObjects4.length = 0;
gdjs.InternetCode.GDenemigo_95954Objects1.length = 0;
gdjs.InternetCode.GDenemigo_95954Objects2.length = 0;
gdjs.InternetCode.GDenemigo_95954Objects3.length = 0;
gdjs.InternetCode.GDenemigo_95954Objects4.length = 0;
gdjs.InternetCode.GDenemigo_95955Objects1.length = 0;
gdjs.InternetCode.GDenemigo_95955Objects2.length = 0;
gdjs.InternetCode.GDenemigo_95955Objects3.length = 0;
gdjs.InternetCode.GDenemigo_95955Objects4.length = 0;
gdjs.InternetCode.GDenemigo_95956Objects1.length = 0;
gdjs.InternetCode.GDenemigo_95956Objects2.length = 0;
gdjs.InternetCode.GDenemigo_95956Objects3.length = 0;
gdjs.InternetCode.GDenemigo_95956Objects4.length = 0;
gdjs.InternetCode.GDenemigo_95957Objects1.length = 0;
gdjs.InternetCode.GDenemigo_95957Objects2.length = 0;
gdjs.InternetCode.GDenemigo_95957Objects3.length = 0;
gdjs.InternetCode.GDenemigo_95957Objects4.length = 0;
gdjs.InternetCode.GDGanasteObjects1.length = 0;
gdjs.InternetCode.GDGanasteObjects2.length = 0;
gdjs.InternetCode.GDGanasteObjects3.length = 0;
gdjs.InternetCode.GDGanasteObjects4.length = 0;
gdjs.InternetCode.GDPuntuaci_95243nObjects1.length = 0;
gdjs.InternetCode.GDPuntuaci_95243nObjects2.length = 0;
gdjs.InternetCode.GDPuntuaci_95243nObjects3.length = 0;
gdjs.InternetCode.GDPuntuaci_95243nObjects4.length = 0;


return;

}

gdjs['InternetCode'] = gdjs.InternetCode;
