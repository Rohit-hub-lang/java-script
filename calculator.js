function operators(a, b, operator) {
     switch (operator) {
        case"+":
             return a + b;
            break;
            case"-":
             return a - b;
             break; 
             case"*":
             return a * b;
             break;
             case"/":
             return a / b;             
             break;
            case"%":
            return a % b;
           break;
            default:
             return "Invalid operator";

    }
}

    console.log(operators(10, 67, "*")); 

