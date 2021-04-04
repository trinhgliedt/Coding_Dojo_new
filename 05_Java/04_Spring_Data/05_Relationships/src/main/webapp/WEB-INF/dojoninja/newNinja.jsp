<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
        
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<title>Insert title here</title>
</head>
<body>
	<div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="row my-2">
                        <h1>New Ninja</h1>
                    </div>
                    <form:form action="/ninjas/new" method="post" modelAttribute="ninja">
	                    <div class="row my-2">
	                        <div class="col-6">Dojo</div>
	                        <form:select path="dojo" name="dojo" id="dojo">
	                        	<c:forEach items="${dojos}" var="dojo">
	                        		<option value="${dojo.id}"><c:out value="${dojo.name}"></c:out></option>
	                        	</c:forEach>
	                        </form:select>
	                    </div>
	                    <div class="row my-2">
	                        <div class="col-6">First Name</div>
	                        <form:input path="firstName" type="text" class="col-6"/>
	                    </div>
	                    <div class="row my-2">
	                        <div class="col-6">Last Name</div>
	                        <form:input path="lastName" type="text" class="col-6"/>
	                    </div>
	                    <div class="row my-2">
	                        <div class="col-6">Age</div>
	                        <form:input path="age" type="number" min="1" max="99" class="col-6"/>
	                    </div>
	                    <div class="row my-2">
	                        <div class="col-3">
	                            <button type="submit" class="btn btn-primary">Create</button>
	                        </div>
	                    </div>
	                    <div class="row my-2">
	                        <div class="col-3">
	                            <form:errors path="*"></form:errors>
	                        </div>
	                    </div>
                    </form:form>
                </div>
            </div>
        </div>
</body>
</html>