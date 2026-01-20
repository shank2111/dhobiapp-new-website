import { lazy } from "react";
import styled from "styled-components";
import Container from "../../common/Container";
import PrivacyPolicyContent from "../../content/PrivacyPolicyContent.json";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const PolicyContainer = styled.div`
  padding: 3rem 1rem;
  max-width: 900px;
  margin: 0 auto;
`;

const PolicyTitle = styled.h1`
  font-family: "Motiva Sans Bold", serif;
  color: #B71C1C;
  font-size: 48px;
  margin-bottom: 0.5rem;
  text-align: center;

  @media only screen and (max-width: 414px) {
    font-size: 32px;
  }
`;

const LastUpdated = styled.p`
  text-align: center;
  color: #808080;
  font-size: 14px;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeading = styled.h2`
  font-family: "Motiva Sans Bold", serif;
  color: #B71C1C;
  font-size: 24px;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const SectionContent = styled.p`
  color: #2E186A;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 1rem;
  white-space: pre-wrap;

  a {
    color: #2e186a;
    text-decoration: underline;
    font-weight: 600;

    &:hover {
      color: #B71C1C;
    }
  }
`;

const SectionList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 1rem 0;

  li {
    color: #2E186A;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "•";
      color: #B71C1C;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const PrivacyPolicy = () => {
  return (
    <Container>
      <ScrollToTop />
      <PolicyContainer>
        <PolicyTitle>{PrivacyPolicyContent.title}</PolicyTitle>
        <LastUpdated>Last Updated: {PrivacyPolicyContent.lastUpdated}</LastUpdated>
        
        {PrivacyPolicyContent.sections.map((section) => (
          <Section key={section.id} id={section.id}>
            <SectionHeading>{section.heading}</SectionHeading>
            <SectionContent dangerouslySetInnerHTML={{ __html: section.content }} />
            {section.list && (
              <SectionList>
                {section.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </SectionList>
            )}
          </Section>
        ))}
      </PolicyContainer>
    </Container>
  );
};

export default PrivacyPolicy;
