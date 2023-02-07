import { train } from 'veitch-karnaugh-ai';


var x = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 1, 1],
    [1, 0, 1]
]

var y = [
    [0, 1],
    [1, 0],
    [1, 0],
    [0, 1]
]


var model = train(x, y);


for(const item of x) {
    console.log(model.predict(item));
}