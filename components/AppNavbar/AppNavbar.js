import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    ButtonGroup,
} from "reactstrap";
import ProgressBar from "../ProgressBar/ProgressBar";

const AppNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">PathVisualizer</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {/* <label htmlFor="algo">Algorithm</label>
                <select
                    name=""
                    id=""
                    className="outline-none py-2 px-4 rounded-md"
                >
                    <option
                        value="dfs"
                        onClick={() => {
                            props.handleDijkstra();
                            props.handleVisualization();
                        }}
                    >
                        Dijkstra
                    </option>
                    <option value="bfs">BFS</option>
                </select> */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Algorithms
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem
                                    onClick={() => {
                                        props.handleDijkstra();
                                        props.handleVisualization();
                                    }}
                                >
                                    Dijkstra
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => {
                                        props.handleDFS();
                                        props.handleVisualization();
                                    }}
                                >
                                    DFS
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => {
                                        props.handleBFS();
                                        props.handleVisualization();
                                    }}
                                >
                                    BFS
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => {
                                        props.handleAstar();
                                        props.handleVisualization();
                                    }}
                                >
                                    A*
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Generate Maze
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem
                                    onClick={() => {
                                        props.handleMaze();
                                        props.handleVisualization();
                                    }}
                                >
                                    Recursive Division
                                </DropdownItem>
                                <DropdownItem onClick={props.handleRandomMaze}>
                                    Random Maze
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                <NavbarText>
                    <ProgressBar
                        visitedNodes={props.visitedNodes}
                        shortestNodes={props.shortestNodes}
                    />
                </NavbarText>
                <NavbarText className="clear-functions">
                    <ButtonGroup>
                        <Button onClick={props.handleClearPath}>
                            Clear Path
                        </Button>
                        <Button onClick={props.handleClearGrid}>
                            Clear Grid
                        </Button>
                    </ButtonGroup>
                </NavbarText>
            </Navbar>
        </div>
    );
};

export default AppNavbar;
