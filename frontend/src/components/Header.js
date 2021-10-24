import React from 'react'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Tution Management System</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/student">Student <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="/teacher">Teacher</a>
                    <a class="nav-item nav-link" href="#">Courses</a>
                    <a class="nav-item nav-link" href="/">Employees</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
