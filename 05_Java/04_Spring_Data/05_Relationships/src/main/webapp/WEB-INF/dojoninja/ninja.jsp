<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
        
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<title>Insert title here</title>
</head>
<body>
	<div id="ninjas">
		    <h1>Ninjas</h1>
		    <c:forEach begin="1" end="${totalPages}" var="index">
		        <a href="/pages/${index}">${index}</a>
		    </c:forEach>
		    <table class="table">
		        <thead>
		        	<th>Dojo</th>
		            <th>First Name</th>
		            <th>Last Name</th>
		        </thead>
		        <tbody>
		            <c:forEach var="object" items="${objects.content}">                 
		            <tr>
		            	<td><c:out value="${object[1].name}"/></td>
		                <td><c:out value="${object[0].firstName}"></c:out></td>
		                <td><c:out value="${object[0].lastName}"></c:out></td>
		            </tr>
		            </c:forEach>
		        </tbody>
		    </table>
		</div>
</body>
</html>