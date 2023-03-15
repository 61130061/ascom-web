import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Img ({ src, style}) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <img src={siteConfig.baseUrl + src} style={style} />
  )
}