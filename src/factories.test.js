import { createShip } from "./factories";

let ship = createShip('ship', 5)
let shipTwo = createShip('shipTwo', 3)

test('Test if shipLength is correct', () => {
    expect(ship.shipLength).toEqual(5)})

test('Test if shipLength is correct', () => {
    expect(shipTwo.shipLength).toEqual(3)})