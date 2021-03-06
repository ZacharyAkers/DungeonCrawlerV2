import React from 'react';
import { Button } from '../../ui';
import './Header.css';

export default function Header(props) {
  const {
    toggleMusic,
    bgPlay,
  } = props;

  return (
    <header className="Header">
      <h1 className="title">Dungeon Crawler V2</h1>
      <Button secondary onClick={toggleMusic}>Sound {bgPlay ? 'On' : 'Off'}</Button>
    </header>
  )
}