import React, { useState } from "react";
import "./navbar.css";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

export default function NavigationBar({ getTerm, getRate }) {
    const [searchText, setSearchText] = useState("");
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };
    const ratingChanged = (newRating) => {
        getRate(newRating);
    };
    // console.log(searchText);
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home">Movies</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </Nav>
                <Form inline>
                    <ReactStars
                        className="stars"
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        color2={"#ffd700"}
                        half={false}
                    />
                    <FormControl
                        className="search-bar"
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        onChange={handleSearch}
                    />
                    <Button
                        variant="outline-info"
                        onClick={getTerm(searchText)}
                    >
                        Search
                    </Button>
                </Form>
            </Navbar>
        </div>
    );
}
