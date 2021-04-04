<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div class="col-4 mt-5 text-center">
	<h3 class="text-danger"><c:out value="${error}"></c:out></h3>
	<p class="text-danger">You must train harder!</p>
	<p>What is the code?</p>
	<form method="POST" action="/code">
		<input name="codeInput"/><br>
		<button class="btn btn-shadow btn-sm btn-info mt-2">Try Code</button>
	</form>
	</div>
</body>
</html>