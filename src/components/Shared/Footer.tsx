import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Footer: FunctionComponent<{}> = () => {
  const { t } = useTranslation();
  return (
    <>
      {t('footer.text')} <Love>&hearts;</Love> {t('common.by')}{' '}
      <AuhorLink target="_blank" href="https://www.linkedin.com/in/piotr-wi%C4%99caszek-9836b864/">
        {t('footer.author')}
      </AuhorLink>
    </>
  );
};

const Love = styled.span`
  color: #fa0000;
  font-size: 2em;
  margin: 0 0.5em;
`;

const AuhorLink = styled.a`
  margin: 0 0.5em;
`;

export default Footer;
