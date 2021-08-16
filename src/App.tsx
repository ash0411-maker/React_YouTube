import React from 'react';
import './App.css';
import { useState } from "react";

function App() {
  // new Date()は現在時刻を取得します。
  // React が「state の値が変更されているかどうか」を判断して、画面表示を切り替えている
  const [state, setState] = useState(new Date());
  setInterval(() => {
    setState(new Date());
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
        {/*
          JSX内で変数を画面表示したい場合は、{}で変数を囲む必要があります。
        */}
        <p>{state.toLocaleTimeString()}</p>
      </header>
    </div>
  );
}

export default App;
