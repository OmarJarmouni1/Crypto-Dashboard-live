# Task 2 :
#Java pogramming languge
public class NumberPrinter {
    public static void main(String[] args) {
        for (int i = 1; i <= 100; i++) {
            if (i % 3 == 0) {
                System.out.print("Hello");
            }
            if (i % 5 == 0) {
                System.out.print("World");
            }
            if (i % 7 == 0) {
                System.out.print("Yoo");
            }
            if (i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
                System.out.print(i);
            }
            System.out.print(", ");
        }
    }
}

#JavaScript programming languge
for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) {
        output += 'Hello';
    }
    if (i % 5 === 0) {
        output += 'World';
    }
    if (i % 7 === 0) {
        output += 'Yoo';
    }
    if (output === '') {
        output = i;
    }
    console.log(output);
}


# Task3 :

step1: Start by driving a green car in one direction at a steady speed for a specific period of time or distance. Keep track of how long gone.

step2: Then, it's time to turn back! After driving for a certain time or distance, turn around and drive in the opposite direction for the same amount of time or distance as in step 1.

step3: Keep repeating this process of driving a set distance in one direction, then turning back and driving the same distance in the opposite direction. Keep going until the spot  red car!
