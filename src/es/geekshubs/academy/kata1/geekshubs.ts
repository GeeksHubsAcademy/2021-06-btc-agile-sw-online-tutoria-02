const FIZZ = "Fizz";
const BUZZ = "Buzz";
const FIZZBUZZ = FIZZ + BUZZ;
const LN = "\n"

/**
 * Function generic mod
 * @param input
 * @param op
 * @returns
 */

function mod(input: number, op: number): boolean {
   return (input % op === 0)
}

/**
 * Function 3 & 5
 * @param input
 * @returns
 */
function mod_3_5(input: number): boolean {
   return (mod(input, 3) && mod(input, 5))
}

/**
 * Input Method
 * @param input
 * @returns
 */
export function fizzBuzz(input : number) : String {
    let res = "";

    for (let i = 1; i <= input; i++) {
        if (mod_3_5(i))
            res += FIZZBUZZ + LN
        else if (mod(i,3))
            res += FIZZ + LN
        else if (mod(i,5))
            res += BUZZ + LN
        else
            res += i + LN;
    }

    return res;
};