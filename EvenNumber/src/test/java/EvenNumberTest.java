import org.example.EvenNumber;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class EvenNumberTest {

    @Test
    void shouldReturnTrueIfTheNumberIsDivisibleByTwo(){
        EvenNumber evenNumber1 = new EvenNumber(2);
        EvenNumber evenNumber2 = new EvenNumber(4);
        EvenNumber evenNumber3 = new EvenNumber(6);
        EvenNumber evenNumber4 = new EvenNumber(8);

        Boolean even1 = evenNumber1.isEven();
        Boolean even2 = evenNumber2.isEven();
        Boolean even3 = evenNumber3.isEven();
        Boolean even4 = evenNumber4.isEven();

        assertTrue(even1);
        assertTrue(even2);
        assertTrue(even3);
        assertTrue(even4);
    }

    @ParameterizedTest
    @ValueSource(ints = {2,55,6,3,90,7})
    void shouldReturnTrueWhenNumberIsDivisibleByTwo( int number){
        EvenNumber evenNumber = new EvenNumber(number);

        boolean even = evenNumber.isEven();

        assertTrue(even);

    }
}
