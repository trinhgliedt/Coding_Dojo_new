//Create a StringManipulator class that implements the following methods:

// String trimAndConcat(String, String): Trim both input strings and then concatenate them. Return the new string. Feel free to use the trim method of the String class.
public class StringManipulation {
    public String trimAndConcat(String str1, String str2) {
        return str1.trim() + str2.trim();
    }
    //Integer getIndexOrNull(String, char): Get the index of the character and return either the index or null. If the character appears multiple times, return the first index. Feel free to use the indexOf method of the String class.
    public String getIndexOrNull(String myStr, char myChar){
        if (myStr.indexOf(myChar) == -1) {return null;}
        return Integer.toString(myStr.indexOf(myChar));
    }
    //Integer getIndexOrNull(String, String): Get the index of the start of the substring and return either the index or null. Feel free to use the indexOf method of the String class.
    public String getIndexOrNull(String str1, String str2){
        if (str1.indexOf(str2) == -1) {return null;}
        return Integer.toString(str1.indexOf(str2));
    }
    //String concatSubstring(String, int, int, String): Get a substring using a starting and ending index, and concatenate that with the second string input to our method. Feel free to use the substring method of the String class.
    public String concatSubstring(String str1, int begIndex, int endIndex, String str2){
        return str1.substring(begIndex, endIndex) + str2;
    }
}




//Then create a StringManipulatorTest to test all these methods.