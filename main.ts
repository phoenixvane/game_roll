let スプライト = game.createSprite(2, 2)
let しきいち = 30
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > しきいち) {
        スプライト.change(LedSpriteProperty.X, 1)
    } else if (input.rotation(Rotation.Roll) < しきいち * -1) {
        スプライト.change(LedSpriteProperty.X, -1)
    } else if (input.rotation(Rotation.Pitch) > しきいち) {
        スプライト.change(LedSpriteProperty.Y, 1)
    } else if (input.rotation(Rotation.Pitch) < しきいち * -1) {
        スプライト.change(LedSpriteProperty.Y, -1)
    } else {
    	
    }
    basic.pause(100)
})
