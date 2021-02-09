import React from "react"
import Section from "./Section"
import SectionTitel from "./SectionTitel"
import styled from "styled-components"
import GeekbrainsIcon from "./icons/GeekbrainsIcon"
import FreecodeIcon from "./icons/FreecodeIcon"
import CertificateImg from "./CertificateImg"
import CertificateImgFreecode from "./CertificateImgFreecode"

const NameTitel = styled.h3`
  font-size: 24px;
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  width: 100%;
  color: var(--litgh-grey);
  margin-top: 15px;
`
const CertificateInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .sertificate-card {
    width: 100%;
    border: 1px solid var(--light-blue);
    padding: 15px;
    margin-bottom: 24px;
    border-radius: 4px;
  }

  @media screen and (max-width: 768px) {
    .sertificate-card {
      width: 100%;
      padding: 0;
    }
  }
`
const Certificate = () => {
  return (
    <Section>
      <div id="certificate">
      <SectionTitel>Certificate</SectionTitel>
      <CertificateInner>
        <div className="sertificate-card">
          <GeekbrainsIcon />
          <NameTitel>GeekBrains</NameTitel>
          <CertificateImg />
        </div>
        <div className="sertificate-card">
          <FreecodeIcon />
          <NameTitel>Freecodecamp</NameTitel>
          <CertificateImgFreecode />
        </div>
      </CertificateInner>
      </div>
    </Section>
  )
}

export default Certificate
