package com.tgliedt.controllerandview.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.tgliedt.controllerandview.models.City;


public interface CountryRepository extends CrudRepository<City, Long> {
	// 1.) What query would you run to get all the countries that speak Slovene?
		// Your query should return the name of the country, language, and language percentage. 
		// Your query should arrange the result by language percentage in descending order.
//	SELECT name FROM Countries JOIN languages WHERE language = 'Slovene' Order By name desc
		@Query("SELECT c.name, l.language, l.percentage FROM Country c JOIN c.languages l WHERE l.language = 'Slovene' Order By c.name desc")
		List<Object[]> findSlovene();
		
		
		
		// 2.) What query would you run to display the total number of cities for each country? 
		// Your query should return the name of the country and the total number of cities. 
		// Your query should arrange the result by the number of cities in descending order.
		
		//select country.name, count(*) as num_of_cities from country
		//left join city on country.code = city.countrycode
		//group by country.name
		//order by count desc;
		@Query("Select c.name, count(ct) as num_of_cities FROM Country c Join c.cities ct GROUP BY c.name ORDER BY ct desc")
		List<Object[]> countCities();
		
		
		
		// 3.) What query would you run to get all the cities in Mexico with a population of 
		// greater than 500,000? Your query should arrange the result by population in descending order.
		
		//select city.name, city.population
		//from country 
		//left join city on country.code = city.CountryCode
		//where city.population > 500000 and country.code = "MEX"
		//order by city.population desc;
		@Query("SELECT ct.name, ct.population FROM Country c JOIN c.cities ct WHERE ct.population > 500000 and c.code = 'MEX' ORDER BY ct.population desc")
		List<Object[]> mexCities();
		

		
		// 4.) What query would you run to get all languages in each country with a percentage greater than 89%? 
		// Your query should arrange the result by percentage in descending order.
		
		//select country.name, cl.Language, cl.Percentage
		//from country
		//left join countrylanguage as cl on country.code = cl.CountryCode
		//where cl.Percentage >= 89.0
		//order by cl.Percentage desc, country.name asc;
		@Query("SELECT c.name, l.language, l.percentage FROM Country c JOIN c.languages l WHERE l.percentage >= 89.0 ORDER BY l.percentage desc, c.name asc")
		List<Object[]> langPerct();
		
		
		
		// 5.) What query would you run to get all the countries with Surface Area below 501 and Population greater than 100,000?
		
		//select country.name, country.SurfaceArea as surface_area, country.population
		//from country
		//where country.SurfaceArea < 501 and country.population > 100000
		//order by country.name asc;
		@Query("SELECT c.name, c.surface_area, c.population FROM Country c WHERE c.surface_area < 501  and c.population > 100000 ORDER BY c.name asc")
		List<Object[]> surfArea();
		

		
		// 6.) What query would you run to get countries with only Constitutional Monarchy with a surface area of more than 200 and a life expectancy greater than 75 years?
		
		//select country.name, country.GovernmentForm as Government, country.Capital, country.LifeExpectancy as Life_Exp
		//from country
		//where country.GovernmentForm = "Constitutional Monarchy" and country.capital > 200 and country.LifeExpectancy >= 75.0
		//order by country.name asc;
		@Query("SELECT c.name, c.government_form, c.capital, c.life_expectancy FROM Country c WHERE c.government_form = 'Constitutional Monarchy' and c.capital > 200 and c.life_expectancy >=75.0 ORDER BY c.name asc")
		List<Object[]> constMon();
		
		
		
		// 7.) What query would you run to get all the cities of Argentina inside the Buenos Aires 
		// district and have the population greater than 500, 000? The query should return the 
		// Country Name, City Name, District, and Population.
		
		//select country.name, city.name, city.District, city.Population
		//from country
		//left join city on country.code = city.CountryCode
		//where country.code = "ARG" and city.District = "Buenos Aires" and city.population >= 500000
		//order by city.name asc; 
		@Query("SELECT c.name, ct.name, ct.district, ct.population FROM Country c JOIN c.cities ct WHERE c.code='ARG' and ct.district='Buenos Aires' and c.population > 500000 ORDER BY ct.name asc")
		List<Object[]> argCity();
		
		
		
		
		// 8.) What query would you run to summarize the number of countries in each region? 
		// The query should display the name of the region and the number of countries. 
		// Also, the query should arrange the result by the number of countries in descending order.
		
		//select region, count(*) as Countries
		//from country
		//group by region
		//order by countries desc;
		@Query("SELECT c.region, count(c) as countries FROM Country c GROUP BY c.region ORDER BY countries desc")
		List<Object[]> region();
}
