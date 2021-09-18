スプライト = game.create_sprite(2, 2)

def on_forever():
    if input.rotation(Rotation.ROLL) > 50:
        スプライト.change(LedSpriteProperty.X, 1)
    if input.rotation(Rotation.ROLL) > 50:
        スプライト.change(LedSpriteProperty.X, -1)
basic.forever(on_forever)
