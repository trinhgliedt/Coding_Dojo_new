<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <%@ taglib prefix = "d" uri = "http://java.sun.com/jsp/jstl/core" %>
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
 
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<p>You have visited http://localhost:8080/server <d:out value="${count}"/> times</p>
	<a href="/server">Test another visit?</a>
	<a href="/server/reset" class="btn btn-info">Reset Counter</a>
</body>	
</html>