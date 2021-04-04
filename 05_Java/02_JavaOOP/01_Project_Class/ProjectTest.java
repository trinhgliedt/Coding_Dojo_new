public class ProjectTest{
    public static void main(String[] args){
        Project a = new Project();
        Project b = new Project("Project 2");
        Project c = new Project("Project 3", "Project 3 description");
        Project d = new Project("Project 4", "Project 4 description");

        // System.out.println(a.getName());
        // System.out.println(a.getDesc());
        // System.out.println(b.getName());
        // System.out.println(b.getDesc());
        // System.out.println(c.getName());
        // System.out.println(c.getDesc());
        a.setName("Project 11");
        a.setDesc("Project 11 desc");
        a.setInitialCost(4500);
        b.setInitialCost(3000);
        c.setInitialCost(5000);
        d.setInitialCost(2000);
        System.out.println(a.getName());
        System.out.println(a.getDesc());
        System.out.println(a.getInitialCost());
        System.out.println(a.elevatorPitch());

        Portfolio p1 = new Portfolio();
        p1.addProject(a);
        p1.addProject(b);
        p1.addProject(c);
        p1.addProject(d);
        // p1.showPortfolio();
        p1.removeProject(d);
        p1.showPortfolio();

        

    }
}