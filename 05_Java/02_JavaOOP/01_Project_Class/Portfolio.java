import java.text.NumberFormat;
import java.util.ArrayList;
public class Portfolio{
    ArrayList<Project> projects;
    public Portfolio() {
        projects = new ArrayList<Project>();
    }

    public void addProject(Project project){
        projects.add(project);
    }
    public void removeProject(Project project){
        projects.remove(project);
    }

    public ArrayList<Project> getProject(int index){
        return projects.get(index);
    }

    public double getPortfolioCost(){
        double cost = 0;
        for (Project project : projects){
            cost += project.getInitialCost();
        }
        return cost;
    }
    NumberFormat formatter = NumberFormat.getCurrencyInstance();
    public void showPortfolio(){
        for (Project project : projects){
            System.out.println(project.elevatorPitch());
        }
        System.out.println("Total portfolio cost: " + formatter.format(getPortfolioCost())); 
    }
}