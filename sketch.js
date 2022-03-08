var giftani,gift;

function preload ()
{
    giftani = loadAnimation("Assets/gift1.jpg","Assets/gift2.jpg","Assets/gift3.jpg","Assets/gift4.jpg","Assets/gift5.jpg","Assets/gift6.jpg","Assets/gift7.jpg");
    giftani.frameDelay = 5;
    giftimg = loadAnimation("Assets/gift8.jpg");   
}

function setup ()
{
    canvas = createCanvas(2000, 2000);
    gameState = 0;

    gift = createSprite(600,400);
    gift.addAnimation("g1",giftani);
    gift.addAnimation("g2",giftimg);    
    gift.scale = 2;  
}

function draw ()
{
    if(mousePressedOver(gift))
    {
        gift.changeAnimation("g2",giftimg);
        gift.scale = 1.1;
    }

    textSize(20)
    text("Click to Open",100,450);
    
    drawSprites();
}