import React from 'react';
import NextHead from 'next/head';

const defaultTitle = '';
const defaultDescription = '';
const defaultOGURL = '';

const MetaHead = (props) => (
  <>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title || defaultTitle}</title>
      <meta name="description" content={props.description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" sizes="192x192" href="/static/logo192.png" />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" />
      <link rel="icon" href="/static/favicon.png" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || ''} />
      <meta property="og:description" content={props.description || defaultDescription} />
      <meta name="twitter:site" content={props.url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </NextHead>
  </>
);

export default MetaHead;
