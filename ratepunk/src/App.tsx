import React from 'react';
import './style/style.scss';
import { Header } from './components/Header';
import { Extension } from './components/Extension';
import { AppLinks } from './components/AppLinks';
import { Footer } from './components/Footer';

export const App = () => {
  return <>
    <Header></Header>
    <main>
      <Extension></Extension>
      <AppLinks></AppLinks>
    </main>
    <Footer></Footer>
  </>
}


