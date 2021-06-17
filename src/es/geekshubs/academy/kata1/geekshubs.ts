const FIZZ = "Fizz";
const BUZZ = "Buzz";
const FIZZBUZZ = FIZZ + BUZZ;
const LN = "\n";

/**
 * Function generic mod
 * @param i 
 * @param op 
 * @returns 
 */
function mod(i : number, op : number) : boolean{
    return (i % op) == 0
}

/**
 * Function mod 3 & 5
 * @param i 
 * @returns 
 */
function mod_3_5(i: number) : boolean {
    return mod(i,3) && mod(i, 5);
}

/**
 * Input Method
 * @param input 
 * @returns 
 */
export function fizzBuzz(input : Number) : String {
   var res = "";

   for(var i = 1; i <= input; i++){
       if (mod_3_5(i))
        res += FIZZBUZZ + LN;
       else if( mod(i,3) )
        res += FIZZ + LN;
       else if( mod(i,5) )
        res += BUZZ + LN;
       else 
        res += i + LN;
   }

   return res;
};

