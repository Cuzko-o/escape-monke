info.onCountdownEnd(function () {
    tiles.setCurrentTilemap(tilemap`level3`)
    info.startCountdown(60)
    mySprite3 = sprites.create(img`
        .........ccc........
        ......cccc3cc.......
        .....cc3c3c3c.......
        .....c33ccbcc.......
        .....cb3cb3b3c......
        .....ccccccc3c......
        .....c33bbc33c......
        .....cc333cccc......
        ......ccccc7..6.....
        ...........7666.....
        .......5..766.......
        .......7776.........
        ........76..........
        ........6...........
        ........6...........
        ........6...........
        ........66..........
        .........6..........
        ....................
        ....................
        `, SpriteKind.Food)
    mySprite3.setPosition(140, 99)
    mySprite2 = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `, SpriteKind.Enemy)
    mySprite2.follow(mySprite, 85)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let Score = ""
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c . . . . . . . 
    . . . . . c c c c c c . . . . . 
    . . . . c c 8 c c c c c . . . . 
    . . . c c 1 2 c c c c c c . . . 
    . . c c c c c 2 8 c c c c c . . 
    . c c c c c c 1 c c c c c c c . 
    c c c 2 2 c c c c c 2 2 2 c c c 
    c c c c c c c c c c c c c c c c 
    . . 1 1 1 1 f f 1 1 1 f f 1 . . 
    . . 1 1 1 1 f f 1 1 1 f f 1 . . 
    . . 1 1 1 1 f f 1 1 1 f f 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(61, 108)
mySprite.setStayInScreen(true)
mySprite2 = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(160, 54)
mySprite2.follow(mySprite, 10)
let Number_score = 0
let textSprite = textsprite.create(convertToText(Number_score))
textSprite.setPosition(34, 77)
textSprite.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite3 = sprites.create(img`
    .........ccc........
    ......cccc3cc.......
    .....cc3c3c3c.......
    .....c33ccbcc.......
    .....cb3cb3b3c......
    .....ccccccc3c......
    .....c33bbc33c......
    .....cc333cccc......
    ......ccccc7..6.....
    ...........7666.....
    .......5..766.......
    .......7776.........
    ........76..........
    ........6...........
    ........6...........
    ........6...........
    ........66..........
    .........6..........
    ....................
    ....................
    `, SpriteKind.Food)
mySprite3.setScale(1, ScaleAnchor.Middle)
mySprite3.setPosition(140, 99)
info.setLife(3)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
forever(function () {
    Number_score += 1
    textSprite.setText(convertToText(Number_score))
})
forever(function () {
    if (controller.A.isPressed()) {
        mySprite.ay += -300
    }
})
forever(function () {
    music.spooky.playUntilDone()
})
forever(function () {
    if (mySprite.overlapsWith(mySprite3)) {
        mySprite3.destroy()
        info.changeLifeBy(1)
    }
})
forever(function () {
    if (controller.anyButton.isPressed()) {
        controller.moveSprite(mySprite, 100, 100)
    }
})
forever(function () {
    if (mySprite.overlapsWith(mySprite2)) {
        info.changeLifeBy(-1)
        pause(1000)
    }
})
forever(function () {
    if (info.life() == 1) {
        mySprite2.follow(mySprite, 100)
    }
})
forever(function () {
    if (game.runtime() > 120000) {
        game.over(true)
    }
})
