package Calculator;

public class Calculator {

    private final int operand1;
    private final int operand2;

    public Calculator(int operand1, int operand2){
        this.operand1 = operand1;
        this.operand2 = operand2;
    }

    public int add() {
        return operand1 + operand2;
    }
}
