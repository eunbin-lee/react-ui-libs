import React from 'react';
import './Default.css';

function Default() {
  return (
    <div className="default">
      <h2>[Default]</h2>

      <nav>
        <div>Menu1</div>
        <div>Menu2</div>
        <div>Menu3</div>
        <div>Menu4</div>
      </nav>

      <div className="inputs">
        <input type="text" />
        <button>
          <a href="#">Button</a>
        </button>
      </div>
    </div>
  );
}

export default Default;
