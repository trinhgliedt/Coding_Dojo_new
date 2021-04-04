import java.util.ArrayList;
import java.util.Arrays;

public class PuzzleJavaTest {
    public static void main(String[] args){
        PuzzleJava a = new PuzzleJava();

        System.out.println(Arrays.toString(a.puzzle1()));
        System.out.println(Arrays.toString(a.puzzle2()));
        a.puzzle3();
        System.out.println(Arrays.toString(a.puzzle4()));
        System.out.println(Arrays.toString(a.puzzle5()));
        System.out.println(a.randomStr());
        System.out.println(Arrays.toString(a.randomArr()));


    }
}