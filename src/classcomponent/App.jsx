import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            language: "hi",
            search: ""
        }
    }

    changelanguage = (data) => {
        this.setState({ language: data })
    }
    changesearch = (data) => {
        this.setState({ search: data })
    }
    render() {
        return (
            <BrowserRouter>
                <Navbar changelanguage={this.changelanguage} changesearch={this.changesearch} />
                <Routes>
                    <Route path="/" element={<Home search={this.state.search} language={this.state.language} q="All" />} />
                    <Route path="/All" element={<Home search={this.state.search} language={this.state.language} q="All" />} />
                    <Route path="/Politics" element={<Home search={this.state.search} language={this.state.language} q="Politics" />} />
                    <Route path="/Science" element={<Home search={this.state.search} language={this.state.language} q="Science" />} />
                    <Route path="/Technology" element={<Home search={this.state.search} language={this.state.language} q="Technology" />} />
                    <Route path="/Education" element={<Home search={this.state.search} language={this.state.language} q="Education" />} />
                    <Route path="/Crime" element={<Home search={this.state.search} language={this.state.language} q="Crime" />} />
                    <Route path="/Sport" element={<Home search={this.state.search} language={this.state.language} q="Sport" />} />
                    <Route path="/Cricket" element={<Home search={this.state.search} language={this.state.language} q="Cricket" />} />
                    <Route path="/Entertainment" element={<Home search={this.state.search} language={this.state.language} q="Entertainment" />} />
                    <Route path="/Jokes" element={<Home search={this.state.search} language={this.state.language} q="Jokes" />} />


                </Routes>
                <Footer />
            </BrowserRouter>
        )
    }
}