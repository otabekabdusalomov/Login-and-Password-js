"use strict";

const token = window.localStorage.getItem("token");

if (!token)  {
    window.location.replace("login.html");
  
}
