package org.example;

public class EvenNumber {
    private final int number;
    public EvenNumber(int number){
        this.number = number;
    }

    public Boolean isEven() {
        return number % 2 == 0;
    }
}
