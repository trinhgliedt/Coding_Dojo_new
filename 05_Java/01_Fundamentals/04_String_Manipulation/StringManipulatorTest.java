public class StringManipulatorTest {
    public static void main(String[] args){
        StringManipulation iD = new StringManipulation();
        System.out.println(iD.trimAndConcat("    Hello     ","     World    "));
        System.out.println(iD.getIndexOrNull("Coding", "o"));
        System.out.println(iD.getIndexOrNull("Hello World", "o"));
        System.out.println(iD.getIndexOrNull("Hi", "o"));
        System.out.println(iD.getIndexOrNull("Hello","llo"));
        System.out.println(iD.getIndexOrNull("Hello","world"));
        System.out.println(iD.concatSubstring("Hello", 1, 2, "world"));
    }
}