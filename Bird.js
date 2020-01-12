Serverstatus = 1
wt = 2
cbtc = [255,255,255]
ebtc = [255,255,255]
mmbtc = [255,255,255]
event1 = ["None Planned"]
event2 = ["None Planned"]
event3 = ["None Planned"]
function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
//mainpage start
background(105,220,255)

if (wt === 1) {
	fill(255,255,255)
	//title box
rect(windowWidth - 1060, windowHeight - 950,205,50)
//title text
fill(0)
textSize(25)
text("Scp 049 is a Bird",windowWidth - 1050,windowHeight - 915)
//title end
//Server Info
fill(255,255,255)
//Server Info Base
rect(windowWidth - 1700,windowHeight - 900,600,500)
//Server Info Title
fill (0)
textSize(25)
text("Info",windowWidth - 1440,windowHeight - 850)

//sstats
if (Serverstatus === 0) {
textSize(35)
fill (250,25,10)
	text("Server : Offline",windowWidth - 1540,windowHeight - 720)}

if (Serverstatus === 1) {
fill (10,200,10)
textSize(35)
text("Server : Online",windowWidth - 1540,windowHeight - 720)
}
fill(0)
textSize(15)
text("Note : This is Updated Manually",windowWidth - 1540, windowHeight - 700)
//discord link 
textSize(12)
text("To join the discord server use the link below :",windowWidth - 1540,windowHeight - 600)
text("https://discord.gg/ekMUMYt",windowWidth - 1500,windowHeight - 550)
//discord link end
//credits button
fill(cbtc)
rect(windowWidth - 200,windowHeight - 100,100,50)
fill(0)
textSize(20)
text("Credits",windowWidth - 180,windowHeight - 70)
if (mouseX >= windowWidth - 200 && mouseX <= windowWidth - 200 + 100 && mouseY >= windowHeight - 100 && mouseY <= windowHeight - 100 + 50) {cbtc = [190,190,190]}
else {cbtc = [255,255,255]}

	mousePressed = function() {if (mouseX >= windowWidth - 200 && mouseX <= windowWidth - 200 + 100 && mouseY >= windowHeight - 100 && mouseY <= windowHeight - 100 + 50) {wt = 2}
} //mainpage end
}
//Credits Page Start

if (wt === 2) {

//Main Menu Button
fill(mmbtc)
rect(windowWidth - 1800,windowHeight - 900,100,50)

//Main Menu Button Logic

if (mouseX >= windowWidth - 1800 && mouseX <= windowWidth - 1800 + 100 && mouseY >= windowHeight - 900 && mouseY >= windowHeight - 1800 + 50) {mmbtc = [190,190,190]}
else {mmbtc = [255,255,255]}

	mousePressed = function() {if (mouseX >= windowWidth - 1800 && mouseX <= windowWidth - 1800 + 100 && mouseY >= windowHeight - 900 && mouseY >= windowHeight - 1800 + 50) {wt = 1}}
fill(0)
textSize(20)
text("Main Menu", windowWidth - 1799,windowHeight - 870)


//Credits 

textSize(35)
text("Credits :",windowWidth / 2,windowHeight - 900)
textSize(20)
text("Server Owner :  The Kermit Experience",windowWidth / 2 - 70,windowHeight - 850)
text("Owners Trusty Assitant : {NULL}",windowWidth / 2 - 70,windowHeight - 750)
text("CoOwner : RGMoney",windowWidth / 2 - 70,windowHeight - 800)
text("Website Developer : 0fficerZ0mbie",windowWidth / 2 - 70,windowHeight - 700)

}
//Credits Page End
}