var sandwich_calculator = function(bread){
    if(bread % 2 == 0 ){
        return bread / 2;
    }
    else{
        return "bread is not enough to make sandwitch";
    }
    }
    console.log("Amount of breads: 10 and sandwitch becomes: ", sandwich_calculator(10));
    function sandwich_calculator(bread, cheese){
        if(bread % 2 == 0 && cheese > 1 ){
            return bread / 2;
        }
        else if(bread % 2 == 0 && cheese == 1){
            return 1;
        }
        else{
            return "bread is not enough to make sandwitch";
        }
    }
    console.log("Amount of breads: 10 with Cheese: 1 , sandwich becomes: ", sandwich_calculator(10,1));