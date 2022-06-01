namespace SpriteKind {
    export const Heart = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.B.isPressed()) {
        mySprite.x += 20
    }
    pause(5000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed()) {
        mySprite.x += -20
        pause(5000)
    }
})
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
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    FazeUp()
})
function FazeUp () {
    tiles.setWallAt(tiles.getTileLocation(15, 4), false)
    tiles.setWallAt(tiles.getTileLocation(13, 0), false)
    tiles.setWallAt(tiles.getTileLocation(12, 1), false)
    tiles.setWallAt(tiles.getTileLocation(15, 5), false)
    tiles.setWallAt(tiles.getTileLocation(15, 6), false)
    tiles.setWallAt(tiles.getTileLocation(17, 0), false)
    tiles.setWallAt(tiles.getTileLocation(17, 1), false)
    tiles.setWallAt(tiles.getTileLocation(20, 4), false)
    tiles.setWallAt(tiles.getTileLocation(19, 5), false)
    tiles.setWallAt(tiles.getTileLocation(21, 7), false)
    tiles.setWallAt(tiles.getTileLocation(22, 7), false)
    tiles.setWallAt(tiles.getTileLocation(26, 7), false)
    tiles.setWallAt(tiles.getTileLocation(29, 3), false)
    tiles.setWallAt(tiles.getTileLocation(29, 4), false)
    tiles.setWallAt(tiles.getTileLocation(29, 5), false)
    tiles.setWallAt(tiles.getTileLocation(36, 3), false)
    tiles.setWallAt(tiles.getTileLocation(35, 3), false)
    tiles.setWallAt(tiles.getTileLocation(35, 4), false)
    tiles.setWallAt(tiles.getTileLocation(35, 5), false)
    tiles.setWallAt(tiles.getTileLocation(40, 7), false)
}
function Sacore () {
    textSprite = textsprite.create(convertToText(Number_score))
    textSprite.setPosition(34, 77)
    textSprite.setStayInScreen(true)
    Number_score = 0
}
let Number_score = 0
let textSprite: TextSprite = null
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
mySprite2.follow(mySprite, 25)
Sacore()
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
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
info.setLife(3)
forever(function () {
    if (controller.anyButton.isPressed()) {
        controller.moveSprite(mySprite, 100, 100)
    }
})
forever(function () {
    Number_score += 1
    textSprite.setText(convertToText(Number_score))
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
