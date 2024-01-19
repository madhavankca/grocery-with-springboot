import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Timeout;

import java.util.concurrent.TimeUnit;

class TimeOutTest {
    @Test
    @DisplayName("Test for a slow process")
    @Timeout(3)
    void slowTest() throws InterruptedException{
        TimeUnit.SECONDS.sleep(5);
    }

    @Test
    @DisplayName("Test for a fast process")
    @Timeout(4)
    void fastTest() throws InterruptedException{
        TimeUnit.SECONDS.sleep(2);
    }
}



