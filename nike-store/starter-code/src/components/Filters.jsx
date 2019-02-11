import React, { Component } from "react";

import "./Filters.css";

export default class Filters extends Component {
  render() {
    const { fn } = this.props;
    return (

      <aside className="Section">
        <h3 className="Section-Title">Filters</h3>
        <div className="Block" id="ckeckprices">
          <h4 className="Block-Title">Shop By Price</h4>
          <label className="Block-Option">
            <input type="checkbox" value="0" onClick={(e) => { fn(e, 'price',  'cheap', 'ckeckprices') }} /> Under $50
          </label>
          <label className="Block-Option">
            <input type="checkbox" value="1" onClick={(e) => {  fn(e, 'price',  'regular', 'ckeckprices') }} /> $50 to $150
          </label>
          <label className="Block-Option">
            <input type="checkbox" value="2" onClick={(e) => {  fn(e, 'price',  'expensive', 'ckeckprices') }} /> Up to $150
          </label>
        </div>

        <div className="Block" id="ckecksport">
          <h4 className="Block-Title">Sport</h4>
          <label className="Block-Option">
            <input type="checkbox"   value="0" onClick={(e) => { fn(e, 'sport',  'lifestyle', 'ckecksport')}} /> Lifestyle
          </label>
          <label className="Block-Option">
            <input type="checkbox" value="1" onClick={(e) => { fn(e, 'sport',  'running', 'ckecksport') }} /> Running
          </label>

          <label className="Block-Option">
            <input type="checkbox" value="2"  onClick={(e) => { fn(e, 'sport',  'basketball', 'ckecksport') }} /> Basketball
          </label>

          <label className="Block-Option">
            <input type="checkbox"  value="3" onClick={(e) => { fn(e, 'sport',  'soccer', 'ckecksport') }} /> Soccer
          </label>

          <label className="Block-Option">
            <input type="checkbox"  value="4"  onClick={(e) => { fn(e, 'sport',  'training', 'ckecksport') }} /> Training & Gym
          </label>
        </div>

        <div className="Block" id="checksType">
          <h4 className="Block-Title">Closure Type</h4>
          <label className="Block-Option">
            <input type="checkbox" value="0" onClick={(e) => { fn(e, 'type',  'click', 'checksType')}} /> Click
          </label>

          <label className="Block-Option">
            <input type="checkbox" value="1" onClick={(e) => { fn(e, 'type',  'slipon', 'checksType')}}  /> Slip
          </label>

          <label className="Block-Option">
            <input type="checkbox" value="2" onClick={(e) => { fn(e, 'type',  'strap', 'checksType')}} /> On Strap
          </label>
        </div>

        <div className="Block" id="buttonsColor">
          <h4 className="Block-Title">Color</h4>
          <button className="Block-Color" data-color="white"  value="0"  onClick={(e) => { fn(e, 'color',  'white', 'buttonsColor')}} ></button>
          <button className="Block-Color" data-color="silver" value="1" onClick={(e) => { fn(e, 'color',  'silver', 'buttonsColor')}} ></button>
          <button className="Block-Color" data-color="yellow" value="2" onClick={(e) => { fn(e, 'color',  'yellow', 'buttonsColor')}}></button>
          <button className="Block-Color" data-color="gold" value="3" onClick={(e) => { fn(e, 'color',  'gold', 'buttonsColor')}}></button>
          <button className="Block-Color" data-color="orange" value="4" onClick={(e) => { fn(e, 'color',  'orange', 'buttonsColor')}}></button>
          <button className="Block-Color" data-color="green" value="5" onClick={(e) => { fn(e, 'color',  'green', 'buttonsColor')}}></button>
          <button className="Block-Color" data-color="blue" value="6" onClick={(e) => { fn(e, 'color',  'blue', 'buttonsColor')}}></button>
          <button className="Block-Color" data-color="pink" value="7" onClick={(e) => { fn(e, 'color',  'pink', 'buttonsColor')}}></button>
          <button className="Block-Color" data-color="olive" value="8" onClick={(e) => { fn(e, 'color',  'olive', 'buttonsColor')}}></button>
          <button className="Block-Color" data-color="red" value="9" onClick={(e) => { fn(e, 'color',  'red', 'buttonsColor')}}></button>
          <button className="Block-Color" data-color="purple" value="10" onClick={(e) => { fn(e, 'color',  'purple', 'buttonsColor')}}></button>
          <button className="Block-Color" data-color="grey" value="11" onClick={(e) => { fn(e, 'color',  'grey', 'buttonsColor')}}></button>
        </div>

        <div className="Block" >
          <h4 className="Block-Title">Size</h4>
          <div style={{ display: "flex", flexWrap: "wrap" }} id="buttonsSize" >
            <button className="Block-Size" value="0" onClick={(e) => { fn(e, 'size',  '3', 'buttonsSize')}}>3</button>
            <button className="Block-Size" value="1" onClick={(e) => { fn(e, 'size',  '3.5', 'buttonsSize')}}>3.5</button>
            <button className="Block-Size" value="2" onClick={(e) => { fn(e, 'size',  '4', 'buttonsSize')}}>4</button>
            <button className="Block-Size" value="3" onClick={(e) => { fn(e, 'size',  '4.5', 'buttonsSize')}}>4.5</button>
            <button className="Block-Size" value="4" onClick={(e) => { fn(e, 'size',  '5', 'buttonsSize')}}>5</button>
            <button className="Block-Size" value="5" onClick={(e) => { fn(e, 'size',  '5.5', 'buttonsSize')}}>5.5</button>
            <button className="Block-Size" value="6" onClick={(e) => { fn(e, 'size',  '6', 'buttonsSize')}} >6</button>
            <button className="Block-Size" value="7" onClick={(e) => { fn(e, 'size',  '6.5', 'buttonsSize')}}>6.5</button>
            <button className="Block-Size" value="8" onClick={(e) => { fn(e, 'size',  '7', 'buttonsSize')}} >7</button>
            <button className="Block-Size" value="9" onClick={(e) => { fn(e, 'size',  '7.5', 'buttonsSize')}} >7.5</button>
            <button className="Block-Size" value="10" onClick={(e) => { fn(e, 'size',  '8', 'buttonsSize')}}>8</button>
            <button className="Block-Size " value="11" onClick={(e) => { fn(e, 'size',  '8.5', 'buttonsSize')}}>8.5</button>
            <button className="Block-Size" value="12" onClick={(e) => { fn(e, 'size',  '9', 'buttonsSize')}}>9</button>
            <button className="Block-Size" value="13" onClick={(e) => { fn(e, 'size',  '9.5', 'buttonsSize')}}>9.5</button>
            <button className="Block-Size" value="14" onClick={(e) => { fn(e, 'size',  '10', 'buttonsSize')}}>10</button>
            <button className="Block-Size" value="15" onClick={(e) => { fn(e, 'size',  '10.5', 'buttonsSize')}}>10.5</button>
            <button className="Block-Size" value="16" onClick={(e) => { fn(e, 'size',  '11', 'buttonsSize')}}>11</button>
            <button className="Block-Size" value="17" onClick={(e) => { fn(e, 'size',  '11.5', 'buttonsSize')}}>11.5</button>
            <button className="Block-Size" value="18" onClick={(e) => { fn(e, 'size',  '12', 'buttonsSize')}}>12</button>
            <button className="Block-Size" value="19" onClick={(e) => { fn(e, 'size',  '12.5', 'buttonsSize')}}>12.5</button>
            <button className="Block-Size" value="20" onClick={(e) => { fn(e, 'size',  '13', 'buttonsSize')}}>13</button>
            <button className="Block-Size" value="21" onClick={(e) => { fn(e, 'size',  '13.5', 'buttonsSize')}}>13.5</button>
            <button className="Block-Size" value="22" onClick={(e) => { fn(e, 'size',  '14', 'buttonsSize')}}>14</button>
            <button className="Block-Size" value="23" onClick={(e) => { fn(e, 'size',  '14.5', 'buttonsSize')}}>14.5</button>
            <button className="Block-Size" value="24" onClick={(e) => { fn(e, 'size',  '15', 'buttonsSize')}}>15</button>
            <button className="Block-Size" value="25" onClick={(e) => { fn(e, 'size',  '15.5', 'buttonsSize')}}>15.5</button>
            <button className="Block-Size" value="26" onClick={(e) => { fn(e, 'size',  '16', 'buttonsSize')}}>16</button>
            <button className="Block-Size" value="27" onClick={(e) => { fn(e, 'size',  '16.5', 'buttonsSize')}}>16.5</button>
            <button className="Block-Size" value="28" onClick={(e) => { fn(e, 'size',  '17', 'buttonsSize')}}>17</button>
            <button className="Block-Size" value="29" onClick={(e) => { fn(e, 'size',  '18', 'buttonsSize')}}>18</button>
            <button className="Block-Size" value="30" onClick={(e) => { fn(e, 'size',  '19', 'buttonsSize')}}>19</button>
            <button className="Block-Size" value="31" onClick={(e) => { fn(e, 'size',  '20', 'buttonsSize')}}>20</button>
            <button className="Block-Size" value="32" onClick={(e) => { fn(e, 'size',  '21', 'buttonsSize')}}>21</button>
            <button className="Block-Size" value="33" onClick={(e) => { fn(e, 'size',  '22', 'buttonsSize')}}>22</button>
          </div>
        </div>
      </aside>

    );
  }
}
