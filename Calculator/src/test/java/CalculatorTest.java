import Calculator.Calculator;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.RepeatedTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {
        @DisplayName("Addition of two numbers 6 + 4 =10")
        @RepeatedTest(value = 5, name = "{displayName} - completed {currentRepetition} of {totalRepetitions}")
        void shouldReturnTenWhenSixAndFourAreAdded(){
            int operand1 = 6;
            int operand2 = 4;
            Calculator calculator = new Calculator(operand1, operand2);
            int expectedSum = 10;

            assertEquals(expectedSum, calculator.add());
        }
    }

