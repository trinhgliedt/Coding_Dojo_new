import java.util.Set;
import java.util.HashMap;
public class MapOfTheHashmatique {
    public static void main(String[] args) {
        // Create a trackList of type HashMap
        HashMap<String, String> userMap = new HashMap<String, String>();
        //Add in at least 4 songs that are stored by title
        userMap.put("Shake It Off", "I stay out too late, got nothin' in my brain");
        userMap.put("Sparks Fly", "The way you move is like a full-on rainstorm. And I'm a house of cards. You're the kind of reckless. That should send me runnin'");
        userMap.put("Innocent", "I guess you really did it this time. Left yourself in your warpath. Lost your balance on a tightrope. Lost your mind tryin' to get it back");
        userMap.put("We Are Never Ever Getting Back Together", "I remember when we broke up the first time");
        //Pull out one of the songs by its track title
        String name = userMap.get("Innocent");
        System.out.println(name);

        //Print out all the track names and lyrics in the format Track: Lyrics
        // get the keys by using the keySet method
        Set<String> keys = userMap.keySet();
        for(String key : keys) {
            System.out.println(key + ": " + userMap.get(key));
            // System.out.println(userMap.get(key));    
        }
    }
}