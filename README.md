#Task 2 :
# Java pogramming languge
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

# JavaScript programming languge
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

