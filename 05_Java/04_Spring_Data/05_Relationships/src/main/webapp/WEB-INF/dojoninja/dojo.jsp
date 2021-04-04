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
	<div class="container">
            <div class="row mt-3">
                <h1><c:out value="${dojo.name }"/> Ninjas</h1>
            </div>
            <div class="row">
                <table class="table table-bordered table-striped col-6 mt-3">
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </thead>
                    <tbody>
                    	<c:forEach items="${dojo.ninjas}" var="ninja">
	                        <tr>
	                            <td><c:out value="${ninja.firstName }"></c:out></td>
	                            <td><c:out value="${ninja.lastName }"></c:out></td>
	                            <td><c:out value="${ninja.age }"></c:out></td>
	                        </tr>
                        </c:forEach>
                    </tbody>
                </table>
            </div>
        </div>
</body>
</html>