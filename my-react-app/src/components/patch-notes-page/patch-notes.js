import React from "react";
import "./patch-notes.css";

function PatchNotes() {
  return (
    <div className="patch-notes">
      <p className="title">Patch Notes - PRE ALPHA</p>
      <p className="sub-title">v0.1.0</p>
      <ul>
      <li className="text">New character: Bean!</li>
        <li className="text">New Parkour</li>
        <li className="text">New Player Movement</li>
      </ul>

      <p className="sub-title">v0.1.1</p>
      <ul>
      <li className="text">Fixed parkour</li>
        <li className="text">Camera Movement</li>
        <li className="text">Rework Player Movement</li>
      </ul>
    </div>

    
  );
}

export default PatchNotes;
