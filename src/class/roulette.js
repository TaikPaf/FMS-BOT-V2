module.exports =  {
    red : [32,19,21,25,34,27,36,30,23,5,16,1,14,9,18,7,12,3],
    black : [15,4,2,17,6,13,11,8,10,24,33,20,31,22,29,28,35,26],

    getRandomNumber(){
        return Math.floor(Math.random() * (36 - 0 + 1) + 0)
    }
}