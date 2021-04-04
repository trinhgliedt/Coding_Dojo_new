import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Random;
public class PuzzleJava {
//  Create an array with the following values: 3,5,1,2,7,9,8,13,25,32. Print the sum of all numbers in the array. Also have the function return an array that only includes numbers that are greater than 10 (e.g. when you pass the array above, it should return an array with the values of 13,25,32)
    public Integer[] puzzle1(){
        int[] input = { 3, 5, 1, 2, 7, 9, 8, 13, 25, 32 };
        int sum = 0;
        ArrayList<Integer> result = new ArrayList<Integer>();
        for (int value : input){
            sum += value;
            if (value > 10){result.add(value);}
        }
        System.out.println("Sum: " + sum);
        return result.toArray(new Integer[result.size()]);
    }
        // Create an array with the following values: Nancy, Jinichi, Fujibayashi, Momochi, Ishikawa. Shuffle the array and print the name of each person. Have the method also return an array with names that are longer than 5 characters.
        public String[] puzzle2(){
            ArrayList<String> input = new ArrayList<String>();
            input.add("Nancy");
            input.add("Jinichi");
            input.add("Fujibayashi");
            input.add("Momochi");
            input.add("Ishikawa");
            Collections.shuffle(input);
            ArrayList<String> result = new ArrayList<String>();
            for (String value : input){
                System.out.println(value);
                if (value.length() > 5){result.add(value);}
            }
            return result.toArray(new String[result.size()]);
        }
    
        
        // Create an array that contains all 26 letters of the alphabet (this array must have 26 values). Shuffle the array and, after shuffling, display the last letter from the array. Have it also display the first letter of the array. If the first letter in the array is a vowel, have it display a message.
        // To shuffle a collection, you can use the shuffle method of the Collections class. Collections Class documentation
        public void puzzle3(){
            ArrayList<Character> alphabet = new ArrayList<Character>();
                for(int i = 0; i < 26; i++){
                    alphabet.add((char)(97+i));
                }
            Collections.shuffle(alphabet);
            System.out.println("Last letter: " + alphabet.get(alphabet.size()-1) + ", First letter: " + alphabet.get(0));
            ArrayList<Character> vowels = new ArrayList<Character>();
                vowels.add('a');
                vowels.add('e');
                vowels.add('i');
                vowels.add('o');
                vowels.add('u');
        if (vowels.contains(alphabet.get(0))){
            System.out.println("First character of this alphabet is a vowel");
        }
    }   
    //  Generate and return an array with 10 random numbers between 55-100.
    // To get a random integer, you can use the nextInt method of the Random class. 
            public int[] puzzle4(){
                int[] result = new int[10];
                Random r = new Random();
                for (int i=0; i<10; i++){
                    result[i] = r.nextInt(45) + 55;
                }
                return result;
            }
            //  Generate and return an array with 10 random numbers between 55-100 and have it be sorted (showing the smallest number in the beginning). Display all the numbers in the array. Next, display the minimum value in the array as well as the maximum value.
            // To sort a collection, you can use the sort method of the Collections class.
            public Integer[] puzzle5(){
                int[] arr = new int[10];
                ArrayList<Integer> output = new ArrayList<Integer>();
                Random r = new Random();
                for (int i=0; i<10; i++){
                    arr[i] = r.nextInt(45) + 55;
                    output.add(arr[i]);
                }
                int max = arr[0];
                int min = arr[0];
                for (int i=0; i<10; i++){
                    if (max < arr[i]){ max = arr[i];}
                    if (min > arr[i]){ min = arr[i];}
                }
                Collections.sort(output);
                System.out.println("Max: " + max + ", min: " + min);
                return output.toArray(new Integer[output.size()]);
            }

            //  Create a random string that is 5 characters long.
            public String randomStr(){
                ArrayList<Character> alphabet = new ArrayList<Character>();
                for(int i = 0; i < 26; i++){
                    alphabet.add((char)(97+i));
                }
                Random r = new Random();
                String result = (String.valueOf(alphabet.get(r.nextInt(26))) + String.valueOf(alphabet.get(r.nextInt(26))) + String.valueOf(alphabet.get(r.nextInt(26))) + String.valueOf(alphabet.get(r.nextInt(26))) + String.valueOf(alphabet.get(r.nextInt(26))));
                return result;

                // Random rand = new Random();
                // char[] output = {'1', '1', '1', '1', '1'};
                // for(int i = 0; i < 5; i++){
                //     output[i] = (char) (rand.nextInt(26)+97);
                // }
                // return new String(output);
            }

            // Generate an array with 10 random strings that are each 5 characters long
            public String[] randomArr(){
                ArrayList<String> result = new ArrayList<String>();
                for(int i =0; i <10; i++){
                    result.add(randomStr());
                }
                return result.toArray(new String[result.size()]);
            }


}