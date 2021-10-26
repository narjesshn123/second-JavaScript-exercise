///////////Constructor function ///////////
function Food (name , type , price , deliverTime  ){
    this.name = name ;
    this.type = type;
    this.price = price ;
    this.deliverTime = deliverTime ;
    this.rate = 0 ;
    this.comment = [] ;
    this.isReady = false ;
    this.order = function isPremiumUser(user) {
        if (user) {
            console.log(0.8 * price , myComment.rate )
        }
        else
            console.log(price , myComment.rate)
    }
}
function Comment ( author , text){
    this.author = author ;
    this.date = new Date()
    this.rate = 0 ;
    this.text =text ;
}
const myFood = new Food('pizza' , 'fastfood' , 120000 , 30 )
const myComment = new Comment('Narjes' , 'very good')
const herComment = new Comment('zahra' , 'not bad')
myComment.rate = (5)
herComment.rate = (1)
myFood.rate = ((myComment.rate+ herComment.rate)/2)
myFood.comment.push(myComment)
console.log(myFood)
myFood.order(true)



