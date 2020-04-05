class DivisibleByFive
{
    value:number;
    constructor(value:number)
    {
        this.value=value;
    }
    divisibleFive()
    {
    if((this.value%5)==0)
       {
        console.log("The number "+this.value+" divisible by 5" );
        window.document.body.textContent +=`${this.value} "Is Divisible by 5"`;
        }
    else{
        console.log("The number "+this.value+ "is not divisible by 5");
        window.document.body.textContent +=`${this.value} "Is not Divisible by 5 "`;

        }

    }
}

var divisible=new DivisibleByFive(20);
divisible.divisibleFive();


