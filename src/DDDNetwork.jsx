import { Component, createElement } from "react";
import "./ui/DDDNetwork.css";
import { Graph } from "react-d3-graph";

//the data and myConfig consts are hard-coded until I can access the data from the 
//entities. When that's accessible, this page will probably convert 
//the ListValue into the data format the graph class is expecting and then call it.  
const data = {
    nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }, { id: "Bob" },],
    links: [
      { source: "Harry", target: "Sally" },
      { source: "Harry", target: "Alice" },
      { source: "Alice", target: "Bob" }
    ],
  };

  var w = innerWidth;
  const Config = {
    directed: true,
    panAndZoom: true,
    width: w,
    collapsible: true,
    nodeHighlightBehavior: true,
    node: {
      color: "lightgreen",
      size: 120,
      highlightStrokeColor: "blue",
    },
    link: {
      highlightColor: "lightblue",
    },
    d3: {
      gravity: -100,
    }
  };
  
  const onClickNode = function(nodeId) {
    window.alert(`Clicked node ${nodeId}`);
  };
  
  const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };  

export class DDDNetwork extends Component {
    render() {
        return <Graph
        id="graph-id"
        data={data}
        config={Config}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
      />;
    }
}
