import React from 'react';
import css from './styles/index.styl';
import MetaHead from '../fragments/meta-head';

const Index = () => (
  <>
    <MetaHead />
    <div className={css.main}>Loaded</div>
  </>
);

export default Index;
