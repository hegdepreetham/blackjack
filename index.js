
    let hasblackjack=false
    let isAlive=false
    let message=""
    let cards=[]    
    let sum=0
    let mess= document.querySelector("#message")
    let card= document.querySelector("#card")
    let sumh=document.querySelector("#sum")
    let coin=document.getElementById("coin")
    let playername="Aditya"
    let coins= 200;
    coin.textContent= playername + "; chips : $"+coins;
        
        function start(){
                if(coins<30){
                    document.getElementById("won").textContent="You don't have enough amount to start the game"
                }
                else if (isAlive==false && hasblackjack==false ){
                    isAlive=true
                    let firstCard=getRandom()
                    let secondCard=getRandom()
                    cards=[firstCard,secondCard]
                    sum=firstCard+secondCard
                    coins-=30;
                    render()
                }
            }
   
        function render() {
                card.textContent="Cards: "    
                for(let i=0;i<cards.length;i++){
                        card.textContent+= cards[i]+" "
                    }
                sumh.textContent="Sum is : "+sum
                coin.textContent= playername + "; chips : "+coins;
                if(sum<21){
                    message="Want a new card?"
                }
                else if(sum===21){
                message="Wohoo you got blackjack!!";
                    hasblackjack=true
                    document.getElementById("won").textContent="You have won 1000$!!"
                }
                else{
                    message=" You are out of the game";
                    isAlive=false
                }
                mess.textContent=message
        }

    function newCard(){
            if(coins<20){
                document.getElementById("won").textContent="You don't have enough amount to draw new card"
            }
             else if (isAlive==true && hasblackjack==false && coins>=20){
                let  ncard=getRandom()
                cards.push(ncard)
                sum+=ncard;
                coins-=20
                render()
                console.log(cards);
            }
        }

    function getRandom(){
            let random=Math.floor((Math.random() * 13) + 1);
            if(random>10){
                return 10;
            }
            else if(random===1){
                return 11;
            }
            else
            return random;
            }