1.) List the symbols for each of the below Javascript operators
    Arithmetic Operators: +, -, *, %, **, ++, _ _, /
    Assignment Operators: =, +=, *=, /=, %=
    Comparison Operators: <, >, <=, >=, ==, ===, !==
    Logical Operators: !, ||, &&
    Bitwise Operators: |, &, 

2.) Arithmetic Operators: (a) Addition operator
                            console.log(x + y)
                          (b) Subtraction
                            console.log(x - y)

    Assignment Operators: (a) equal sign
                            let x = 10;
                            (b)"*=" Adds the value on the right-hand side to the variable on the left-hand side.
                            let x = 5;
                            x *= 3;    // Equivalent to x = x * 3
                            console.log(x);    // Output: 15
    Comparison Operators: greaterthan sign
                            (a) let x = 1;
                                console.log(x > 0)// this compares the value of x to zero and returs true as an output.
                            (b) lessthan sign
                                let x = 1;
                                console.log(x < 0)// this compares the value of x to zero and returs false as an output.
    Logical Operators: (a) OR
                        let highIncome = true;
                        let goodCreditScore = true;
                        let eligibleForLoan = highIncome || goodCreditScore;
                        console.log(eligibleForLoan) // true
                        
                        (b) NOT 
                        let applicationRefused = !eligibleForLoan; 
                        console.log(applicationRefused);

    Bitwise Operators: (a) AND
                        const a = 5;  // binary: 101
                        const b = 3;  // binary: 011
                        console.log(a & b)
                        (b) OR
                        const a = 5;  // binary: 101
                        const b = 3;  // binary: 011
                        console.log(a | b)

4.) What is the result when the following program is executed?
    for(let i = 2; i < 20; i=i**2){
    console.log(i)
    }
   //Result of the above code
    1
    8
    15