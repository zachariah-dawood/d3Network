import { Component, createElement } from "react";
import "./ui/DDDNetwork.css";
import { Graph } from "react-d3-graph";

//the data below is an example of how inputs for the data argument of the graph function should be structured  
const data = {
    nodes: [{ id: "Harr" }, { id: "Sally" }, { id: "Alice" }, { id: "Bob" },],
    links: [
      { source: "Harr", target: "Sally" },
      { source: "Harr", target: "Alice" },
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
      if(this.props.nodes.status === "available" &&
      this.props.links.status === "available"){
        var info = {};
        var nodesinfo = new Array();
        for(let i = 0; i < this.props.nodes.items.length; i++){
          let newObj = {};
          newObj.id = this.props.nodeName.get(this.props.nodes.items[i]).displayValue;
          nodesinfo.push(newObj);
        }
        info.nodes = nodesinfo;
        // the links get very upset if there's a typo. If you're getting a 
        // "you provided a [sic] invalid data structure" error, make sure that 
        // all your source and target ids match their node names 
        var linksinfo = new Array();
        for(let j = 0; j < this.props.links.items.length; j++){
          let newerObj = {};
          newerObj.source = this.props.linkSourceID.get(this.props.links.items[j]).displayValue;
          newerObj.target = this.props.linkTargetID.get(this.props.links.items[j]).displayValue;
          linksinfo.push(newerObj);
        }
        info.links = linksinfo;
        return <Graph
        id="graph-id"
        data={info}
        config={Config}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
      />;
      } else {
        return null;
      }
    }
}
