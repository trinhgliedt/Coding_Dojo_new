
public class BasicsTest {
    public static void main(String[] args){
        Basics a = new Basics();
        a.print1to255();
        a.printOdd1to255();
        a.printSum();
        
        Integer[] array = {1,3,5,7,9,13};
        a.iterateThruArray(array);

        int[] array2 = {-10, -4, 0};
        int[] array3 = {1,3,5,7,9,13};
        a.findMax(array2);
        a.findMax(array3);

        a.getAvg(array2);
        a.getAvg(array3);

        a.oddArr();
        System.out.println(a.greaterThanY(array3,6));
        int[] array4 = {2, 3};
        System.out.println(a.squareValue(array4));
        int[] array5 = {-10, -4, 6, -1, 5, 3};
        System.out.println(a.noNegative(array2));
        System.out.println(a.noNegative(array5));

        System.out.println(a.maxMinAvg(array4));
        System.out.println(a.maxMinAvg(array5));

        System.out.println(a.shiftingArr(array5));

    }
}