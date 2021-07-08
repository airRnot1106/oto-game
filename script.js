let score;
let notesLine;
let judgmentFrame;
let pressFlg = false;
let sound;
let pico;
let title;
let playFlg = 0;
let selectFlg = false;
//const musicData = [[1, 1, 0], [2, 0, 0], [2, 1, 0], [2, 1, 0], [8, 1, 0], [8, 1, 0]];

const music01 = {
    title: 'Typoghoti',
    oneBarLength: 600,
    bpm: 185,
    musicData: [    [1, 0, 1], [1, 0, 1], [1, 0, 1],
                    [1, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0],
                    [1, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0], 
                    [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0],
                    [16, 0, 1], [16, 0, 0], [8, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0],
                    [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0],
                    [16, 0, 1], [16, 0, 0], [8, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0],
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0],
                    [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0],
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0],
                    [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0],
                    [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [4, 1, 0],
                    [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], 
                    [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], 
                    [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], 
                    [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [4, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [4, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0],
                    [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], 
                    [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0],
                    [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], 
                    [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0],
                    [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], 
                    [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0],
                    [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], 
                    [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], 
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [2, 0, 0],
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0],
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0], [4, 0, 0],
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 1], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0], [4, 0, 0],
                    [2, 0, 0], [2, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], 
                    [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [83, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [4, 0, 0], 
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [4, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [4, 0, 0], [4, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0], 
                    [4, 0, 0], [8, 0, 1], [16, 0, 0], [16, 0, 0], [4, 0, 0], [8, 0, 1], [16, 0, 0], [16, 0, 0], [4, 0, 0], [8, 0, 1], [16, 0, 0], [16, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [4, 0, 0], 
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [4, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [4, 0, 0], [8, 0, 1], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0], [4, 0, 0], 
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0],
                    [4, 0, 0], [8, 0, 1], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0], [4, 0, 0], 
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], 
                    [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], 
                    [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [4, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [4, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [4, 0, 0]
                    

            ],
    notesData: [],
    barData: []
};
let playMusic = music01;

/*
1: 全音符
2: 二分音符
4: 四分音符
8: 八分音符
83: 八分三連符
16: 十六分音符
163: 十六分三連符
32: 三十二分音符
*/
const lengthRatio = {
    '1': 300,
    '2': 150,
    '4': 75,
    '8': 37.5,
    '83': 25,
    '16': 18.75,
    '163': 12.5,
    '32': 9.375,
};

/**
 * ベクトル管理用クラス
 *
 * @class Vec2
 */
 class Vec2 {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    // このベクトルと、引数のベクトルbの和を計算する
    add(b) {
        let a = this;
        return new Vec2(a.x + b.x, a.y + b.y);
    }
    // このベクトルを実数s倍したベクトルを計算する
    mul(s) {
        let a = this;
        return new Vec2(s * a.x, s * a.y);
    }
    // このベクトルの大きさを求める
    mag() {
        let a = this;
        return Math.sqrt(a.x ** 2 + a.y ** 2);
    }
    // このベクトルと引数のベクトルbの差を求める
    sub(b) {
        let a = this;
        return new Vec2(a.x - b.x, a.y - b.y);
    }
    // このベクトルを正規化したベクトルを求める
    norm() {
        let a = this;
        return a.mul(1 / a.mag());
    }
    // このベクトルと引数のベクトルbの、ドット積（内積）を求める
    dot(b) {
        let a = this;
        return a.x * b.x + a.y * b.y;
    }
    // このベクトルの反射ベクトルを求める。
    // wは、法線ベクトルとする（大きさは問わない）
    reflect(w) {
        let v = this;
        let cosTheta = v.mul(-1).dot(w) / (v.mul(-1).mag() * w.mag());
        let n = w.norm().mul(v.mag() * cosTheta);
        let r = v.add(n.mul(2));
        return r;
    }
}

class SelectMenu {
    constructor(_musics) {
        this.musics = _musics;
        this.selectingMusic = this.musics[0];
    }
}

class SelectMenuMusic {
    constructor(_vec, _name, _levels) {
        this.isSelected = false;
        this.vec = _vec;
        this.name = _name;
        this.levels = _levels;
    }
    create() {
        rectMode(CENTER);
        strokeWeight(5);
        noFill();
        if(this.isSelected) {
            stroke('yellow');
        } else {
            stroke(255);
        }
        rect(this.vec.x, this.vec.y, 100, 300);
        textFont('Helvetica');
        fill(255);
        textSize(20);
        strokeWeight(1);
        text(this.name, this.vec.x + 25, this.vec.y - 125 );
        text(this.levels[0], this.vec.x - 25, this.vec.y + 20);

    }
}

const typoghtoti = new SelectMenuMusic(new Vec2(400, 225), 'T\ny\np\no\ng\nh\no\nt\ni', ['☆\n☆\n★\n★\n★', '★\n★\n★\n★\n★']);
const selectMenu = new SelectMenu([typoghtoti]);

class Score {
    constructor(_vec) {
        this.vec = _vec;
        this.score = 0;
        this.maxCombo = 0;
        this.combo = 0;
        this.perfectTime = 0;
        this.greatTime = 0;
        this.niceTime = 0;
        this.mashingTime = 0;
        this.mashingFlg = 0;
        this.strQuality = '';
        this.qualityFlg = 0;
    }
    create() {
        stroke('#ffffff');
        strokeWeight(8);
        fill(0);
        rect(this.vec.x + 60, this.vec.y + 30, width / 6, this.vec.y);
    }
    showScore() {
        textAlign(CENTER);
        textSize(10);
        noStroke();
        fill(255);
        text(`COMBO: ${this.combo}`, this.vec.x + width / 12, 1.5 * this.vec.y);
        text(`SCORE: ${this.score}`, this.vec.x + width / 12, 0.7 * this.vec.y);

    }
    showQuality() {
        if(this.qualityFlg <= 0) {
            return;
        }
        textAlign(CENTER);
        textSize(10);
        noStroke();
        fill(255);
        text(this.strQuality, judgmentFrame.vec.x, 1.6 * judgmentFrame.vec.y);
        this.qualityFlg--;
    }
    add(quality) {
        if(quality < 5) {
            this.score += 1000;
            console.log(1000);
            this.strQuality = 'perfect';
            this.perfectTime++;
            this.qualityFlg = 30;
        } else if(quality < 10) {
            this.score += 500;
            this.strQuality = 'great';
            this.greatTime++;
            this.qualityFlg = 30;
            console.log(500);
        } else {
            this.score += 200;
            console.log(200);
            this.strQuality = 'nice';
            this.niceTime++;
            this.qualityFlg = 30;
        }
        this.combo++;
        if(this.maxCombo < this.combo) {
            this.maxCombo = this.combo;
        }
    }
    mash() {
        this.score += 500;
        this.mashingTime++;
        this.strQuality = `Drum Roll: ${this.mashingTime}`;
        this.qualityFlg = 50;
        this.mashingFlg = 50;
    }
    fail() {
        console.log('miss');
        this.strQuality = 'miss';
        this.qualityFlg = 30;
        this.combo = 0;
    }
}

class NotesLine {
    constructor(_height, _color) {
        this.height = _height;
        this.color = _color;
        this.judgmentFramePosition = new Vec2(width / 6 + 50, 1.5 * this.height);
    }
    create() {
        stroke(this.color);
        strokeWeight(8);
        line(0, this.height, width, this.height);
        line(0, 2 * this.height, width, 2 * this.height);
    }
}

class JudgmentFrame {
    constructor(_vec) {
        this.vec = _vec;
        this.animeFlg = 0;
    }
    create() {
        strokeWeight(1)
        noFill();
        stroke('#ffffff');
        circle(this.vec.x, this.vec.y, 45);
        circle(this.vec.x, this.vec.y, 35);
        fill('#797979');
        noStroke();
        circle(this.vec.x, this.vec.y, 30);
    }
    press() {
        this.animeFlg++;
        if(this.animeFlg >= 1 && this.animeFlg < 4) {
            strokeWeight(1)
            noFill();
            stroke('#ffffff');
            circle(this.vec.x, this.vec.y, 48);
            circle(this.vec.x, this.vec.y, 36);
            fill('#ffec6a');
            noStroke();
            circle(this.vec.x, this.vec.y, 30);
        } else {
            this.create();
            this.animeFlg = 0;
        }
    }
}

class Notes {
    constructor(_vec, _value) {
        this.vec = _vec;
        this.value = _value;
        this.flg = false;
        this.quality;
    }
    scroll() {
        this.vec = this.vec.add(new Vec2(getMoveFrame(playMusic.bpm, playMusic.oneBarLength) * -1, 0));
    }
    create() {}
    judge() {}
    die() {}
}

class TapNotes extends Notes {
    constructor(_vec, _value) {
        super(_vec, _value);
    }
    create() {
        if(this.flg) {
            return;
        }
        fill('ffffff');
        circle(this.vec.x, this.vec.y, 40);
        fill('#f03c23');
        circle(this.vec.x, this.vec.y, 30);
    }
    judge() {
        if(this.flg) {
            return;
        }
        const judgeVec = judgmentFrame.vec.add(new Vec2(-0, 0)).sub(this.vec);
        this.quality = judgeVec.mag();
        if(this.quality < 30) {
            score.add(this.quality);
            this.flg = true;
        } else if(this.quality < 40) {
            score.fail();
            this.flg = true;
        }
    }
    die() {
        if(this.flg) {
            return;
        }
        score.fail();
        this.flg = true;
    }
}

class LongNotes extends Notes {
    constructor(_vec, _value) {
        super(_vec, _value);
    }
    create() {
        noStroke();
        fill('#f0b40a');
        for(let i = this.vec.add(new Vec2(playMusic.oneBarLength * (lengthRatio[this.value.toString(10)] / lengthRatio['1']), 0)).x - 60; i > this.vec.x; i--) {
            circle(i, this.vec.y, 40);
        }
        fill('#ffffff');
        circle(this.vec.x, this.vec.y, 40);
        fill('#f0b40a');
        circle(this.vec.x, this.vec.y, 30);
    }
    judge() {
        if(this.flg) {
            return;
        }
        const judgeVec = judgmentFrame.vec.sub(this.vec);
        this.quality = judgeVec.mag();
        if(judgeVec.x > 0 && judgeVec.x <= new Vec2(playMusic.oneBarLength * (lengthRatio[this.value.toString(10)] / lengthRatio['1']), 0).x - 60) {
            score.mash();
        }
    }
    die() {
        if(this.flg) {
            return;
        }
        const judgeVec = judgmentFrame.vec.sub(this.vec);
        if(judgeVec.x > new Vec2(playMusic.oneBarLength * (lengthRatio[this.value.toString(10)] / lengthRatio['1']), 0).x - 30) {
            score.mashingTime = 0;
            this.flg = true;
            console.log("a");
        }
    }
}

class Bar extends Notes {
    constructor(_vec) {
        super(_vec, 1);
    }
    create() {
        stroke('#f9f9f9');
        line(this.vec.x, notesLine.height, this.vec.x, 2 * notesLine.height);
    }
}

function loadMusicData(musicData, judgmentFrameVec) {
    const defaultVec = new Vec2(judgmentFrameVec.x + playMusic.oneBarLength + 10, judgmentFrameVec.y);
    let lastVec = defaultVec;
    for(let value of musicData) {
        if(value[2] === 0) {
            if(value[1] === 0) {
                playMusic.notesData.push(new TapNotes(lastVec, value[0]));
            } else {
                playMusic.notesData.push(new LongNotes(lastVec, value[0]));
            }
        }
        lastVec = lastVec.add(new Vec2(playMusic.oneBarLength * (lengthRatio[value[0].toString(10)] / lengthRatio['1']), 0));
    }
    const barNum = (lastVec.x - defaultVec.x) / playMusic.oneBarLength;
    for(let i = 0; i < barNum; i++) {
        playMusic.barData.push(new Bar(new Vec2(defaultVec.x + playMusic.oneBarLength * i, judgmentFrameVec.y)));
    }
}

function getMoveFrame(tempo, barLength) {
    let oneMeasureFrame = (60 / tempo) * 4 * 60;
    let movingPixcel = barLength / oneMeasureFrame;
    return movingPixcel;
}

function scanJudge() {
    judgmentFrame.animeFlg = 1;
    for(let notes of playMusic.notesData) {
        if(!notes.flg) {
            notes.judge();
            break;
        }
    }
}

function preload() {
    soundFormats('mp3', 'wav');
    sound = loadSound('assets/Typoghoti.mp3');
    pico = loadSound('assets/pico.mp3');
    title = loadImage('assets/title.png');
}

function setup() {
    createCanvas(800, 450);
    background(0);
    notesLine = new NotesLine(60, '#ffffff');
    score = new Score(new Vec2(0, notesLine.height));
    judgmentFrame = new JudgmentFrame(notesLine.judgmentFramePosition);
    textFont("'Press Start 2P', cursive");
    loadMusicData(playMusic.musicData, notesLine.judgmentFramePosition);
    frameRate(60);
    
}

function draw() {
    switch(playFlg) {
        case 0:
            showTitle();
            break;
        case 1:
            selectMusic();
            break;
        case 2:
            play();
            break;
        case 3:
            break;
    }
    
}

function showTitle() {
    background(0);
    image(title, 0, 0);
}

function selectMusic() {
    background(0);
    selectMenu.musics[0].create();
    if(!selectFlg) {
        setTimeout(() => {
            selectMenu.selectingMusic.isSelected = true;
            selectFlg = true;
        }, 50);
    }
}

function play() {
    background(0);
    notesLine.create();
    if(judgmentFrame.animeFlg > 0) {
        judgmentFrame.press();
    } else {
        judgmentFrame.create();
    }
    for(let bar of playMusic.barData) {
        bar.create();
        bar.scroll();
    }
    for(let notes of playMusic.notesData) {
        notes.create();
        notes.scroll();
        const deadlineVec = judgmentFrame.vec.add(new Vec2(-20, 0));
        /*if(judgmentFrame.vec.sub(notes.vec).x > 0 && !(notes.flg)) {
            //pico.play();
            notes.die();
        }*/
        if(deadlineVec.sub(notes.vec).x > 0) {
            notes.die();
        }
    }
    score.create();
    score.showScore();
    score.showQuality();
}

function keyPressed() {
    switch(playFlg) {
        case 0:
            showTitleKeyPressed();
            break;
        case 1:
            selectMusicKeyPressed();
            break;
        case 2:
            playKeyPressed();
            break;
        case 3:
            break;
    }
}

function showTitleKeyPressed() {
    pico.play();
    playFlg = 1;
}

function selectMusicKeyPressed() {
    pico.play();
    playFlg = 2;
    noLoop();
    setTimeout(() => {
        loop();
        sound.play();
        textFont("'Press Start 2P', cursive");
    }, 1000);
}

function playKeyPressed() {
    if(keyCode === 32) {
        scanJudge();
    } else if(keyCode === 70) {
        scanJudge();
    } else if(keyCode === 74) {
        scanJudge();
    } else if(keyCode === 83 && !sound.isPlaying()) {
        //loop();
        //sound.play();
        //console.log("Music start");
    }
    pressFlg = true;
}

function keyReleased() {
    pressFlg = false;
}