function OrderFood (name , type , price , deliverTime){
    return{
        name,
        type ,
        price ,
        deliverTime ,
        rate : 0 ,
        comment: [] ,
        isReady : false ,
        order : function  isPremiumUser(user){
            if (user){
                console.log(0.8* price , myComment.rate)
            }
            else {
                console.log(price , myComment.rate)
            }
        }
    }
}
function Comment ( author , text ){
    return{
        author ,
        date : new Date() ,
        rate: 0 ,
        text
    }
}
const myFood = OrderFood('pizza' , 'fastfood' , 120000 , 30 )
const myComment =  Comment('Narjes' , 'very good')
const herComment = Comment('zahra' , 'not bad')
myComment.rate = 5
herComment.rate = 1
myFood.rate = ((myComment.rate+ herComment.rate)/2)
myFood.comment.push(myComment,herComment)
console.log(myFood)
myFood.order(true)
