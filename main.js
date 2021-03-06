var canvas = new fabric.Canvas('myCanvas');
playerx=10;
playery=10;
blockimagewidth=30;
blockimageheight=30;
var playerobject="";
var blockimageobject="";
function playerupate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject);
    });
}
function blockupate(getimage){
    fabric.Image.fromURL(getimage,function(Img){
        blockimageobject=Img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimageheight);
        blockimageobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockimageobject);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("key pressed shift and letter p");
        blockimagewidth=blockimagewidth+10;
        blockimageheight=blockimageheight+10;
        document.getElementById("w").innerHTML=blockimagewidth;
        document.getElementById("h").innerHTML=blockimageheight;
    }
    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("key pressed shift and letter m");
        blockimagewidth=blockimagewidth-10;
        blockimageheight=blockimageheight-10;
        document.getElementById("w").innerHTML=blockimagewidth;
        document.getElementById("h").innerHTML=blockimageheight;
    }
    if(keyPressed=='38'){up();console.log("up");}
    if(keyPressed=='40'){down();console.log("down");}
    if(keyPressed=='37'){left();console.log("left");}
    if(keyPressed=='39'){right();console.log("right");}
    if(keyPressed=='87'){console.log("w");blockupate('wall.jpg');}
    if(keyPressed=='71'){console.log("g");blockupate('ground.png');}
    if(keyPressed=='76'){console.log("l");blockupate('light_green.png');}
    if(keyPressed=='84'){console.log("t");blockupate('trunk.jpg');}
    if(keyPressed=='82'){console.log("r");blockupate('roof.jpg');}
    if(keyPressed=='89'){console.log("y");blockupate('yellow_wall.png');}
    if(keyPressed=='68'){console.log("d");blockupate('dark_green.png');}
    if(keyPressed=='85'){console.log("u");blockupate('unique.png');}
    if(keyPressed=='67'){console.log("c");blockupate('cloud.jpg');}
}
function up(){
    if(playery>=0){
        playery=playery-blockimageheight;
        console.log("blockimageheight is"+blockimageheight);
        console.log("When Up arrow key is pressed, X = " + playerx + " , Y = "+playery);
        canvas.remove(playerobject);
        playerupate();
    }
}
function down(){
    if(playery<=500){
        playery=playery+blockimageheight;
        console.log("blockimageheight is"+blockimageheight);
        console.log("When Up arrow key is pressed, X = " + playerx + " , Y = "+playery);
        canvas.remove(playerobject);
        playerupate();
    }
}
function left(){
    if(playerx>=0){
        playerx=playerx-blockimagewidth;
        console.log("blockimagewidth is"+blockimagewidth);
        console.log("When Up arrow key is pressed, X = " + playerx + " , Y = "+playery);
        canvas.remove(playerobject);
        playerupate();
    }
}
function right(){
    if(playerx<=850){
        playerx=playerx+blockimagewidth;
        console.log("blockimagewidth is"+blockimagewidth);
        console.log("When Up arrow key is pressed, X = " + playerx + " , Y = "+playery);
        canvas.remove(playerobject);
        playerupate();
    }
}