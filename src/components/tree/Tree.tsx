import React from "react";

export interface TreeProps {
  autoPlace?: boolean;
  arrow?: boolean;
  data: any[];
  dragable?: boolean;
  width?: number;
  height?: number;
  nodeClass?: string;
  orientation?: "vertical" | "horizontal";
  align?: "start" | "center";
  marginTop?: number;
  marginLeft?: number;
  showScale?: boolean;
  readonly?: boolean;
  selectIds?: Array<string>;
  collapsable?: boolean;
  selectable?: boolean;
}

const Tree: React.FC<TreeProps> = (props) => {

  console.log(props);

  return (
    <div>Auto Tree</div>
  )

};

export default Tree;